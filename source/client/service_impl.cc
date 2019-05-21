#include "client/service_impl.h"
#include "client/service.grpc.pb.h"

#include <grpc++/grpc++.h>

#include "client/client.h"

namespace Nighthawk {
namespace Client {

::grpc::Status ServiceImpl::SendCommand(
    ::grpc::ServerContext* context,
    ::grpc::ServerReaderWriter<::nighthawk::client::SendCommandResponse,
                               ::nighthawk::client::SendCommandRequest>* stream) {

  nighthawk::client::SendCommandRequest request;
  nighthawk::client::SendCommandResponse response;

  while (stream->Read(&request)) {
    std::cerr << "Server read" << std::endl;
    response.set_exit_code(3);
    if (!stream->Write(response)) {
      std::cerr << "Server write failure" << std::endl;
      break;
    } else {
      std::cerr << "Server read" << std::endl;
    }
  }
  std::cerr << "Nothing left to read" << std::endl;

  /*
  // nighthawk::client::CommandLineOptions options = request->options();
  // TODO(oschaaf): translate CommandLineOptions to OptionsImpl.
  // Main main(options);

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

/*
::grpc::Status ServiceImpl::QueueSession(::grpc::ServerContext* context,
                                         const ::nighthawk::client::QueueSessionRequest* request,
                                         ::nighthawk::client::QueueSessionResponse* response) {
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
*/

} // namespace Client
} // namespace Nighthawk