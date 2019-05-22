#include "client/service_impl.h"
#include "client/service.grpc.pb.h"

#include <grpc++/grpc++.h>

#include "client/client.h"
#include "client/options_impl.h"

namespace Nighthawk {
namespace Client {
/*
Accepts a new configuration, and returns a string containing a benchmark session-id.
The session will be queued up and run after any other session running/queued up earlier.
*/
/*
Accepts a configuration, and applies it to the running session.
Returns a Session.

An explicit flag will be passed in CommandLineOptions to indicate if re-using the existing
connection-pool is intended. Nighthawk will verify that the requested changes support that, and
return an error if that is not possible. (E.g. changing the QPS will be implemented by swapping
the LinearRateLimiter, but requesting preference of new ssl cipers will imply creating a new
connection pool). How to verify the diff in changes in a generic and easy way remains to be
figured out.
*/

::grpc::Status ServiceImpl::SendCommand(
    ::grpc::ServerContext* context,
    ::grpc::ServerReaderWriter<::nighthawk::client::SendCommandResponse,
                               ::nighthawk::client::SendCommandRequest>* stream) {

  nighthawk::client::SendCommandRequest request;
  nighthawk::client::SendCommandResponse response;

  while (stream->Read(&request)) {
    OptionsPtr options = std::make_unique<OptionsImpl>(request.options());
    std::cerr << "@@ Server read:\n" << request.options().DebugString() << std::endl;
    Main program(std::move(options));
    int exit_code = program.run();
    response.set_success(exit_code == 0);
    std::cerr << "@@ Finished run." << std::endl;
    if (!stream->Write(response)) {
      std::cerr << "@@ Cancelled?";
      return grpc::Status::CANCELLED;
    }
  }
  std::cerr << "@@ Server side done";
  return grpc::Status::OK;
}

} // namespace Client
} // namespace Nighthawk