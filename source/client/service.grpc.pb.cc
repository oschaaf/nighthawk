// Generated by the gRPC C++ plugin.
// If you make any local change, they will be lost.
// source: api/client/service.proto

#include "client/service.grpc.pb.h"
#include "api/client/service.pb.h"

#include <functional>
#include <grpcpp/impl/codegen/async_stream.h>
#include <grpcpp/impl/codegen/async_unary_call.h>
#include <grpcpp/impl/codegen/channel_interface.h>
#include <grpcpp/impl/codegen/client_callback.h>
#include <grpcpp/impl/codegen/client_unary_call.h>
#include <grpcpp/impl/codegen/method_handler_impl.h>
#include <grpcpp/impl/codegen/rpc_service_method.h>
#include <grpcpp/impl/codegen/server_callback.h>
#include <grpcpp/impl/codegen/service_type.h>
#include <grpcpp/impl/codegen/sync_stream.h>
namespace nighthawk {
namespace client {

static const char* NighthawkService_method_names[] = {
    "/nighthawk.client.NighthawkService/SendCommand",
};

std::unique_ptr<NighthawkService::Stub>
NighthawkService::NewStub(const std::shared_ptr<::grpc::ChannelInterface>& channel,
                          const ::grpc::StubOptions& options) {
  (void)options;
  std::unique_ptr<NighthawkService::Stub> stub(new NighthawkService::Stub(channel));
  return stub;
}

NighthawkService::Stub::Stub(const std::shared_ptr<::grpc::ChannelInterface>& channel)
    : channel_(channel),
      rpcmethod_SendCommand_(NighthawkService_method_names[0],
                             ::grpc::internal::RpcMethod::BIDI_STREAMING, channel) {}

::grpc::ClientReaderWriter<::nighthawk::client::SendCommandRequest,
                           ::nighthawk::client::SendCommandResponse>*
NighthawkService::Stub::SendCommandRaw(::grpc::ClientContext* context) {
  return ::grpc::internal::ClientReaderWriterFactory<
      ::nighthawk::client::SendCommandRequest,
      ::nighthawk::client::SendCommandResponse>::Create(channel_.get(), rpcmethod_SendCommand_,
                                                        context);
}

void NighthawkService::Stub::experimental_async::SendCommand(
    ::grpc::ClientContext* context,
    ::grpc::experimental::ClientBidiReactor<::nighthawk::client::SendCommandRequest,
                                            ::nighthawk::client::SendCommandResponse>* reactor) {
  ::grpc::internal::ClientCallbackReaderWriterFactory<
      ::nighthawk::client::SendCommandRequest,
      ::nighthawk::client::SendCommandResponse>::Create(stub_->channel_.get(),
                                                        stub_->rpcmethod_SendCommand_, context,
                                                        reactor);
}

::grpc::ClientAsyncReaderWriter<::nighthawk::client::SendCommandRequest,
                                ::nighthawk::client::SendCommandResponse>*
NighthawkService::Stub::AsyncSendCommandRaw(::grpc::ClientContext* context,
                                            ::grpc::CompletionQueue* cq, void* tag) {
  return ::grpc::internal::ClientAsyncReaderWriterFactory<
      ::nighthawk::client::SendCommandRequest,
      ::nighthawk::client::SendCommandResponse>::Create(channel_.get(), cq, rpcmethod_SendCommand_,
                                                        context, true, tag);
}

::grpc::ClientAsyncReaderWriter<::nighthawk::client::SendCommandRequest,
                                ::nighthawk::client::SendCommandResponse>*
NighthawkService::Stub::PrepareAsyncSendCommandRaw(::grpc::ClientContext* context,
                                                   ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncReaderWriterFactory<
      ::nighthawk::client::SendCommandRequest,
      ::nighthawk::client::SendCommandResponse>::Create(channel_.get(), cq, rpcmethod_SendCommand_,
                                                        context, false, nullptr);
}

NighthawkService::Service::Service() {
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      NighthawkService_method_names[0], ::grpc::internal::RpcMethod::BIDI_STREAMING,
      new ::grpc::internal::BidiStreamingHandler<NighthawkService::Service,
                                                 ::nighthawk::client::SendCommandRequest,
                                                 ::nighthawk::client::SendCommandResponse>(
          std::mem_fn(&NighthawkService::Service::SendCommand), this)));
}

NighthawkService::Service::~Service() {}

::grpc::Status NighthawkService::Service::SendCommand(
    ::grpc::ServerContext* context,
    ::grpc::ServerReaderWriter<::nighthawk::client::SendCommandResponse,
                               ::nighthawk::client::SendCommandRequest>* stream) {
  (void)context;
  (void)stream;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

} // namespace client
} // namespace nighthawk
