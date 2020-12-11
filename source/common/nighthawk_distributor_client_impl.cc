#include "common/nighthawk_distributor_client_impl.h"

#include "external/envoy/source/common/common/assert.h"

namespace Nighthawk {

absl::StatusOr<nighthawk::client::StoreExecutionResponse>
NighthawkDistributorClientImpl::StoreExecutionResponseStream(
    nighthawk::client::NighthawkSink::StubInterface* nighthawk_sink_stub,
    const nighthawk::client::StoreExecutionRequest& store_execution_request) const {
  ::grpc::ClientContext context;
  ::nighthawk::client::StoreExecutionResponse store_execution_response;
  std::shared_ptr<::grpc::ClientWriterInterface<::nighthawk::client::StoreExecutionRequest>> stream(
      nighthawk_sink_stub->StoreExecutionResponseStream(&context, &store_execution_response));
  if (!stream->Write(store_execution_request)) {
    return absl::UnavailableError("Failed to write request to the Nighthawk Service gRPC channel.");
  } else if (!stream->WritesDone()) {
    return absl::InternalError("WritesDone() failed on the Nighthawk Service gRPC channel.");
  }
  ::grpc::Status status = stream->Finish();
  if (!status.ok()) {
    return absl::Status(static_cast<absl::StatusCode>(status.error_code()), status.error_message());
  }
  return store_execution_response;
}

} // namespace Nighthawk
