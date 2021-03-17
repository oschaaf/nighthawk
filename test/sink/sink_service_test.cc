#include <grpc++/grpc++.h>

#include <chrono>

#include "external/envoy/test/test_common/environment.h"
#include "external/envoy/test/test_common/network_utility.h"
#include "external/envoy/test/test_common/utility.h"

#include "api/sink/sink.pb.h"

#include "sink/service_impl.h"

#include "test/mocks/sink/mock_sink.h"

#include "gtest/gtest.h"

using namespace std::chrono_literals;
using namespace testing;

namespace Nighthawk {
namespace {

using ::nighthawk::SinkRequest;
using ::nighthawk::SinkResponse;

class SinkServiceTest : public TestWithParam<Envoy::Network::Address::IpVersion> {
public:
  void SetUp() override {
    auto sink = std::make_unique<MockSink>();
    sink_ = sink.get();
    service_ = std::make_unique<SinkServiceImpl>(std::move(sink));
    grpc::ServerBuilder builder;
    loopback_address_ = Envoy::Network::Test::getLoopbackAddressUrlString(GetParam());

    builder.AddListeningPort(fmt::format("{}:0", loopback_address_),
                             grpc::InsecureServerCredentials(), &grpc_server_port_);
    builder.RegisterService(service_.get());
    server_ = builder.BuildAndStart();
    setupGrpcClient();
  }

  void TearDown() override { server_->Shutdown(); }

  void setupGrpcClient() {
    channel_ = grpc::CreateChannel(fmt::format("{}:{}", loopback_address_, grpc_server_port_),
                                   grpc::InsecureChannelCredentials());
    stub_ = std::make_unique<nighthawk::NighthawkSink::Stub>(channel_);
  }

  MockSink* sink_{nullptr};
  std::unique_ptr<SinkServiceImpl> service_;
  std::unique_ptr<grpc::Server> server_;
  std::shared_ptr<grpc::Channel> channel_;
  grpc::ClientContext context_;
  ::nighthawk::SinkRequest request_;
  ::nighthawk::SinkResponse response_;
  std::unique_ptr<nighthawk::NighthawkSink::Stub> stub_;
  std::string loopback_address_;
  int grpc_server_port_{0};
};

INSTANTIATE_TEST_SUITE_P(IpVersions, SinkServiceTest,
                         ValuesIn(Envoy::TestEnvironment::getIpVersionsForTest()),
                         Envoy::TestUtility::ipTestParamsToString);

TEST_P(SinkServiceTest, LoadSingleResultWithJustExecutionResponse) {
  // Our mock sink will yield a single result, with the correct execution id.
  const std::string kTestId = "test-id";
  absl::StatusOr<std::vector<::nighthawk::client::ExecutionResponse>> response_from_mock_sink =
      std::vector<::nighthawk::client::ExecutionResponse>{{}};
  nighthawk::client::ExecutionResponse& response = response_from_mock_sink.value().at(0);
  response.mutable_execution_id()->assign(kTestId);
  response.mutable_output();
  request_.set_execution_id(kTestId);
  auto r = stub_->SinkRequestStream(&context_);
  EXPECT_CALL(*sink_, LoadExecutionResult(kTestId)).WillOnce(Return(response_from_mock_sink));
  r->Write(request_, {});
  EXPECT_TRUE(r->WritesDone());
  ASSERT_TRUE(r->Read(&response_));
  EXPECT_TRUE(response_.has_execution_response());
  EXPECT_EQ(response_.execution_response().execution_id(), kTestId);
  EXPECT_TRUE(r->Finish().ok());
}

TEST_P(SinkServiceTest, LoadSingleResultNoOutputOrAppendix) {
  // Our mock sink will yield a single result, with the correct execution id.
  const std::string kTestId = "test-id";
  absl::StatusOr<std::vector<::nighthawk::client::ExecutionResponse>> response_from_mock_sink =
      std::vector<::nighthawk::client::ExecutionResponse>{{}};
  response_from_mock_sink.value().at(0).mutable_execution_id()->assign(kTestId);
  request_.set_execution_id(kTestId);
  auto r = stub_->SinkRequestStream(&context_);
  EXPECT_CALL(*sink_, LoadExecutionResult(kTestId)).WillOnce(Return(response_from_mock_sink));
  r->Write(request_, {});
  EXPECT_TRUE(r->WritesDone());
  ASSERT_FALSE(r->Read(&response_));
  EXPECT_EQ(response_.execution_response().execution_id(), "");
  ::grpc::Status status = r->Finish();
  EXPECT_FALSE(status.ok());
  EXPECT_EQ(status.error_message(), "INTERNAL: sink->LoadExecutionResult yielded a result with "
                                    "neither an appendix or output set!");
}

TEST_P(SinkServiceTest, LoadSingleSinkYieldsWrongExecutionId) {
  // Our mock sink will yield a single result, but with a wrong/unexpected execution id.
  const std::string kTestId = "test-id";
  absl::StatusOr<std::vector<::nighthawk::client::ExecutionResponse>> response_from_mock_sink =
      std::vector<::nighthawk::client::ExecutionResponse>{{}};
  response_from_mock_sink.value().at(0).mutable_execution_id()->assign("wrong-id");
  request_.set_execution_id(kTestId);
  auto r = stub_->SinkRequestStream(&context_);
  EXPECT_CALL(*sink_, LoadExecutionResult(kTestId)).WillOnce(Return(response_from_mock_sink));
  r->Write(request_, {});
  EXPECT_TRUE(r->WritesDone());
  EXPECT_FALSE(r->Read(&response_));
  ::grpc::Status status = r->Finish();
  EXPECT_FALSE(status.ok());
  EXPECT_EQ(status.error_message(),
            "INTERNAL: sink->LoadExecutionResult yielded a result with a bad execution id!");
}

TEST_P(SinkServiceTest, LoadSingleSinkYieldsEmptyResultSet) {
  // Our mock sink will yield an empty vector of results.
  const std::string kTestId = "test-id";
  absl::StatusOr<std::vector<::nighthawk::client::ExecutionResponse>> response_from_mock_sink =
      std::vector<::nighthawk::client::ExecutionResponse>{};
  request_.set_execution_id(kTestId);
  auto r = stub_->SinkRequestStream(&context_);
  EXPECT_CALL(*sink_, LoadExecutionResult(kTestId)).WillOnce(Return(response_from_mock_sink));
  r->Write(request_, {});
  EXPECT_TRUE(r->WritesDone());
  EXPECT_FALSE(r->Read(&response_));
  ::grpc::Status status = r->Finish();
  EXPECT_FALSE(status.ok());
  EXPECT_EQ(status.error_message(),
            "INTERNAL: sink->LoadExecutionResult yielded an empty vector, and broke its promise.");
}

TEST_P(SinkServiceTest, LoadTwoResultsWithExecutionResponseWhereOneHasErrorDetails) {
  // Set up the mock sink to yield two results on the call to load, both with execution results
  // attached. One of the execution results will have an error detail set, indicating that remote
  // execution didn't terminate successfully.
  const std::string kTestId = "test-id";
  absl::StatusOr<std::vector<::nighthawk::client::ExecutionResponse>> response_from_mock_sink =
      std::vector<::nighthawk::client::ExecutionResponse>{{}, {}};
  nighthawk::client::ExecutionResponse& response = response_from_mock_sink.value().at(0);
  response.mutable_execution_id()->assign(kTestId);
  response.mutable_output();
  nighthawk::client::ExecutionResponse& response_2 = response_from_mock_sink.value().at(1);
  response_2.mutable_execution_id()->assign(kTestId);
  response_2.mutable_output();
  google::rpc::Status* error_detail = response.mutable_error_detail();
  error_detail->set_code(-5);
  error_detail->set_message("foo error");

  request_.set_execution_id(kTestId);

  auto r = stub_->SinkRequestStream(&context_);
  EXPECT_CALL(*sink_, LoadExecutionResult(kTestId)).WillOnce(Return(response_from_mock_sink));
  r->Write(request_, {});
  EXPECT_TRUE(r->WritesDone());

  // Make sure that the response we get reflects what the mock sink's Load call returned.
  ASSERT_TRUE(r->Read(&response_));
  EXPECT_TRUE(response_.has_execution_response());
  EXPECT_EQ(response_.execution_response().execution_id(), kTestId);
  ASSERT_TRUE(response_.execution_response().has_error_detail());
  EXPECT_EQ(response_.execution_response().error_detail().code(), -1);
  EXPECT_EQ(response_.execution_response().error_detail().message(),
            "One or more remote execution(s) terminated with a failure.");
  ASSERT_EQ(response_.execution_response().error_detail().details_size(), 1);
  ASSERT_TRUE(response_.execution_response().error_detail().details(0).Is<::google::rpc::Status>());
  ::google::rpc::Status status;
  Envoy::MessageUtil::unpackTo(response_.execution_response().error_detail().details(0), status);
  // TODO(XXX): proper equivalence test.
  EXPECT_EQ(status.DebugString(), error_detail->DebugString());
  EXPECT_TRUE(r->Finish().ok());
}

} // namespace
} // namespace Nighthawk
