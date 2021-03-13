#pragma once

#include "nighthawk/client/options.h"
#include "nighthawk/client/output_collector.h"
#include "nighthawk/client/process.h"

#include "external/envoy/source/common/common/logger.h"

#include "api/client/service.grpc.pb.h"

#include "common/nighthawk_distributor_client_impl.h"

namespace Nighthawk {
namespace Client {

/**
 * Will delegate execution to a remote nighthawk_service using gRPC.
 */
class DistributedProcessImpl : public Process,
                               public Envoy::Logger::Loggable<Envoy::Logger::Id::main> {
public:
  /**
   * @param options Options to send to the remote nighthawk service, as well as
   * containing information to connect to it (which won't be forwarded).
   * @param stub Stub that will be used to communicate with the remote
   * gRPC server.
   */
  DistributedProcessImpl(const Options& options,
                         nighthawk::NighthawkDistributor::StubInterface& stub);
  /**
   * @param collector Collects the output from the remote nighthawk service.
   * @return true iff the remote execution should be considered successful. Unsuccessful execution
   * will log available error details.
   */
  bool run(OutputCollector& collector) override;
  /**
   * Shuts down the service, a no-op in this implementation.
   */
  void shutdown() override{};

  bool requestExecutionCancellation() override;

private:
  absl::StatusOr<const nighthawk::DistributedResponse>
  sendDistributedRequest(const ::nighthawk::DistributedRequest& request) const;
  const Options& options_;
  const std::unique_ptr<NighthawkDistributorClient> service_client_;
  nighthawk::NighthawkDistributor::StubInterface& stub_;
};

} // namespace Client
} // namespace Nighthawk
