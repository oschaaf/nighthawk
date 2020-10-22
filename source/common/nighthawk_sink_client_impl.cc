#include "common/nighthawk_sink_client_impl.h"

#include "external/envoy/source/common/common/assert.h"

namespace Nighthawk {

absl::Status NighthawkSinkClientImpl::ForwardExecutionResponse(
    nighthawk::client::NighthawkSink::StubInterface* nighthawk_sink_stub,
    const nighthawk::client::ExecutionResponse& execution_response) const {
  ::grpc::ClientContext context;
  ::Envoy::ProtobufWkt::Empty response;
  std::shared_ptr<::grpc::ClientWriterInterface<::nighthawk::client::ExecutionResponse>> stream(
      nighthawk_sink_stub->ForwardExecutionResponse(&context, &response));
  if (!stream->Write(execution_response)) {
    return absl::UnavailableError("Failed to write request to the Nighthawk Sink gRPC channel.");
  } else if (!stream->WritesDone()) {
    return absl::InternalError("WritesDone() failed on the Nighthawk Sink gRPC channel.");
  }
  ::grpc::Status status = stream->Finish();
  if (!status.ok()) {
    return absl::Status(static_cast<absl::StatusCode>(status.error_code()), status.error_message());
  }
  return absl::Status();
}

} // namespace Nighthawk
