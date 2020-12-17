#include "client/distributed_process_impl.h"

#include <grpc++/grpc++.h>

#include <memory>

#include "nighthawk/client/output_collector.h"

#include "api/client/options.pb.h"
#include "api/client/output.pb.h"

#include "common/uri_impl.h"

#include "client/options_impl.h"

namespace Nighthawk {
namespace Client {

DistributedProcessImpl::DistributedProcessImpl(const Options& options,
                                               nighthawk::client::NighthawkDistributor::Stub& stub)
    : options_(options), service_client_(std::make_unique<NighthawkDistributorClientImpl>()),
      stub_(stub) {}

// TODO(XXX): do we need to change the interface? the output collector doesn't really
// make sense in this flow.
bool DistributedProcessImpl::run(OutputCollector& /*collector*/) {
  Nighthawk::Client::CommandLineOptionsPtr options = options_.toCommandLineOptions();
  // TODO(XXX): the other side will ignore the distributor, maybe we don't need to wipe it here.
  options->mutable_distributor()->Clear();
  ::nighthawk::client::DistributedRequest request;
  *(request.mutable_execution_request()->mutable_start_request()->mutable_options()) = *options;
  auto* a = request.add_services()->mutable_socket_address();

  // TODO(XXX): optionize properly.
  a->set_address("127.0.0.1");
  a->set_port_value(4446);

  const absl::StatusOr<const nighthawk::client::DistributedResponse> result =
      service_client_->DistributedRequest(stub_, request);

  // output.add_results()
  // TODO(XXX): validate reply. Follow up with SinkRequest?
  // We should have a either a failure here or a guarantee that an execution id is available.

  if (!result.ok()) {
    ENVOY_LOG(error, "Distributed execution failure: {}", result.status().message());
  } else {
    ENVOY_LOG(info, "Distributed execution response: {}", result.value().DebugString());
  }
  return result.ok();
  ;
}

bool DistributedProcessImpl::requestExecutionCancellation() {
  ENVOY_LOG(error, "Distributed process cancellation not supported yet");
  // TODO(#380): Send a cancel request to the gRPC service.
  return false;
}

} // namespace Client
} // namespace Nighthawk
