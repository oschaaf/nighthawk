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
  if (!result.ok()) {
    ENVOY_LOG(error, "Distributed request failure: {}", result.status().message());
  } else {
    ENVOY_LOG(trace, "Distributed response: {}", result.value().DebugString());
  }
  return result;
}

bool DistributedProcessImpl::run(OutputCollector& collector) {
  Nighthawk::Client::CommandLineOptionsPtr options = options_.toCommandLineOptions();
  ::nighthawk::client::DistributedRequest request;
  *(request.mutable_execution_request()->mutable_start_request()->mutable_options()) = *options;
  const std::string kTestId = "test-execution-id";
  // TODO(XXX): only override if not set & optionize.
  request.mutable_execution_request()
      ->mutable_start_request()
      ->mutable_options()
      ->mutable_execution_id()
      ->set_value(kTestId);
  if (options_.services().has_value()) {
    *(request.mutable_services()) = options_.services().value().addresses();
  }
  const absl::StatusOr<const nighthawk::client::DistributedResponse>
      distributed_initiation_response = sendDistributedRequest(request);
  if (distributed_initiation_response.ok()) {
    // If we could initiate the distributed load test, then we can now query the sink to obtain
    // results with the execution_id we obtained through that.
    // TODO(XXX): set a sensible timeout, or do so on the other side.
    ::nighthawk::client::DistributedRequest distributed_sink_request;
    ::nighthawk::client::SinkRequest sink_request;

    distributed_sink_request.add_services()->MergeFrom(options_.sink().value().address());
    sink_request.set_execution_id(kTestId);
    *(distributed_sink_request.mutable_sink_request()) = sink_request;

    absl::StatusOr<const nighthawk::client::DistributedResponse> distributed_sink_response =
        sendDistributedRequest(distributed_sink_request);
    if (distributed_sink_response.ok()) {
      if (distributed_sink_response.value().fragment_size() > 1) {
        RELEASE_ASSERT(false, "Sink started returning multiple fragments!");
      } else {
        const ::nighthawk::client::Output& output = distributed_sink_response.value()
                                                        .fragment(0)
                                                        .sink_response()
                                                        .execution_response()
                                                        .output();
        collector.setOutput(output);
        bool has_failed_termination = false;
        for (const ::nighthawk::client::Result& result : output.results()) {
          for (const ::nighthawk::client::Counter& counter : result.counters()) {
            if (counter.name() == "sequencer.failed_terminations") {
              has_failed_termination = true;
              break;
            }
          }
        }
        return !has_failed_termination;
      }
    }
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
