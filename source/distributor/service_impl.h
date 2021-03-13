#pragma once
#ifdef __clang__
#pragma clang diagnostic push
#pragma clang diagnostic warning "-Wunused-parameter"
#endif

#include "api/distributor/distributor.grpc.pb.h"

#ifdef __clang__
#pragma clang diagnostic pop
#endif

#include <future>
#include <map>
#include <memory>

#include "external/envoy/source/common/common/logger.h"
#include "external/envoy/source/common/common/thread.h"
#include "external/envoy/source/common/event/real_time_system.h"
#include "external/envoy/source/exe/process_wide.h"

#include "nighthawk/client/process.h"

namespace Nighthawk {

class NighthawkDistributorServiceImpl final
    : public nighthawk::NighthawkDistributor::Service,
      public Envoy::Logger::Loggable<Envoy::Logger::Id::main> {

public:
  ::grpc::Status DistributedRequestStream(
      ::grpc::ServerContext* context,
      ::grpc::ServerReaderWriter<::nighthawk::DistributedResponse, ::nighthawk::DistributedRequest>*
          stream) override;

private:
  ::grpc::Status validateRequest(const ::nighthawk::DistributedRequest& request) const;
  nighthawk::DistributedResponse
  handleRequest(const ::nighthawk::DistributedRequest& request) const;
  absl::StatusOr<::nighthawk::SinkResponse>
  handleSinkRequest(const envoy::config::core::v3::Address& service,
                    const ::nighthawk::SinkRequest& request) const;
  absl::StatusOr<nighthawk::client::ExecutionResponse>
  handleExecutionRequest(const envoy::config::core::v3::Address& service,
                         const ::nighthawk::client::ExecutionRequest& request) const;
};

} // namespace Nighthawk
