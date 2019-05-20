#include "client/service.grpc.pb.h"

namespace Nighthawk {
namespace Client {

class ServiceImpl final : public nighthawk::client::NighthawkService::Service {
  ::grpc::Status QueueSession(::grpc::ServerContext* context,
                              const ::nighthawk::client::QueueSessionRequest* request,
                              ::nighthawk::client::QueueSessionResponse* response) override;

  ::grpc::Status
  ReconfigureSession(::grpc::ServerContext* context,
                     const ::nighthawk::client::ReconfigureSessionRequest* request,
                     ::nighthawk::client::ReconfigureSessionResponse* response) override;

  ::grpc::Status
  IsSessionFinished(::grpc::ServerContext* context,
                    const ::nighthawk::client::IsSessionFinishedRequest* request,
                    ::nighthawk::client::IsSessionFinishedResponse* response) override;

  ::grpc::Status PopSessionResult(::grpc::ServerContext* context,
                                  const ::nighthawk::client::PopSessionResultRequest* request,
                                  ::nighthawk::client::PopSessionResultResponse* response) override;
};

} // namespace Client
} // namespace Nighthawk