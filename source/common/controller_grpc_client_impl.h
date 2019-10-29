#pragma once

#include <queue>
#include <string>

#include "envoy/grpc/async_client.h"
#include "envoy/grpc/async_client_manager.h"
#include "envoy/stats/scope.h"
#include "envoy/upstream/cluster_manager.h"

#include "nighthawk/common/controller_grpc_client.h"
//#include "nighthawk/common/request_source.h"

#include "external/envoy/source/common/common/logger.h"
#include "external/envoy/source/common/grpc/typed_async_client.h"
#include "external/envoy/source/common/http/header_map_impl.h"

#ifdef __clang__
#pragma clang diagnostic push
#pragma clang diagnostic warning "-Wunused-parameter"
#endif
#include "api/client/service.grpc.pb.h"

#ifdef __clang__
#pragma clang diagnostic pop
#endif

namespace Nighthawk {

class ControllerGrpcClientImpl
    : public ControllerGrpcClient,
      Envoy::Grpc::AsyncStreamCallbacks<nighthawk::client::ControllerResponse>,
      Envoy::Logger::Loggable<Envoy::Logger::Id::upstream> {
public:
  ControllerGrpcClientImpl(Envoy::Grpc::RawAsyncClientPtr async_client,
                           Envoy::Event::Dispatcher& dispatcher);

  // Grpc::AsyncStreamCallbacks
  void onCreateInitialMetadata(Envoy::Http::HeaderMap& metadata) override;
  void onReceiveInitialMetadata(Envoy::Http::HeaderMapPtr&& metadata) override;
  void onReceiveMessage(std::unique_ptr<nighthawk::client::ControllerResponse>&& message) override;
  void onReceiveTrailingMetadata(Envoy::Http::HeaderMapPtr&& metadata) override;
  void onRemoteClose(Envoy::Grpc::Status::GrpcStatus status, const std::string& message) override;
  void start() override;
  bool stream_status_known() const override {
    return stream_ == nullptr || total_messages_received_ > 0;
  }

private:
  static const std::string METHOD_NAME;
  Envoy::Grpc::AsyncClient<nighthawk::client::ControllerRequest,
                           nighthawk::client::ControllerResponse>
      async_client_;
  Envoy::Grpc::AsyncStream<nighthawk::client::ControllerRequest> stream_{};
  const Envoy::Protobuf::MethodDescriptor& service_method_;
  std::queue<std::unique_ptr<nighthawk::client::ControllerResponse>> messages_;
  uint32_t total_messages_received_{0};
};

} // namespace Nighthawk