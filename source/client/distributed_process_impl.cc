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

absl::StatusOr<const nighthawk::client::DistributedResponse>
DistributedProcessImpl::sendDistributedRequest(
    const ::nighthawk::client::DistributedRequest& request) const {
  const absl::StatusOr<const nighthawk::client::DistributedResponse> result =
      service_client_->DistributedRequest(stub_, request);
  // TODO(XXX): validate reply. Follow up with SinkRequest?
  // We should have a either a failure here or a guarantee that an execution id is available.

  if (!result.ok()) {
    ENVOY_LOG(error, "Distributed request failure: {}", result.status().message());
  } else {
    ENVOY_LOG(info, "Distributed response: {}", result.value().DebugString());
  }
  return result;
}

// TODO(XXX): do we need to change the interface? the output collector doesn't really
// make sense in this flow.
bool DistributedProcessImpl::run(OutputCollector& collector) {
  // TODO(XXX): optionize addresses / execution_id properly.
  Nighthawk::Client::CommandLineOptionsPtr options = options_.toCommandLineOptions();
  options->mutable_distributor()->Clear();
  ::nighthawk::client::DistributedRequest request;
  *(request.mutable_execution_request()->mutable_start_request()->mutable_options()) = *options;
  auto* a = request.add_services()->mutable_socket_address();
  a->set_address("127.0.0.1");
  a->set_port_value(4446);

  const absl::StatusOr<const nighthawk::client::DistributedResponse>
      distributed_initiation_response = sendDistributedRequest(request);

  if (distributed_initiation_response.ok()) {
    // If we could initiate the distributed load test, then we can now query the sink to obtain
    // results with the execution_id we obtained through that.
    // TODO(XXX): set a sensible timeout, or do so on the other side.
    ::nighthawk::client::DistributedRequest distributed_sink_request;
    ::nighthawk::client::SinkRequest sink_request;

    auto* a = distributed_sink_request.add_services()->mutable_socket_address();
    a->set_address("127.0.0.1");
    a->set_port_value(4447);
    sink_request.set_execution_id("execution_id_test");
    *(distributed_sink_request.mutable_sink_request()) = sink_request;
    const absl::StatusOr<const nighthawk::client::DistributedResponse> distributed_sink_response =
        sendDistributedRequest(distributed_sink_request);
    if (distributed_sink_response.ok()) {
      if (distributed_sink_response.value().fragment_size() > 1) {
        collector.setOutput(
            distributed_sink_response.value().fragment(0).execution_response().output());
      } else {
        // RELEASE_ASSERT(false, "multiple fragments, TOOD");
      }
    }
    return distributed_sink_response.ok();
  }

  return false;
}

bool DistributedProcessImpl::requestExecutionCancellation() {
  ENVOY_LOG(error, "Distributed process cancellation not supported yet");
  // TODO(#380): Send a cancel request to the gRPC service.
  return false;
}

} // namespace Client
} // namespace Nighthawk
