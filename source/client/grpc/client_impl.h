#pragma once

#include <chrono>
#include <cstdint>
#include <string>
#include <vector>

#include "envoy/grpc/async_client.h"
#include "envoy/grpc/async_client_manager.h"
#include "envoy/ratelimit/ratelimit.h"
#include "envoy/server/filter_config.h"
#include "envoy/stats/scope.h"
#include "envoy/tracing/http_tracer.h"
#include "envoy/upstream/cluster_manager.h"

#include "common/common/logger.h"
#include "common/grpc/typed_async_client.h"
#include "common/singleton/const_singleton.h"

#ifdef __clang__
#pragma clang diagnostic push
#pragma clang diagnostic warning "-Wunused-parameter"
#endif
#include "api/client/service.grpc.pb.h"

#ifdef __clang__
#pragma clang diagnostic pop
#endif

namespace Envoy {
namespace Upstream {

class GrpcControllerClient
    : Envoy::Grpc::AsyncStreamCallbacks<nighthawk::client::ExecutionResponse>,
      Envoy::Logger::Loggable<Envoy::Logger::Id::upstream> {
public:
  GrpcControllerClient(Envoy::Grpc::RawAsyncClientPtr async_client,
                       Envoy::Event::Dispatcher& dispatcher);

  // Grpc::AsyncStreamCallbacks
  void onCreateInitialMetadata(Envoy::Http::HeaderMap& metadata) override;
  void onReceiveInitialMetadata(Envoy::Http::HeaderMapPtr&& metadata) override;
  void onReceiveMessage(std::unique_ptr<nighthawk::client::ExecutionResponse>&& message) override;
  void onReceiveTrailingMetadata(Envoy::Http::HeaderMapPtr&& metadata) override;
  void onRemoteClose(Grpc::Status::GrpcStatus status, const std::string& message) override;

private:
  void subscribe();
  void establishNewStream();
  void handleFailure();

  Envoy::Grpc::AsyncClient<nighthawk::client::ExecutionRequest,
                           nighthawk::client::ExecutionResponse>
      async_client_;
  Envoy::Grpc::AsyncStream<nighthawk::client::ExecutionRequest> stream_{};
  const Protobuf::MethodDescriptor& service_method_;
  nighthawk::client::ExecutionRequest request_;
  std::unique_ptr<nighthawk::client::ExecutionResponse> message_;
  Envoy::Event::Dispatcher& dispatcher_;
};

using GrpcControllerClientPtr = std::unique_ptr<GrpcControllerClient>;

} // namespace Upstream
} // namespace Envoy
