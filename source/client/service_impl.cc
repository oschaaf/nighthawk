#include "client/service_impl.h"

#include <grpc++/grpc++.h>

#include "client/client.h"

namespace Nighthawk {
namespace Client {

::grpc::Status ServiceImpl::QueueSession(::grpc::ServerContext* context,
                                         const ::nighthawk::client::QueueSessionRequest* request,
                                         ::nighthawk::client::QueueSessionResponse* response) {
  response->mutable_session()->set_id("AAAA");

  // nighthawk::client::CommandLineOptions options = request->options();
  // TODO(oschaaf): translate CommandLineOptions to OptionsImpl.
  // Main main(options);
  /*
    std::vector<const char*> argv;
    argv.push_back("foo");
    argv.push_back("--concurrency");
    argv.push_back("1");
    argv.push_back("--duration");
    argv.push_back("1");
    argv.push_back("--rps");
    argv.push_back("1");
    argv.push_back("--verbosity");
    argv.push_back("error");
    std::string url = "http://127.0.0.1:10000/";
    argv.push_back(url.c_str());

    Main program(argv.size(), argv.data());
    program.run();
  */
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

} // namespace Client
} // namespace Nighthawk