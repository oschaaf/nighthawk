#include "client/service.grpc.pb.h"

namespace Nighthawk {
namespace Client {

class ServiceImpl final : public nighthawk::client::NighthawkService::Service {
public:
  virtual ::grpc::Status
  SendCommand(::grpc::ServerContext* context,
              ::grpc::ServerReaderWriter<::nighthawk::client::SendCommandResponse,
                                         ::nighthawk::client::SendCommandRequest>* stream) override;
};

} // namespace Client
} // namespace Nighthawk