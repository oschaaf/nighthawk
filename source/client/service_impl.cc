#include "client/service_impl.h"
#include "client/service.grpc.pb.h"

#include <grpc++/grpc++.h>

#include "common/common/lock_guard.h"

#include "client/client.h"
#include "client/options_impl.h"

namespace Nighthawk {
namespace Client {

// TODO(oschaaf): unit-test ProcessContext
// TODO(oschaaf): unit-test the new OptionImpl constructor that takes a proto arg.
// TODO(oschaaf): move to async grpc server so we can process updates while running a benchmark
// TODO(oschaaf): validate options, sensible defaults. consider abusing TCLAP for both
// TODO(oschaaf): aggregate the logs and forward them in the grpc result-response.
::grpc::Status ServiceImpl::SendCommand(
    ::grpc::ServerContext* context,
    ::grpc::ServerReaderWriter<::nighthawk::client::SendCommandResponse,
                               ::nighthawk::client::SendCommandRequest>* stream) {
  try {
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
        *(response.mutable_output()->Add()) = formatter->toProto();
      } else {
        return grpc::Status(grpc::StatusCode::INTERNAL, "NH failed to execute");
      }

      if (!stream->Write(response)) {
        ENVOY_LOG(info, "Stream write failed");
        return grpc::Status::CANCELLED;
      }
    }
    ENVOY_LOG(info, "Server side done");
    return grpc::Status::OK;
    // TODO(oschaaf): which exceptions do we want to catch?
  } catch (std::exception& e) {
    ENVOY_LOG(critical, "Exception: {}", e.what());
    return grpc::Status(grpc::StatusCode::INTERNAL, "NH encountered an exception");
  }
}

} // namespace Client
} // namespace Nighthawk