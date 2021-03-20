#include "distributor/service_impl.h"

#include <grpc++/grpc++.h>

#include "envoy/config/core/v3/base.pb.h"

#include "external/envoy/source/common/common/assert.h"

#include "common/nighthawk_service_client_impl.h"

#include "sink/nighthawk_sink_client_impl.h"

namespace Nighthawk {

::grpc::Status NighthawkDistributorServiceImpl::validateRequest(
    const ::nighthawk::DistributedRequest& request) const {
  // xxx: why the std::strings() below?
  if (request.has_execution_request()) {
    if (request.services_size() == 0) {
      return grpc::Status(grpc::StatusCode::INTERNAL,
                          "DistributedRequest.ExecutionRequest should specify services.");
    }
    const ::nighthawk::client::ExecutionRequest& execution_request = request.execution_request();
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

absl::StatusOr<nighthawk::client::ExecutionResponse>
NighthawkDistributorServiceImpl::handleExecutionRequest(
    const envoy::config::core::v3::Address& service,
    const ::nighthawk::client::ExecutionRequest& request) const {
  NighthawkServiceClientImpl client;
  std::unique_ptr<nighthawk::client::NighthawkService::Stub> stub;
  std::shared_ptr<::grpc::Channel> channel;
  channel = grpc::CreateChannel(fmt::format("{}:{}", service.socket_address().address(),
                                            service.socket_address().port_value()),
                                grpc::InsecureChannelCredentials());
  stub = std::make_unique<nighthawk::client::NighthawkService::Stub>(channel);
  return client.PerformNighthawkBenchmark(stub.get(), request.start_request().options());
}

// Translates one or more backend response into a single reply message
nighthawk::DistributedResponse NighthawkDistributorServiceImpl::handleRequest(
    const ::nighthawk::DistributedRequest& request) const {
  nighthawk::DistributedResponse response;
  if (request.has_execution_request()) {
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
    ::grpc::ServerReaderWriter<::nighthawk::DistributedResponse, ::nighthawk::DistributedRequest>*
        stream) {
  nighthawk::DistributedRequest request;
  ::grpc::Status status = grpc::Status::OK;
  while (status.ok() && stream->Read(&request)) {
    ENVOY_LOG(trace, "Inbound DistributedRequest {}", request.DebugString());
    status = validateRequest(request);
    if (status.ok()) {
      nighthawk::DistributedResponse response = handleRequest(request);
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

} // namespace Nighthawk
