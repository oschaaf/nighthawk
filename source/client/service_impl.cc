#include "client/service_impl.h"
#include "client/service.grpc.pb.h"

#include <grpc++/grpc++.h>

#include "common/common/lock_guard.h"

#include "client/client.h"
#include "client/options_impl.h"

namespace Nighthawk {
namespace Client {

void ServiceImpl::NighthawkRunner(nighthawk::client::SendCommandRequest request) {
  OptionsPtr options = std::make_unique<OptionsImpl>(request.options());
  Envoy::Thread::MutexBasicLockable log_lock;
  auto logging_context = std::make_unique<Envoy::Logger::Context>(
      spdlog::level::from_str(options->verbosity()), "[%T.%f][%t][%L] %v", log_lock);

  ENVOY_LOG(info, "starting {}", request.options().DebugString());
  process_context_ = std::make_unique<ProcessContextImpl>(*options);
  OutputFormatterFactoryImpl output_format_factory(process_context_->time_system(), *options);
  auto formatter = output_format_factory.create();
  nighthawk::client::SendCommandResponse response;

  if (process_context_->run(*formatter)) {
    *(response.mutable_output()->Add()) = formatter->toProto();
  }
  /*
  // TODO(oschaaf): communicate this actual failure to run.
  else {
    return grpc::Status(grpc::StatusCode::INTERNAL, "NH failed to execute");
  }*/
  response_queue_.Push(response);
  process_context_.reset();
}

bool ServiceImpl::EmitResponses(
    ::grpc::ServerReaderWriter<::nighthawk::client::SendCommandResponse,
                               ::nighthawk::client::SendCommandRequest>* stream) {
  while (!response_queue_.IsEmpty()) {
    auto response = response_queue_.Pop();
    std::cerr << "SendCommand: popped response" << std::endl;
    if (!stream->Write(response)) {
      ENVOY_LOG(info, "Stream write failed");
      return false;
    }
  }
  return true;
}

// TODO(oschaaf): handle ProcessContext.run returning an error correctly.
// TODO(oschaaf): implement Cancel()/Update() methods on ProcessContext()
// TODO(oschaaf): create MockProcessContext & use in service_test.cc
// TODO(oschaaf): add some logging to this.
// TODO(oschaaf): unit-test BlockingQueue
// TODO(oschaaf): unit-test ProcessContext
// TODO(oschaaf): unit-test the new OptionImpl constructor that takes a proto arg.
// TODO(oschaaf): move to async grpc server so we can process updates while running a benchmark
// TODO(oschaaf): validate options, sensible defaults. consider abusing TCLAP for both
// TODO(oschaaf): aggregate the logs and forward them in the grpc result-response.
::grpc::Status ServiceImpl::SendCommand(
    ::grpc::ServerContext* context,
    ::grpc::ServerReaderWriter<::nighthawk::client::SendCommandResponse,
                               ::nighthawk::client::SendCommandRequest>* stream) {

  std::cerr << "SendCommand: incoming start" << std::endl;
  bool error = false;
  try {
    nighthawk::client::SendCommandRequest request;
    while (!error && stream->Read(&request)) {
      std::cerr << "SendCommand: read request" << std::endl;
      switch (request.command_type()) {
      case nighthawk::client::SendCommandRequest_CommandType::SendCommandRequest_CommandType_kStart:
        if (nighthawk_runner_thread_.joinable()) {
          std::cerr << "Already running, wait for completion, and return an error" << std::endl;
          process_context_->cancel();
          error = true;
          break;
        }
        nighthawk_runner_thread_ = std::thread(&ServiceImpl::NighthawkRunner, this, request);
        break;
      case nighthawk::client::SendCommandRequest_CommandType::
          SendCommandRequest_CommandType_kUpdate:
        // TODO(oschaaf): implement.
        break;
      default:
        NOT_REACHED_GCOVR_EXCL_LINE;
      }
    }
    // TODO(oschaaf): which exceptions do we want to catch?
  } catch (std::exception& e) {
    ENVOY_LOG(critical, "Exception: {}", e.what());
    error = true;
  }

  std::cerr << "ProcessRequestQueue: stop 1" << std::endl;
  nighthawk_runner_thread_.join();
  std::cerr << "ProcessRequestQueue: stop 2" << std::endl;

  EmitResponses(stream);

  ENVOY_LOG(info, "Server side done");
  std::cerr << "SendCommand: finish" << std::endl;

  return error ? grpc::Status(grpc::StatusCode::INTERNAL, "NH encountered an exception")
               : grpc::Status::OK;
}

} // namespace Client
} // namespace Nighthawk