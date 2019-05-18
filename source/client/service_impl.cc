#include "client/service_impl.h"

namespace Nighthawk {
namespace Client {

::grpc::Status ServiceImpl::QueueSession(::grpc::ServerContext* context,
                                         const ::nighthawk::client::QueueSessionRequest* request,
                                         ::nighthawk::client::QueueSessionResponse* response) {
  return grpc::Status::OK;
}

} // namespace Client
} // namespace Nighthawk