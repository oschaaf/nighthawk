#include "external/envoy/source/common/protobuf/protobuf.h"

#include "api/client/options.pb.h"
#include "api/client/service.grpc.pb.h"
#include "api/client/service_mock.grpc.pb.h"

#include "common/nighthawk_service_client_impl.h"

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
using ::testing::SetArgPointee;

TEST(PerformNighthawkBenchmark, UsesSpecifiedCommandLineOptions) {
  const int kExpectedRps = 456;
  ExecutionRequest request;
  nighthawk::client::MockNighthawkServiceStub mock_nighthawk_service_stub;
  // Configure the mock Nighthawk Service stub to return an inner mock channel when the code under
  // test requests a channel. Set call expectations on the inner mock channel.
  EXPECT_CALL(mock_nighthawk_service_stub, ExecutionStreamRaw)
      .WillOnce([&request](grpc_impl::ClientContext*) {
        auto* mock_reader_writer =
            new grpc::testing::MockClientReaderWriter<ExecutionRequest, ExecutionResponse>();
        // PerformNighthawkBenchmark currently expects Read to return true exactly once.
        EXPECT_CALL(*mock_reader_writer, Read(_)).WillOnce(Return(true)).WillOnce(Return(false));
        // Capture the Nighthawk request PerformNighthawkBenchmark sends on the channel.
        EXPECT_CALL(*mock_reader_writer, Write(_, _))
            .WillOnce(::testing::DoAll(::testing::SaveArg<0>(&request), Return(true)));
        EXPECT_CALL(*mock_reader_writer, WritesDone()).WillOnce(Return(true));
        EXPECT_CALL(*mock_reader_writer, Finish()).WillOnce(Return(::grpc::Status::OK));
        return mock_reader_writer;
      });

  CommandLineOptions command_line_options;
  command_line_options.mutable_requests_per_second()->set_value(kExpectedRps);
  NighthawkServiceClientImpl client;
  absl::StatusOr<ExecutionResponse> response_or =
      client.PerformNighthawkBenchmark(&mock_nighthawk_service_stub, command_line_options);
  EXPECT_TRUE(response_or.ok());
  EXPECT_EQ(request.start_request().options().requests_per_second().value(), kExpectedRps);
}

TEST(PerformNighthawkBenchmark, ReturnsNighthawkResponseSuccessfully) {
  ExecutionResponse expected_response;
  nighthawk::client::MockNighthawkServiceStub mock_nighthawk_service_stub;
  // Configure the mock Nighthawk Service stub to return an inner mock channel when the code under
  // test requests a channel. Set call expectations on the inner mock channel.
  EXPECT_CALL(mock_nighthawk_service_stub, ExecutionStreamRaw)
      .WillOnce([&expected_response](grpc_impl::ClientContext*) {
        auto* mock_reader_writer =
            new grpc::testing::MockClientReaderWriter<ExecutionRequest, ExecutionResponse>();
        // PerformNighthawkBenchmark currently expects Read to return true exactly once.
        // Capture the gRPC response proto as it is written to the output parameter.
        EXPECT_CALL(*mock_reader_writer, Read(_))
            .WillOnce(DoAll(SetArgPointee<0>(expected_response), Return(true)))
            .WillOnce(Return(false));
        EXPECT_CALL(*mock_reader_writer, Write(_, _)).WillOnce(Return(true));
        EXPECT_CALL(*mock_reader_writer, WritesDone()).WillOnce(Return(true));
        EXPECT_CALL(*mock_reader_writer, Finish()).WillOnce(Return(::grpc::Status::OK));
        return mock_reader_writer;
      });

  NighthawkServiceClientImpl client;
  absl::StatusOr<ExecutionResponse> response_or =
      client.PerformNighthawkBenchmark(&mock_nighthawk_service_stub, CommandLineOptions());
  EXPECT_TRUE(response_or.ok());
  ExecutionResponse actual_response = response_or.value();
  EXPECT_TRUE(MessageDifferencer::Equivalent(actual_response, expected_response));
  EXPECT_EQ(actual_response.DebugString(), expected_response.DebugString());
}

TEST(PerformNighthawkBenchmark, ReturnsErrorIfNighthawkServiceDoesNotSendResponse) {
  nighthawk::client::MockNighthawkServiceStub mock_nighthawk_service_stub;
  // Configure the mock Nighthawk Service stub to return an inner mock channel when the code under
  // test requests a channel. Set call expectations on the inner mock channel.
  EXPECT_CALL(mock_nighthawk_service_stub, ExecutionStreamRaw)
      .WillOnce([](grpc_impl::ClientContext*) {
        auto* mock_reader_writer =
            new grpc::testing::MockClientReaderWriter<ExecutionRequest, ExecutionResponse>();
        EXPECT_CALL(*mock_reader_writer, Read(_)).WillOnce(Return(false));
        EXPECT_CALL(*mock_reader_writer, Write(_, _)).WillOnce(Return(true));
        EXPECT_CALL(*mock_reader_writer, WritesDone()).WillOnce(Return(true));
        return mock_reader_writer;
      });

  NighthawkServiceClientImpl client;
  absl::StatusOr<ExecutionResponse> response_or =
      client.PerformNighthawkBenchmark(&mock_nighthawk_service_stub, CommandLineOptions());
  ASSERT_FALSE(response_or.ok());
  EXPECT_EQ(response_or.status().code(), absl::StatusCode::kInternal);
  EXPECT_THAT(response_or.status().message(),
              HasSubstr("Nighthawk Service did not send a gRPC response."));
}

TEST(PerformNighthawkBenchmark, ReturnsErrorIfNighthawkServiceWriteFails) {
  nighthawk::client::MockNighthawkServiceStub mock_nighthawk_service_stub;
  // Configure the mock Nighthawk Service stub to return an inner mock channel when the code under
  // test requests a channel. Set call expectations on the inner mock channel.
  EXPECT_CALL(mock_nighthawk_service_stub, ExecutionStreamRaw)
      .WillOnce([](grpc_impl::ClientContext*) {
        auto* mock_reader_writer =
            new grpc::testing::MockClientReaderWriter<ExecutionRequest, ExecutionResponse>();
        EXPECT_CALL(*mock_reader_writer, Write(_, _)).WillOnce(Return(false));
        return mock_reader_writer;
      });

  NighthawkServiceClientImpl client;
  absl::StatusOr<ExecutionResponse> response_or =
      client.PerformNighthawkBenchmark(&mock_nighthawk_service_stub, CommandLineOptions());
  ASSERT_FALSE(response_or.ok());
  EXPECT_EQ(response_or.status().code(), absl::StatusCode::kUnavailable);
  EXPECT_THAT(response_or.status().message(), HasSubstr("Failed to write"));
}

TEST(PerformNighthawkBenchmark, ReturnsErrorIfNighthawkServiceWritesDoneFails) {
  nighthawk::client::MockNighthawkServiceStub mock_nighthawk_service_stub;
  // Configure the mock Nighthawk Service stub to return an inner mock channel when the code under
  // test requests a channel. Set call expectations on the inner mock channel.
  EXPECT_CALL(mock_nighthawk_service_stub, ExecutionStreamRaw)
      .WillOnce([](grpc_impl::ClientContext*) {
        auto* mock_reader_writer =
            new grpc::testing::MockClientReaderWriter<ExecutionRequest, ExecutionResponse>();
        EXPECT_CALL(*mock_reader_writer, Write(_, _)).WillOnce(Return(true));
        EXPECT_CALL(*mock_reader_writer, WritesDone()).WillOnce(Return(false));
        return mock_reader_writer;
      });

  NighthawkServiceClientImpl client;
  absl::StatusOr<ExecutionResponse> response_or =
      client.PerformNighthawkBenchmark(&mock_nighthawk_service_stub, CommandLineOptions());
  ASSERT_FALSE(response_or.ok());
  EXPECT_EQ(response_or.status().code(), absl::StatusCode::kInternal);
  EXPECT_THAT(response_or.status().message(), HasSubstr("WritesDone() failed"));
}

TEST(PerformNighthawkBenchmark, PropagatesErrorIfNighthawkServiceGrpcStreamClosesAbnormally) {
  nighthawk::client::MockNighthawkServiceStub mock_nighthawk_service_stub;
  // Configure the mock Nighthawk Service stub to return an inner mock channel when the code under
  // test requests a channel. Set call expectations on the inner mock channel.
  EXPECT_CALL(mock_nighthawk_service_stub, ExecutionStreamRaw)
      .WillOnce([](grpc_impl::ClientContext*) {
        auto* mock_reader_writer =
            new grpc::testing::MockClientReaderWriter<ExecutionRequest, ExecutionResponse>();
        // PerformNighthawkBenchmark currently expects Read to return true exactly once.
        EXPECT_CALL(*mock_reader_writer, Read(_)).WillOnce(Return(true)).WillOnce(Return(false));
        EXPECT_CALL(*mock_reader_writer, Write(_, _)).WillOnce(Return(true));
        EXPECT_CALL(*mock_reader_writer, WritesDone()).WillOnce(Return(true));
        EXPECT_CALL(*mock_reader_writer, Finish())
            .WillOnce(
                Return(::grpc::Status(::grpc::PERMISSION_DENIED, "Finish failure status message")));
        return mock_reader_writer;
      });

  NighthawkServiceClientImpl client;
  absl::StatusOr<ExecutionResponse> response_or =
      client.PerformNighthawkBenchmark(&mock_nighthawk_service_stub, CommandLineOptions());
  ASSERT_FALSE(response_or.ok());
  EXPECT_EQ(response_or.status().code(), absl::StatusCode::kPermissionDenied);
  EXPECT_THAT(response_or.status().message(), HasSubstr("Finish failure status message"));
}

TEST(ForwardExecutionResponse, UsesSpecifiedExecutionResponseArguments) {
  ExecutionResponse observed_request_1;
  ExecutionResponse observed_request_2;
  nighthawk::client::MockNighthawkServiceStub mock_nighthawk_service_stub;
  // Configure the mock Nighthawk Service stub to return an inner mock channel when the code under
  // test requests a channel. Set call expectations on the inner mock channel.
  EXPECT_CALL(mock_nighthawk_service_stub, ForwardExecutionResponseRaw)
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

  NighthawkServiceClientImpl client;
  ExecutionResponse request_1, request_2;
  nighthawk::client::Counter* counter = request_1.mutable_output()->add_results()->add_counters();
  counter->set_name("test_1");
  counter->set_value(1);
  counter = request_2.mutable_output()->add_results()->add_counters();
  counter->set_name("test_2");
  counter->set_value(2);

  absl::Status response_1 =
      client.ForwardExecutionResponse(&mock_nighthawk_service_stub, request_1);
  absl::Status response_2 =
      client.ForwardExecutionResponse(&mock_nighthawk_service_stub, request_2);
  EXPECT_EQ(observed_request_1.DebugString(), request_1.DebugString());
  EXPECT_EQ(observed_request_2.DebugString(), request_2.DebugString());
  EXPECT_TRUE(MessageDifferencer::Equivalent(observed_request_1, request_1));
  EXPECT_TRUE(MessageDifferencer::Equivalent(observed_request_2, request_2));
}

TEST(ForwardExecutionResponse, ReturnsResponseSuccessfully) {
  nighthawk::client::MockNighthawkServiceStub mock_nighthawk_service_stub;
  // Configure the mock Nighthawk Service stub to return an inner mock channel when the code under
  // test requests a channel. Set call expectations on the inner mock channel.
  EXPECT_CALL(mock_nighthawk_service_stub, ForwardExecutionResponseRaw)
      .WillOnce([](grpc_impl::ClientContext*, Envoy::ProtobufWkt::Empty*) {
        auto* mock_writer = new grpc::testing::MockClientWriter<ExecutionResponse>();
        EXPECT_CALL(*mock_writer, Write(_, _)).WillOnce(Return(true));
        EXPECT_CALL(*mock_writer, WritesDone()).WillOnce(Return(true));
        EXPECT_CALL(*mock_writer, Finish()).WillOnce(Return(::grpc::Status::OK));
        return mock_writer;
      });

  NighthawkServiceClientImpl client;
  absl::Status response = client.ForwardExecutionResponse(&mock_nighthawk_service_stub, {});
  EXPECT_TRUE(response.ok());
}

TEST(ForwardExecutionResponse, ReturnsErrorIfNighthawkServiceWriteFails) {
  nighthawk::client::MockNighthawkServiceStub mock_nighthawk_service_stub;
  // Configure the mock Nighthawk Service stub to return an inner mock channel when the code under
  // test requests a channel. Set call expectations on the inner mock channel.
  EXPECT_CALL(mock_nighthawk_service_stub, ForwardExecutionResponseRaw)
      .WillOnce([](grpc_impl::ClientContext*, Envoy::ProtobufWkt::Empty*) {
        auto* mock_writer = new grpc::testing::MockClientWriter<ExecutionResponse>();
        EXPECT_CALL(*mock_writer, Write(_, _)).WillOnce(Return(false));
        return mock_writer;
      });

  NighthawkServiceClientImpl client;
  absl::Status response = client.ForwardExecutionResponse(&mock_nighthawk_service_stub, {});
  ASSERT_FALSE(response.ok());
  EXPECT_EQ(response.code(), absl::StatusCode::kUnavailable);
  EXPECT_THAT(response.message(), HasSubstr("Failed to write"));
}

TEST(ForwardExecutionResponse, ReturnsErrorIfNighthawkServiceWritesDoneFails) {
  nighthawk::client::MockNighthawkServiceStub mock_nighthawk_service_stub;
  // Configure the mock Nighthawk Service stub to return an inner mock channel when the code under
  // test requests a channel. Set call expectations on the inner mock channel.
  EXPECT_CALL(mock_nighthawk_service_stub, ForwardExecutionResponseRaw)
      .WillOnce([](grpc_impl::ClientContext*, Envoy::ProtobufWkt::Empty*) {
        auto* mock_writer = new grpc::testing::MockClientWriter<ExecutionResponse>();
        EXPECT_CALL(*mock_writer, Write(_, _)).WillOnce(Return(true));
        EXPECT_CALL(*mock_writer, WritesDone()).WillOnce(Return(false));
        return mock_writer;
      });

  NighthawkServiceClientImpl client;
  absl::Status response = client.ForwardExecutionResponse(&mock_nighthawk_service_stub, {});
  ASSERT_FALSE(response.ok());
  EXPECT_EQ(response.code(), absl::StatusCode::kInternal);
  EXPECT_THAT(response.message(), HasSubstr("WritesDone() failed"));
}

TEST(ForwardExecutionResponse, PropagatesErrorIfNighthawkServiceGrpcStreamClosesAbnormally) {
  nighthawk::client::MockNighthawkServiceStub mock_nighthawk_service_stub;
  // Configure the mock Nighthawk Service stub to return an inner mock channel when the code under
  // test requests a channel. Set call expectations on the inner mock channel.
  EXPECT_CALL(mock_nighthawk_service_stub, ForwardExecutionResponseRaw)
      .WillOnce([](grpc_impl::ClientContext*, Envoy::ProtobufWkt::Empty*) {
        auto* mock_writer = new grpc::testing::MockClientWriter<ExecutionResponse>();
        EXPECT_CALL(*mock_writer, Write(_, _)).WillOnce(Return(true));
        EXPECT_CALL(*mock_writer, WritesDone()).WillOnce(Return(true));
        EXPECT_CALL(*mock_writer, Finish())
            .WillOnce(
                Return(::grpc::Status(::grpc::PERMISSION_DENIED, "Finish failure status message")));
        return mock_writer;
      });

  NighthawkServiceClientImpl client;
  absl::Status response = client.ForwardExecutionResponse(&mock_nighthawk_service_stub, {});
  ASSERT_FALSE(response.ok());
  EXPECT_EQ(response.code(), absl::StatusCode::kPermissionDenied);
  EXPECT_THAT(response.message(), HasSubstr("Finish failure status message"));
}

} // namespace
} // namespace Nighthawk
