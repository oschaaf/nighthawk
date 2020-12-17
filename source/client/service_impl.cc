#include "client/service_impl.h"

#include <grpc++/grpc++.h>

#include "envoy/config/core/v3/base.pb.h"

#include "common/nighthawk_distributor_client_impl.h"
#include "common/nighthawk_service_client_impl.h"
#include "common/nighthawk_sink_client_impl.h"
#include "common/request_source_impl.h"
#include "common/sink_impl.h"

#include "client/client.h"
#include "client/options_impl.h"
#include "client/output_collector_impl.h"

namespace Nighthawk {
namespace Client {

void ServiceImpl::handleExecutionRequest(const nighthawk::client::ExecutionRequest& request) {
  std::unique_ptr<Envoy::Thread::LockGuard> busy_lock;
  {
    // Lock accepted_lock, in case we get here before accepted_event_.wait() is entered.
    auto accepted_lock = std::make_unique<Envoy::Thread::LockGuard>(accepted_lock_);
    // Acquire busy_lock_, and signal that we did so, allowing the service to continue
    // processing inbound requests on the stream.
    busy_lock = std::make_unique<Envoy::Thread::LockGuard>(busy_lock_);
    accepted_event_.notifyOne();
  }

  nighthawk::client::ExecutionResponse response;

  // We must avoid touching OptionsImpl if a ProcessImpl is active, because we'll get an assert
  // otherwise as doing so in turn will trigger an assert in Envoy as validation occurs.
  if (thread_.joinable()) {
    response.mutable_error_detail()->set_code(grpc::StatusCode::INTERNAL);
    response.mutable_error_detail()->set_message("kinda busy sry kbye");
    writeResponse(response);
    return;
  }

  OptionsPtr options;
  try {
    options = std::make_unique<OptionsImpl>(request.start_request().options());
  } catch (const MalformedArgvException& e) {
    response.mutable_error_detail()->set_code(grpc::StatusCode::INTERNAL);
    response.mutable_error_detail()->set_message(e.what());
    writeResponse(response);
    return;
  }

  thread_ = std::thread([this, request, &response]() {
    OptionsPtr options = std::make_unique<OptionsImpl>(request.start_request().options());
    ProcessImpl process(*options, time_system_, process_wide_);
    OutputCollectorImpl output_collector(time_system_, *options);
    const bool ok = process.run(output_collector);
    if (!options->sink().has_value()) {
      if (!ok) {
        response.mutable_error_detail()->set_code(grpc::StatusCode::INTERNAL);
        // TODO(https://github.com/envoyproxy/nighthawk/issues/181): wire through error
        // descriptions, so we can do better here.
        response.mutable_error_detail()->set_message("Unknown failure");
      }
      *(response.mutable_output()) = output_collector.toProto();
    }
    process.shutdown();
  });

  // If there's no sink, we need to wait for the output to become available.
  // If there is a sink, we return an empty reply to indicate acceptance.
  if (!options->sink().has_value()) {
    thread_.join();
  } else {
    // Launch a 'completion thread' which will call join on the thread running our ProcessImpl.
    std::thread completion_thread = std::thread([this]() { thread_.join(); });
    completion_thread.detach();
  }

  // We release before writing the response to avoid a race with the client's follow up request
  // coming in before we release the lock, which would lead up to us declining service when
  // we should not.
  busy_lock.reset();
  writeResponse(response);
}

void ServiceImpl::writeResponse(const nighthawk::client::ExecutionResponse& response) {
  ENVOY_LOG(debug, "Write response: {}", response.DebugString());
  if (!stream_->Write(response)) {
    ENVOY_LOG(warn, "Failed to write response to the stream");
  }
}

::grpc::Status ServiceImpl::finishGrpcStream(const bool success, absl::string_view description) {
  // We may get here while there's still an active future in-flight in the error-paths.
  // Allow it to wrap up and put it's response on the stream before finishing the stream.
  if (future_.valid()) {
    future_.wait();
  }
  stream_ = nullptr;
  return success ? grpc::Status::OK
                 : grpc::Status(grpc::StatusCode::INTERNAL, std::string(description));
}

// TODO(oschaaf): implement a way to cancel test runs, and update rps config on the fly.
// TODO(oschaaf): unit-test Process, create MockProcess & use in service_test.cc / client_test.cc
// TODO(oschaaf): should we merge incoming request options with defaults?
// TODO(oschaaf): aggregate the client's logs and forward them in the grpc response.
::grpc::Status ServiceImpl::ExecutionStream(
    ::grpc::ServerContext* /*context*/,
    ::grpc::ServerReaderWriter<::nighthawk::client::ExecutionResponse,
                               ::nighthawk::client::ExecutionRequest>* stream) {
  nighthawk::client::ExecutionRequest request;
  stream_ = stream;

  while (stream->Read(&request)) {
    ENVOY_LOG(debug, "Read ExecutionRequest data {}", request.DebugString());
    if (request.has_start_request()) {
      // If busy_lock_ is held we can't start a new benchmark run because one is active already.
      if (busy_lock_.tryLock()) {
        busy_lock_.unlock();
        Envoy::Thread::LockGuard accepted_lock(accepted_lock_);
        // We pass in std::launch::async to avoid lazy evaluation, as we want this to run
        // asap. See: https://en.cppreference.com/w/cpp/thread/async
        future_ = std::future<void>(
            std::async(std::launch::async, &ServiceImpl::handleExecutionRequest, this, request));
        // Block until the thread associated to the future has acquired busy_lock_
        accepted_event_.wait(accepted_lock_);
      } else {
        return finishGrpcStream(false, "Only a single benchmark session is allowed at a time.");
      }
    } else if (request.has_update_request() || request.has_cancellation_request()) {
      return finishGrpcStream(false, "Request is not supported yet.");
    } else {
      NOT_REACHED_GCOVR_EXCL_LINE;
    }
  }
  return finishGrpcStream(true);
}

namespace {
void addHeader(envoy::config::core::v3::HeaderMap* map, absl::string_view key,
               absl::string_view value) {
  auto* request_header = map->add_headers();
  request_header->set_key(std::string(key));
  request_header->set_value(std::string(value));
}
} // namespace

RequestSourcePtr RequestSourceServiceImpl::createStaticEmptyRequestSource(const uint32_t amount) {
  Envoy::Http::RequestHeaderMapPtr header = Envoy::Http::RequestHeaderMapImpl::create();
  header->addCopy(Envoy::Http::LowerCaseString("x-from-remote-request-source"), "1");
  return std::make_unique<StaticRequestSourceImpl>(std::move(header), amount);
}

::grpc::Status RequestSourceServiceImpl::RequestStream(
    ::grpc::ServerContext* /*context*/,
    ::grpc::ServerReaderWriter<::nighthawk::request_source::RequestStreamResponse,
                               ::nighthawk::request_source::RequestStreamRequest>* stream) {
  nighthawk::request_source::RequestStreamRequest request;
  bool ok = true;
  while (stream->Read(&request)) {
    ENVOY_LOG(trace, "Inbound RequestStreamRequest {}", request.DebugString());

    // TODO(oschaaf): this is useful for integration testing purposes, but sending
    // these nearly empty headers will basically be a near no-op (note that the client will merge
    // headers we send here into into own header configuration). The client can be configured to
    // connect to a custom grpc service as a remote data source instead of this one, and its workers
    // will comply. That in itself may be useful. But we could offer the following features here:
    // 1. Yet another remote request source, so we balance to-be-replayed headers over workers
    //    and only have a single stream to a remote service here.
    // 2. Read a and dispatch a header stream from disk.
    RequestSourcePtr request_source = createStaticEmptyRequestSource(request.quantity());
    RequestGenerator request_generator = request_source->get();
    RequestPtr request;
    while (ok && (request = request_generator()) != nullptr) {
      HeaderMapPtr headers = request->header();
      nighthawk::request_source::RequestStreamResponse response;
      auto* request_specifier = response.mutable_request_specifier();
      auto* request_headers = request_specifier->mutable_v3_headers();
      headers->iterate([&request_headers](const Envoy::Http::HeaderEntry& header)
                           -> Envoy::Http::HeaderMap::Iterate {
        addHeader(request_headers, header.key().getStringView(), header.value().getStringView());
        return Envoy::Http::RequestHeaderMap::Iterate::Continue;
      });
      // TODO(oschaaf): add static configuration for other fields plus expectations
      ok = ok && stream->Write(response);
    }
    if (!ok) {
      ENVOY_LOG(error, "Failed to send the complete set of replay data.");
      break;
    }
  }
  ENVOY_LOG(trace, "Finishing stream");
  return ok ? grpc::Status::OK : grpc::Status(grpc::StatusCode::INTERNAL, std::string("error"));
}

SinkServiceImpl::SinkServiceImpl(std::unique_ptr<Sink>&& sink) : sink_(std::move(sink)) {}

::grpc::Status SinkServiceImpl::StoreExecutionResponseStream(
    ::grpc::ServerContext*,
    ::grpc::ServerReader<::nighthawk::client::StoreExecutionRequest>* request_reader,
    ::nighthawk::client::StoreExecutionResponse*) {
  nighthawk::client::StoreExecutionRequest request;
  while (request_reader->Read(&request)) {
    ENVOY_LOG(info, "StoreExecutionResponseStream request {}", request.DebugString());
    ::nighthawk::client::ExecutionResponse response_to_store = request.execution_response();
    const auto status = sink_->StoreExecutionResultPiece(response_to_store);
    if (!status.ok()) {
      // TODO: can we translate status code?
      return ::grpc::Status(grpc::StatusCode::INTERNAL, "StoreExecutionResultPiece failed!");
    }
  }
  return ::grpc::Status::OK;
};

::grpc::Status SinkServiceImpl::SinkRequestStream(
    ::grpc::ServerContext*,
    ::grpc::ServerReaderWriter<::nighthawk::client::SinkResponse, ::nighthawk::client::SinkRequest>*
        stream) {
  nighthawk::client::SinkRequest request;
  bool ok = true;
  while (stream->Read(&request)) {
    ENVOY_LOG(trace, "Inbound SinkRequest {}", request.DebugString());
    // TODO: can execution_id() yield nullptr?
    const absl::StatusOr<std::vector<::nighthawk::client::ExecutionResponse>>
        status_or_execution_responses = sink_->LoadExecutionResult(request.execution_id());
    ok = ok && status_or_execution_responses.ok();
    if (ok) {
      ::nighthawk::client::SinkResponse response;
      // TODO(oschaaf): Compute single execution response from the results & set it.
      //*(response.mutable_execution_response()) = status_or_execution_response.value();
      ok = ok && stream->Write(response);
    }
    if (!ok) {
      ENVOY_LOG(error, "Failed to send SinkResponse.");
      break;
    }
  }
  ENVOY_LOG(trace, "Finishing stream");
  return ok ? grpc::Status::OK : grpc::Status(grpc::StatusCode::INTERNAL, std::string("error"));
}

::grpc::Status NighthawkDistributorServiceImpl::validateRequest(
    const ::nighthawk::client::DistributedRequest& request) const {
  // xxx: why the std::strings() below?
  if (request.has_sink_request()) {
    if (request.services_size() != 1) {
      return grpc::Status(grpc::StatusCode::INTERNAL,
                          "DistributedRequest.SinkRequest should specify exactly one service.");
    }
  } else if (request.has_execution_request()) {
    if (request.services_size() == 0) {
      return grpc::Status(grpc::StatusCode::INTERNAL,
                          "DistributedRequest.ExecutionRequest should specify services.");
    }
    ::nighthawk::client::ExecutionRequest execution_request = request.execution_request();
    if (!execution_request.has_start_request()) {
      return grpc::Status(grpc::StatusCode::INTERNAL,
                          "DistributedRequest.ExecutionRequest MUST have StartRequest.");
    }
    if (!execution_request.start_request().has_options()) {
      return grpc::Status(
          grpc::StatusCode::INTERNAL,
          "DistributedRequest.ExecutionRequest.StartRequest MUST have CommandLineOptions.");
    }
    if (!execution_request.start_request().options().has_sink()) {
      return grpc::Status(
          grpc::StatusCode::INTERNAL,
          "DistributedRequest.ExecutionRequest MUST specify a sink in its options.");
    }
  } else {
    return grpc::Status(grpc::StatusCode::INTERNAL,
                        "Request should have either a SinkRequest or an ExecutionRequest.");
  }
  return ::grpc::Status::OK;
}
absl::StatusOr<nighthawk::client::SinkResponse> NighthawkDistributorServiceImpl::handleSinkRequest(
    const envoy::config::core::v3::Address& service,
    const ::nighthawk::client::SinkRequest& request) const {
  NighthawkSinkClientImpl client;
  // nighthawk::client::DistributedResponse response;
  std::unique_ptr<nighthawk::client::NighthawkSink::Stub> stub;
  std::shared_ptr<::grpc::Channel> channel;
  channel = grpc::CreateChannel(fmt::format("{}:{}", service.socket_address().address(),
                                            service.socket_address().port_value()),
                                grpc::InsecureChannelCredentials());
  stub = std::make_unique<nighthawk::client::NighthawkSink::Stub>(channel);
  /*
  absl::StatusOr<nighthawk::client::SinkResponse> status = client.SinkRequestStream(*stub, request);
  if (!status.ok()) {
    // Translate from absl's StatusOr to grpc's Status.
    response.mutable_error()->set_code(static_cast<int>(status.status().code()));
    response.mutable_error()->set_message("Distributed Sink Request failed!");
  } else {
    *(response.mutable_sink_response()) = status.value();
  }
  return response;
  */
  return client.SinkRequestStream(*stub, request);
}

absl::StatusOr<nighthawk::client::ExecutionResponse>
NighthawkDistributorServiceImpl::handleExecutionRequest(
    const envoy::config::core::v3::Address& service,
    const ::nighthawk::client::ExecutionRequest& request) const {
  // nighthawk::client::DistributedResponse response;
  NighthawkServiceClientImpl client;
  std::unique_ptr<nighthawk::client::NighthawkService::Stub> stub;
  std::shared_ptr<::grpc::Channel> channel;
  channel = grpc::CreateChannel(fmt::format("{}:{}", service.socket_address().address(),
                                            service.socket_address().port_value()),
                                grpc::InsecureChannelCredentials());
  stub = std::make_unique<nighthawk::client::NighthawkService::Stub>(channel);
  // TODO(oschaaf): MUST first ensure all resources are available to avoid one execution
  // starting and another one failing for good UX, or perhaps cancel everything if one failed to
  // start.
  /*
  absl::StatusOr<nighthawk::client::ExecutionResponse> status =
      client.PerformNighthawkBenchmark(stub.get(), request.start_request().options());
  if (!status.ok()) {
    // Translate from absl's StatusOr to grpc's Status.
    response.mutable_error()->set_code(static_cast<int>(status.status().code()));
    response.mutable_error()->set_message(std::string("Distributed Execution Request failed!"));
  } else {
    *(response.mutable_execution_response()) = status.value();
  }
  return response;
  */
  return client.PerformNighthawkBenchmark(stub.get(), request.start_request().options());
}

// Translates one or more backend response into a single reply message
nighthawk::client::DistributedResponse NighthawkDistributorServiceImpl::handleRequest(
    const ::nighthawk::client::DistributedRequest& request) const {
  nighthawk::client::DistributedResponse response;
  if (request.has_sink_request()) {
    ENVOY_LOG(trace, "Handling sink request");
    RELEASE_ASSERT(request.services_size() == 1, "services_size() != 1");
    const envoy::config::core::v3::Address& service = request.services(0);
    absl::StatusOr<nighthawk::client::SinkResponse> sink_response =
        handleSinkRequest(service, request.sink_request());
    if (!sink_response.ok()) {
      // Translate from absl's StatusOr to grpc's Status.
      response.mutable_error()->set_code(static_cast<int>(sink_response.status().code()));
      response.mutable_error()->set_message(std::string("Distributed Sink Request failed!"));
    } else {
      *(response.add_fragment()->mutable_sink_response()) = sink_response.value();
    }
  } else if (request.has_execution_request()) {
    ENVOY_LOG(trace, "Handling execution request");
    RELEASE_ASSERT(request.services_size() != 0, "services_size() == 0");
    RELEASE_ASSERT(request.execution_request().has_start_request(), "no start_request");
    RELEASE_ASSERT(request.execution_request().start_request().has_options(), "no options");
    // Requests we forward for initiation must have have a sink specified.
    RELEASE_ASSERT(request.execution_request().start_request().options().has_sink(), "no sink");
    for (const envoy::config::core::v3::Address& service : request.services()) {
      absl::StatusOr<nighthawk::client::ExecutionResponse> execution_response =
          handleExecutionRequest(service, request.execution_request());
      if (!execution_response.ok()) {
        // Translate from absl's StatusOr to grpc's Status.
        response.mutable_error()->set_code(static_cast<int>(execution_response.status().code()));
        response.mutable_error()->set_message(std::string("Distributed Execution Request failed!"));
      } else {
        *(response.add_fragment()->mutable_execution_response()) = execution_response.value();
      }
    }
  } else {
    // Neither a SinkRequest nor an ExecutionRequest, that shouldn't happen.
    NOT_REACHED_GCOVR_EXCL_LINE;
  }
  // All recipients have been messaged OK.
  //  TODO: service could be echoed back
  return response;
}

::grpc::Status NighthawkDistributorServiceImpl::DistributedRequestStream(
    ::grpc::ServerContext*,
    ::grpc::ServerReaderWriter<::nighthawk::client::DistributedResponse,
                               ::nighthawk::client::DistributedRequest>* stream) {
  nighthawk::client::DistributedRequest request;
  ::grpc::Status status = grpc::Status::OK;
  while (status.ok() && stream->Read(&request)) {
    ENVOY_LOG(trace, "Inbound DistributedRequest {}", request.DebugString());
    status = validateRequest(request);
    if (status.ok()) {
      nighthawk::client::DistributedResponse response = handleRequest(request);
      if (!stream->Write(response)) {
        ENVOY_LOG(error, "Failed to write DistributedResponse.");
        status = grpc::Status(grpc::StatusCode::INTERNAL,
                              std::string("Failed to write DistributedResponse."));
      } else {
        ENVOY_LOG(trace, "Wrote DistributedResponse {}", response.DebugString());
      }
    }
  }
  ENVOY_LOG(trace, "Finishing stream with status {}:{}", status.error_code(),
            status.error_message());
  return status;
}

} // namespace Client
} // namespace Nighthawk
