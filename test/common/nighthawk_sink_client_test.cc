#include "external/envoy/source/common/protobuf/protobuf.h"

#include "api/client/options.pb.h"
#include "api/client/service.grpc.pb.h"
#include "api/client/service_mock.grpc.pb.h"

#include "common/nighthawk_sink_client_impl.h"

#include "grpcpp/test/mock_stream.h"

#include "gmock/gmock.h"
#include "gtest/gtest.h"

namespace Nighthawk {

namespace {

using ::Envoy::Protobuf::util::MessageDifferencer;
using ::nighthawk::client::CommandLineOptions;
using ::nighthawk::client::StoreExecutionRequest;
using ::nighthawk::client::StoreExecutionResponse;
using ::testing::_;
using ::testing::DoAll;
using ::testing::HasSubstr;
using ::testing::Return;
using ::testing::SaveArg;
using ::testing::SetArgPointee;

TEST(StoreExecutionResponseStream, UsesSpecifiedExecutionResponseArguments) {
  StoreExecutionRequest observed_request_1;
  StoreExecutionRequest observed_request_2;
  nighthawk::client::MockNighthawkSinkStub mock_nighthawk_sink_stub;
  // Configure the mock Nighthawk Service stub to return an inner mock channel when the code under
  // test requests a channel. Set call expectations on the inner mock channel.
  EXPECT_CALL(mock_nighthawk_sink_stub, StoreExecutionResponseStreamRaw)
      .WillOnce([&observed_request_1](grpc_impl::ClientContext*,
                                      ::nighthawk::client::StoreExecutionResponse*) {
        auto* mock_writer = new grpc::testing::MockClientWriter<StoreExecutionRequest>();
        EXPECT_CALL(*mock_writer, Write(_, _))
            .WillOnce(::testing::DoAll(::testing::SaveArg<0>(&observed_request_1), Return(true)));
        EXPECT_CALL(*mock_writer, WritesDone()).WillOnce(Return(true));
        EXPECT_CALL(*mock_writer, Finish()).WillOnce(Return(::grpc::Status::OK));
        return mock_writer;
      })
      .WillOnce([&observed_request_2](grpc_impl::ClientContext*,
                                      ::nighthawk::client::StoreExecutionResponse*) {
        auto* mock_writer = new grpc::testing::MockClientWriter<StoreExecutionRequest>();
        EXPECT_CALL(*mock_writer, Write(_, _))
            .WillOnce(::testing::DoAll(::testing::SaveArg<0>(&observed_request_2), Return(true)));
        EXPECT_CALL(*mock_writer, WritesDone()).WillOnce(Return(true));
        EXPECT_CALL(*mock_writer, Finish()).WillOnce(Return(::grpc::Status::OK));
        return mock_writer;
      });

  NighthawkSinkClientImpl client;
  StoreExecutionRequest request_1, request_2;
  nighthawk::client::ExecutionResponse execution_response_1, execution_response_2;
  nighthawk::client::Counter* counter =
      execution_response_1.mutable_output()->add_results()->add_counters();
  counter->set_name("test_1");
  counter->set_value(1);
  counter = execution_response_2.mutable_output()->add_results()->add_counters();
  counter->set_name("test_2");
  counter->set_value(2);
  *request_1.mutable_execution_response() = execution_response_1;
  *request_2.mutable_execution_response() = execution_response_2;

  absl::StatusOr<nighthawk::client::StoreExecutionResponse> response_1 =
      client.StoreExecutionResponseStream(&mock_nighthawk_sink_stub, request_1);
  absl::StatusOr<nighthawk::client::StoreExecutionResponse> response_2 =
      client.StoreExecutionResponseStream(&mock_nighthawk_sink_stub, request_2);
  EXPECT_EQ(observed_request_1.DebugString(), request_1.DebugString());
  EXPECT_EQ(observed_request_2.DebugString(), request_2.DebugString());
  EXPECT_TRUE(MessageDifferencer::Equivalent(observed_request_1, request_1));
  EXPECT_TRUE(MessageDifferencer::Equivalent(observed_request_2, request_2));
}

TEST(StoreExecutionResponseStream, ReturnsResponseSuccessfully) {
  nighthawk::client::MockNighthawkSinkStub mock_nighthawk_sink_stub;
  // Configure the mock Nighthawk Service stub to return an inner mock channel when the code under
  // test requests a channel. Set call expectations on the inner mock channel.
  EXPECT_CALL(mock_nighthawk_sink_stub, StoreExecutionResponseStreamRaw)
      .WillOnce([](grpc_impl::ClientContext*, ::nighthawk::client::StoreExecutionResponse*) {
        auto* mock_writer = new grpc::testing::MockClientWriter<StoreExecutionRequest>();
        EXPECT_CALL(*mock_writer, Write(_, _)).WillOnce(Return(true));
        EXPECT_CALL(*mock_writer, WritesDone()).WillOnce(Return(true));
        EXPECT_CALL(*mock_writer, Finish()).WillOnce(Return(::grpc::Status::OK));
        return mock_writer;
      });

  NighthawkSinkClientImpl client;
  absl::StatusOr<nighthawk::client::StoreExecutionResponse> response =
      client.StoreExecutionResponseStream(&mock_nighthawk_sink_stub, {});
  EXPECT_TRUE(response.ok());
}

TEST(StoreExecutionResponseStream, ReturnsErrorIfNighthawkServiceWriteFails) {
  nighthawk::client::MockNighthawkSinkStub mock_nighthawk_sink_stub;
  // Configure the mock Nighthawk Service stub to return an inner mock channel when the code under
  // test requests a channel. Set call expectations on the inner mock channel.
  EXPECT_CALL(mock_nighthawk_sink_stub, StoreExecutionResponseStreamRaw)
      .WillOnce([](grpc_impl::ClientContext*, ::nighthawk::client::StoreExecutionResponse*) {
        auto* mock_writer = new grpc::testing::MockClientWriter<StoreExecutionRequest>();
        EXPECT_CALL(*mock_writer, Write(_, _)).WillOnce(Return(false));
        return mock_writer;
      });

  NighthawkSinkClientImpl client;
  absl::StatusOr<nighthawk::client::StoreExecutionResponse> response =
      client.StoreExecutionResponseStream(&mock_nighthawk_sink_stub, {});
  ASSERT_FALSE(response.ok());
  EXPECT_EQ(response.status().code(), absl::StatusCode::kUnavailable);
  EXPECT_THAT(response.status().message(), HasSubstr("Failed to write"));
}

TEST(StoreExecutionResponseStream, ReturnsErrorIfNighthawkServiceWritesDoneFails) {
  nighthawk::client::MockNighthawkSinkStub mock_nighthawk_sink_stub;
  // Configure the mock Nighthawk Service stub to return an inner mock channel when the code under
  // test requests a channel. Set call expectations on the inner mock channel.
  EXPECT_CALL(mock_nighthawk_sink_stub, StoreExecutionResponseStreamRaw)
      .WillOnce([](grpc_impl::ClientContext*, ::nighthawk::client::StoreExecutionResponse*) {
        auto* mock_writer = new grpc::testing::MockClientWriter<StoreExecutionRequest>();
        EXPECT_CALL(*mock_writer, Write(_, _)).WillOnce(Return(true));
        EXPECT_CALL(*mock_writer, WritesDone()).WillOnce(Return(false));
        return mock_writer;
      });

  NighthawkSinkClientImpl client;
  absl::StatusOr<nighthawk::client::StoreExecutionResponse> response =
      client.StoreExecutionResponseStream(&mock_nighthawk_sink_stub, {});
  ASSERT_FALSE(response.ok());
  EXPECT_EQ(response.status().code(), absl::StatusCode::kInternal);
  EXPECT_THAT(response.status().message(), HasSubstr("WritesDone() failed"));
}

TEST(StoreExecutionResponseStream, PropagatesErrorIfNighthawkServiceGrpcStreamClosesAbnormally) {
  nighthawk::client::MockNighthawkSinkStub mock_nighthawk_sink_stub;
  // Configure the mock Nighthawk Service stub to return an inner mock channel when the code under
  // test requests a channel. Set call expectations on the inner mock channel.
  EXPECT_CALL(mock_nighthawk_sink_stub, StoreExecutionResponseStreamRaw)
      .WillOnce([](grpc_impl::ClientContext*, ::nighthawk::client::StoreExecutionResponse*) {
        auto* mock_writer = new grpc::testing::MockClientWriter<StoreExecutionRequest>();
        EXPECT_CALL(*mock_writer, Write(_, _)).WillOnce(Return(true));
        EXPECT_CALL(*mock_writer, WritesDone()).WillOnce(Return(true));
        EXPECT_CALL(*mock_writer, Finish())
            .WillOnce(
                Return(::grpc::Status(::grpc::PERMISSION_DENIED, "Finish failure status message")));
        return mock_writer;
      });

  NighthawkSinkClientImpl client;
  absl::StatusOr<nighthawk::client::StoreExecutionResponse> response =
      client.StoreExecutionResponseStream(&mock_nighthawk_sink_stub, {});
  ASSERT_FALSE(response.ok());
  EXPECT_EQ(response.status().code(), absl::StatusCode::kPermissionDenied);
  EXPECT_THAT(response.status().message(), HasSubstr("Finish failure status message"));
}

} // namespace
} // namespace Nighthawk
