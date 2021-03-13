#pragma once
#ifdef __clang__
#pragma clang diagnostic push
#pragma clang diagnostic warning "-Wunused-parameter"
#endif
#include "api/client/service.grpc.pb.h"
#include "api/distributor/distributor.grpc.pb.h"
#include "api/request_source/service.grpc.pb.h"
#include "api/sink/sink.grpc.pb.h"

#ifdef __clang__
#pragma clang diagnostic pop
#endif

#include <future>
#include <map>
#include <memory>

#include "external/envoy/source/common/common/logger.h"
#include "external/envoy/source/common/common/thread.h"
#include "external/envoy/source/common/event/real_time_system.h"
#include "external/envoy/source/exe/process_wide.h"

#include "nighthawk/client/process.h"
#include "nighthawk/common/request_source.h"
#include "nighthawk/common/sink.h"

namespace Nighthawk {
namespace Client {

/**
 * Implements Nighthawk's gRPC service. This service allows load generation to be
 * controlled by gRPC clients.
 */
class ServiceImpl final : public nighthawk::client::NighthawkService::Service,
                          public Envoy::Logger::Loggable<Envoy::Logger::Id::main> {

public:
  /**
   * Constructs a new ServiceImpl instance
   */
  ServiceImpl() : process_wide_(std::make_shared<Envoy::ProcessWide>()) {
    logging_context_ = std::make_unique<Envoy::Logger::Context>(
        spdlog::level::from_str("info"), "[%T.%f][%t][%L] %v", log_lock_, false);
  }

  ServiceImpl(std::unique_ptr<Envoy::Logger::Context>&& logging_context)
      : process_wide_(std::make_shared<Envoy::ProcessWide>()) {
    logging_context_ = std::move(logging_context);
  }

  ::grpc::Status ExecutionStream(
      ::grpc::ServerContext* context,
      ::grpc::ServerReaderWriter<::nighthawk::client::ExecutionResponse,
                                 ::nighthawk::client::ExecutionRequest>* stream) override;

private:
  void handleExecutionRequest(const nighthawk::client::ExecutionRequest& request);
  void writeResponse(const nighthawk::client::ExecutionResponse& response);
  ::grpc::Status finishGrpcStream(const bool success, absl::string_view description = "");

  std::unique_ptr<Envoy::Logger::Context> logging_context_;
  std::shared_ptr<Envoy::ProcessWide> process_wide_;
  Envoy::Event::RealTimeSystem time_system_; // NO_CHECK_FORMAT(real_time)
  Envoy::Thread::MutexBasicLockable log_lock_;
  ::grpc::ServerReaderWriter<::nighthawk::client::ExecutionResponse,
                             ::nighthawk::client::ExecutionRequest>* stream_;
  std::future<void> future_;
  // accepted_lock_ and accepted_event_ are used to synchronize the threads
  // when starting up a future to service a test, and ensure the code servicing it
  // in the other thread has acquired busy_lock_.
  Envoy::Thread::MutexBasicLockable accepted_lock_;
  Envoy::Thread::CondVar accepted_event_;
  // busy_lock_ is used to test from the service thread to query if there's
  // an active test being run.
  Envoy::Thread::MutexBasicLockable busy_lock_;
  std::thread thread_;
};

/**
 * Dummy implementation of our request-source gRPC service definition, for testing and experimental
 * purposes.
 */
class RequestSourceServiceImpl final
    : public nighthawk::request_source::NighthawkRequestSourceService::Service,
      public Envoy::Logger::Loggable<Envoy::Logger::Id::main> {

public:
  ::grpc::Status
  RequestStream(::grpc::ServerContext* context,
                ::grpc::ServerReaderWriter<::nighthawk::request_source::RequestStreamResponse,
                                           ::nighthawk::request_source::RequestStreamRequest>*
                    stream) override;

private:
  RequestSourcePtr createStaticEmptyRequestSource(const uint32_t amount);
};

class SinkServiceImpl final : public nighthawk::NighthawkSink::Service,
                              public Envoy::Logger::Loggable<Envoy::Logger::Id::main> {

public:
  SinkServiceImpl(std::unique_ptr<Sink>&& sink);
  ::grpc::Status
  StoreExecutionResponseStream(::grpc::ServerContext* context,
                               ::grpc::ServerReader<::nighthawk::StoreExecutionRequest>* reader,
                               ::nighthawk::StoreExecutionResponse* response) override;

  ::grpc::Status
  SinkRequestStream(::grpc::ServerContext* context,
                    ::grpc::ServerReaderWriter<::nighthawk::SinkResponse, ::nighthawk::SinkRequest>*
                        stream) override;

private:
  const std::map<const std::string, const StatisticPtr>
  readAppendices(const std::vector<::nighthawk::client::ExecutionResponse>& responses) const;
  absl::StatusOr<::nighthawk::SinkResponse> aggregateSinkResponses(
      absl::string_view requested_execution_id,
      const std::vector<::nighthawk::client::ExecutionResponse>& responses) const;
  const absl::Status mergeIntoAggregatedOutput(const ::nighthawk::client::Output& input_to_merge,
                                               ::nighthawk::client::Output& merge_target) const;
  // TODO(oschaaf): ref?
  std::unique_ptr<Sink> sink_;
};

class NighthawkDistributorServiceImpl final
    : public nighthawk::NighthawkDistributor::Service,
      public Envoy::Logger::Loggable<Envoy::Logger::Id::main> {

public:
  ::grpc::Status DistributedRequestStream(
      ::grpc::ServerContext* context,
      ::grpc::ServerReaderWriter<::nighthawk::DistributedResponse, ::nighthawk::DistributedRequest>*
          stream) override;

private:
  ::grpc::Status validateRequest(const ::nighthawk::DistributedRequest& request) const;
  nighthawk::DistributedResponse
  handleRequest(const ::nighthawk::DistributedRequest& request) const;
  absl::StatusOr<::nighthawk::SinkResponse>
  handleSinkRequest(const envoy::config::core::v3::Address& service,
                    const ::nighthawk::SinkRequest& request) const;
  absl::StatusOr<nighthawk::client::ExecutionResponse>
  handleExecutionRequest(const envoy::config::core::v3::Address& service,
                         const ::nighthawk::client::ExecutionRequest& request) const;
};

} // namespace Client
} // namespace Nighthawk
