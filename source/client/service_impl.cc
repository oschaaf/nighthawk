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
  Envoy::Thread::MutexBasicLockable log_lock;

  while (stream->Read(&request)) {
    OptionsPtr options = std::make_unique<OptionsImpl>(request.options());
    auto logging_context = std::make_unique<Envoy::Logger::Context>(
        spdlog::level::from_str(options->verbosity()), "[%T.%f][%t][%L] %v", log_lock);

    ENVOY_LOG(info, "Server read {}", request.options().DebugString());
    ProcessContextImpl process_context(*options);
    OutputFormatterFactoryImpl output_format_factory(process_context.time_system(), *options);
    auto formatter = output_format_factory.create();
    nighthawk::client::SendCommandResponse response;

    if (process_context.run(*formatter)) {
      response.set_success(true);
      *(response.mutable_output()->Add()) = formatter->toProto();
    } else {
      response.set_success(false);
    }

    if (!stream->Write(response)) {
      ENVOY_LOG(info, "Stream write failed");
      return grpc::Status::CANCELLED;
    }
  }
  ENVOY_LOG(info, "Server side done");
  return grpc::Status::OK;
}

} // namespace Client
} // namespace Nighthawk