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
    response.set_exit_code(program.run() ? 0 : -1);
    if (!stream->Write(response)) {
      return grpc::Status::CANCELLED;
    }
    std::cerr << "Server read" << std::endl;
  }

  return grpc::Status::OK;
}

} // namespace Client
} // namespace Nighthawk