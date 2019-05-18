#include "client/service.grpc.pb.h"

namespace Nighthawk {
namespace Client {

class ServiceImpl final : public nighthawk::client::NighthawkService::Service {
  ::grpc::Status QueueSession(::grpc::ServerContext* context,
                              const ::nighthawk::client::QueueSessionRequest* request,
                              ::nighthawk::client::QueueSessionResponse* response) override;
};

} // namespace Client
} // namespace Nighthawk