#include "common/nighthawk_distributor_client_impl.h"

#include "external/envoy/source/common/common/assert.h"

namespace Nighthawk {

absl::StatusOr<nighthawk::client::DistributedResponse>
NighthawkDistributorClientImpl::DistributedRequest(
    nighthawk::client::NighthawkDistributor::StubInterface& nighthawk_distributor_stub,
    const nighthawk::client::DistributedRequest& distributed_request) const {
  nighthawk::client::DistributedResponse response;

  ::grpc::ClientContext context;
  std::shared_ptr<::grpc::ClientReaderWriterInterface<nighthawk::client::DistributedRequest,
                                                      nighthawk::client::DistributedResponse>>
      stream(nighthawk_distributor_stub.DistributedRequestStream(&context));

  if (!stream->Write(distributed_request)) {
    return absl::UnavailableError("Failed to write request to the Nighthawk Service gRPC channel.");
  } else if (!stream->WritesDone()) {
    return absl::InternalError("WritesDone() failed on the Nighthawk Service gRPC channel.");
  }

  bool got_response = false;
  while (stream->Read(&response)) {
    RELEASE_ASSERT(!got_response,
                   "Nighthawk Service has started responding with more than one message.");
    got_response = true;
  }
  if (!got_response) {
    return absl::InternalError("Nighthawk Service did not send a gRPC response.");
  }
  ::grpc::Status status = stream->Finish();
  if (!status.ok()) {
    return absl::Status(static_cast<absl::StatusCode>(status.error_code()), status.error_message());
  }
  return response;
}

} // namespace Nighthawk
