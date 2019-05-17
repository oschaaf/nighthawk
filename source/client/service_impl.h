#include "client/service.grpc.pb.h"

namespace Nighthawk {
namespace Client {

class ServiceImpl final : public nighthawk::client::NighthawkService::Service {

  ::grpc::Status QueueRun(::grpc::ServerContext* context,
                          const ::nighthawk::client::CommandLineOptions* request,
                          ::nighthawk::client::Output* response) override;
};

} // namespace Client
} // namespace Nighthawk