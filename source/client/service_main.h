#pragma once

#include <grpc++/grpc++.h>

#include "nighthawk/common/exception.h"

#include "external/envoy/source/common/common/logger.h"

#include "api/client/service.pb.h"

#include "client/service_impl.h"

#include "tclap/CmdLine.h"

namespace Nighthawk {
namespace Client {

class ServiceMain : public Envoy::Logger::Loggable<Envoy::Logger::Id::main> {
public:
  ServiceMain(int argc, const char** argv);
  void start();
  void wait();
  void shutdown();
  std::string getListenerAddress() const;
  void parseIpAndMaybePort(absl::string_view ip_and_maybe_port);

private:
  std::string ip_;
  int port_ = {8443};
  grpc::ServerBuilder builder_;
  ServiceImpl service_;
  std::unique_ptr<grpc::Server> server_;
  std::shared_ptr<grpc::Channel> channel_;
  std::unique_ptr<nighthawk::client::NighthawkService::Stub> stub_;
};

} // namespace Client
} // namespace Nighthawk
