#include "client/service_impl.h"

namespace Nighthawk {
namespace Client {

::grpc::Status ServiceImpl::QueueRun(::grpc::ServerContext* context,
                                     const ::nighthawk::client::CommandLineOptions* request,
                                     ::nighthawk::client::Output* response) {

  return grpc::Status::OK;
};

} // namespace Client
} // namespace Nighthawk