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
using ::nighthawk::client::ExecutionRequest;
using ::nighthawk::client::ExecutionResponse;
using ::testing::_;
using ::testing::DoAll;
using ::testing::HasSubstr;
using ::testing::Return;
using ::testing::SaveArg;

TEST(ForwardExecutionResponse, UsesSpecifiedExecutionResponseArguments) {
  ExecutionResponse observed_request_1;
  ExecutionResponse observed_request_2;
  nighthawk::client::MockNighthawkSinkStub mock_nighthawk_sink_stub;
  // Configure the mock Nighthawk Service stub to return an inner mock channel when the code under
  // test requests a channel. Set call expectations on the inner mock channel.
  EXPECT_CALL(mock_nighthawk_sink_stub, ForwardExecutionResponseRaw)
      .WillOnce([&observed_request_1](grpc_impl::ClientContext*, Envoy::ProtobufWkt::Empty*) {
        auto* mock_writer = new grpc::testing::MockClientWriter<ExecutionResponse>();
        EXPECT_CALL(*mock_writer, Write(_, _))
            .WillOnce(::testing::DoAll(::testing::SaveArg<0>(&observed_request_1), Return(true)));
        EXPECT_CALL(*mock_writer, WritesDone()).WillOnce(Return(true));
        EXPECT_CALL(*mock_writer, Finish()).WillOnce(Return(::grpc::Status::OK));
        return mock_writer;
      })
      .WillOnce([&observed_request_2](grpc_impl::ClientContext*, Envoy::ProtobufWkt::Empty*) {
        auto* mock_writer = new grpc::testing::MockClientWriter<ExecutionResponse>();
        EXPECT_CALL(*mock_writer, Write(_, _))
            .WillOnce(::testing::DoAll(::testing::SaveArg<0>(&observed_request_2), Return(true)));
        EXPECT_CALL(*mock_writer, WritesDone()).WillOnce(Return(true));
        EXPECT_CALL(*mock_writer, Finish()).WillOnce(Return(::grpc::Status::OK));
        return mock_writer;
      });

  NighthawkSinkClientImpl client;
  ExecutionResponse request_1, request_2;
  nighthawk::client::Counter* counter = request_1.mutable_output()->add_results()->add_counters();
  counter->set_name("test_1");
  counter->set_value(1);
  counter = request_2.mutable_output()->add_results()->add_counters();
  counter->set_name("test_2");
  counter->set_value(2);

  absl::Status response_1 = client.ForwardExecutionResponse(&mock_nighthawk_sink_stub, request_1);
  absl::Status response_2 = client.ForwardExecutionResponse(&mock_nighthawk_sink_stub, request_2);
  EXPECT_EQ(observed_request_1.DebugString(), request_1.DebugString());
  EXPECT_EQ(observed_request_2.DebugString(), request_2.DebugString());
  EXPECT_TRUE(MessageDifferencer::Equivalent(observed_request_1, request_1));
  EXPECT_TRUE(MessageDifferencer::Equivalent(observed_request_2, request_2));
}

TEST(ForwardExecutionResponse, ReturnsResponseSuccessfully) {
  nighthawk::client::MockNighthawkSinkStub mock_nighthawk_sink_stub;
  // Configure the mock Nighthawk Service stub to return an inner mock channel when the code under
  // test requests a channel. Set call expectations on the inner mock channel.
  EXPECT_CALL(mock_nighthawk_sink_stub, ForwardExecutionResponseRaw)
      .WillOnce([](grpc_impl::ClientContext*, Envoy::ProtobufWkt::Empty*) {
        auto* mock_writer = new grpc::testing::MockClientWriter<ExecutionResponse>();
        EXPECT_CALL(*mock_writer, Write(_, _)).WillOnce(Return(true));
        EXPECT_CALL(*mock_writer, WritesDone()).WillOnce(Return(true));
        EXPECT_CALL(*mock_writer, Finish()).WillOnce(Return(::grpc::Status::OK));
        return mock_writer;
      });

  NighthawkSinkClientImpl client;
  absl::Status response = client.ForwardExecutionResponse(&mock_nighthawk_sink_stub, {});
  EXPECT_TRUE(response.ok());
}

TEST(ForwardExecutionResponse, ReturnsErrorIfNighthawkServiceWriteFails) {
  nighthawk::client::MockNighthawkSinkStub mock_nighthawk_sink_stub;
  // Configure the mock Nighthawk Service stub to return an inner mock channel when the code under
  // test requests a channel. Set call expectations on the inner mock channel.
  EXPECT_CALL(mock_nighthawk_sink_stub, ForwardExecutionResponseRaw)
      .WillOnce([](grpc_impl::ClientContext*, Envoy::ProtobufWkt::Empty*) {
        auto* mock_writer = new grpc::testing::MockClientWriter<ExecutionResponse>();
        EXPECT_CALL(*mock_writer, Write(_, _)).WillOnce(Return(false));
        return mock_writer;
      });

  NighthawkSinkClientImpl client;
  absl::Status response = client.ForwardExecutionResponse(&mock_nighthawk_sink_stub, {});
  ASSERT_FALSE(response.ok());
  EXPECT_EQ(response.code(), absl::StatusCode::kUnavailable);
  EXPECT_THAT(response.message(), HasSubstr("Failed to write"));
}

TEST(ForwardExecutionResponse, ReturnsErrorIfNighthawkServiceWritesDoneFails) {
  nighthawk::client::MockNighthawkSinkStub mock_nighthawk_sink_stub;
  // Configure the mock Nighthawk Service stub to return an inner mock channel when the code under
  // test requests a channel. Set call expectations on the inner mock channel.
  EXPECT_CALL(mock_nighthawk_sink_stub, ForwardExecutionResponseRaw)
      .WillOnce([](grpc_impl::ClientContext*, Envoy::ProtobufWkt::Empty*) {
        auto* mock_writer = new grpc::testing::MockClientWriter<ExecutionResponse>();
        EXPECT_CALL(*mock_writer, Write(_, _)).WillOnce(Return(true));
        EXPECT_CALL(*mock_writer, WritesDone()).WillOnce(Return(false));
        return mock_writer;
      });

  NighthawkSinkClientImpl client;
  absl::Status response = client.ForwardExecutionResponse(&mock_nighthawk_sink_stub, {});
  ASSERT_FALSE(response.ok());
  EXPECT_EQ(response.code(), absl::StatusCode::kInternal);
  EXPECT_THAT(response.message(), HasSubstr("WritesDone() failed"));
}

TEST(ForwardExecutionResponse, PropagatesErrorIfNighthawkServiceGrpcStreamClosesAbnormally) {
  nighthawk::client::MockNighthawkSinkStub mock_nighthawk_sink_stub;
  // Configure the mock Nighthawk Service stub to return an inner mock channel when the code under
  // test requests a channel. Set call expectations on the inner mock channel.
  EXPECT_CALL(mock_nighthawk_sink_stub, ForwardExecutionResponseRaw)
      .WillOnce([](grpc_impl::ClientContext*, Envoy::ProtobufWkt::Empty*) {
        auto* mock_writer = new grpc::testing::MockClientWriter<ExecutionResponse>();
        EXPECT_CALL(*mock_writer, Write(_, _)).WillOnce(Return(true));
        EXPECT_CALL(*mock_writer, WritesDone()).WillOnce(Return(true));
        EXPECT_CALL(*mock_writer, Finish())
            .WillOnce(
                Return(::grpc::Status(::grpc::PERMISSION_DENIED, "Finish failure status message")));
        return mock_writer;
      });

  NighthawkSinkClientImpl client;
  absl::Status response = client.ForwardExecutionResponse(&mock_nighthawk_sink_stub, {});
  ASSERT_FALSE(response.ok());
  EXPECT_EQ(response.code(), absl::StatusCode::kPermissionDenied);
  EXPECT_THAT(response.message(), HasSubstr("Finish failure status message"));
}

} // namespace
} // namespace Nighthawk
