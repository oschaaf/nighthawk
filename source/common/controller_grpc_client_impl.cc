#include "common/controller_grpc_client_impl.h"

#include <string>

#include "envoy/stats/scope.h"

#include "external/envoy/source/common/common/assert.h"
#include "external/envoy/source/common/http/header_map_impl.h"
#include "external/envoy/source/common/http/headers.h"

namespace Nighthawk {

const std::string ControllerGrpcClientImpl::METHOD_NAME =
    "nighthawk.client.NighthawkService.Controller";

ControllerGrpcClientImpl::ControllerGrpcClientImpl(
    Envoy::Grpc::RawAsyncClientPtr async_client, Envoy::Event::Dispatcher&)
    : async_client_(std::move(async_client)),
      service_method_(
          *Envoy::Protobuf::DescriptorPool::generated_pool()->FindMethodByName(METHOD_NAME)) {}

void ControllerGrpcClientImpl::start() {
  stream_ = async_client_->start(service_method_, *this);
  ENVOY_LOG(trace, "stream establishment status ok: {}", stream_ != nullptr);
}

void ControllerGrpcClientImpl::onCreateInitialMetadata(Envoy::Http::HeaderMap&) {}

void ControllerGrpcClientImpl::onReceiveInitialMetadata(Envoy::Http::HeaderMapPtr&&) {}

void ControllerGrpcClientImpl::onReceiveMessage(
    std::unique_ptr<nighthawk::client::ControllerResponse>&& response) {
  ENVOY_LOG(info, "Controller response: {}", response->DebugString());
  total_messages_received_++;
}

void ControllerGrpcClientImpl::onReceiveTrailingMetadata(Envoy::Http::HeaderMapPtr&&) {}

void ControllerGrpcClientImpl::onRemoteClose(Envoy::Grpc::Status::GrpcStatus status,
                                             const std::string& message) {
  ENVOY_LOG(trace, "Remote close. Status: {}, Message: '{}', total messages received: {}", status,
            message, total_messages_received_);
  stream_ = nullptr;
}

} // namespace Nighthawk