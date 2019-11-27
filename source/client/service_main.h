#pragma once

#include <grpc++/grpc++.h>

#include <thread>

#include "nighthawk/common/exception.h"

#include "external/envoy/source/common/common/logger.h"
#include "external/envoy/source/common/common/thread.h"

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
  void shutdownSignalHandler();
  static std::string appendDefaultPortIfNeeded(absl::string_view host_and_maybe_port);

private:
  grpc::ServerBuilder builder_;
  ServiceImpl service_;
  std::unique_ptr<grpc::Server> server_;
  std::shared_ptr<grpc::Channel> channel_;
  std::unique_ptr<nighthawk::client::NighthawkService::Stub> stub_;
  int listener_port_{-1};
  std::string listener_bound_address_;
  std::string listener_output_path_;
  Envoy::Thread::MutexBasicLockable shutdown_lock_;
  Envoy::Thread::CondVar shutdown_event_;
  std::thread shutdown_thread_;
  bool shutdown_initiated_{false};
};

} // namespace Client
} // namespace Nighthawk
