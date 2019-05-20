#include "client/service_impl.h"

namespace Nighthawk {
namespace Client {

::grpc::Status ServiceImpl::QueueSession(::grpc::ServerContext* context,
                                         const ::nighthawk::client::QueueSessionRequest* request,
                                         ::nighthawk::client::QueueSessionResponse* response) {
  return grpc::Status::OK;
}

::grpc::Status
ServiceImpl::ReconfigureSession(::grpc::ServerContext* context,
                                const ::nighthawk::client::ReconfigureSessionRequest* request,
                                ::nighthawk::client::ReconfigureSessionResponse* response) {
  return grpc::Status::OK;
}

::grpc::Status
ServiceImpl::IsSessionFinished(::grpc::ServerContext* context,
                               const ::nighthawk::client::IsSessionFinishedRequest* request,
                               ::nighthawk::client::IsSessionFinishedResponse* response) {
  return grpc::Status::OK;
}

::grpc::Status
ServiceImpl::PopSessionResult(::grpc::ServerContext* context,
                              const ::nighthawk::client::PopSessionResultRequest* request,
                              ::nighthawk::client::PopSessionResultResponse* response) {
  return grpc::Status::OK;
}

::grpc::Status ServiceImpl::Shutdown(::grpc::ServerContext* context,
                                     const ::nighthawk::client::ShutdownRequest* request,
                                     ::nighthawk::client::ShutdownResponse* response) {
  return grpc::Status::OK;
}

} // namespace Client
} // namespace Nighthawk