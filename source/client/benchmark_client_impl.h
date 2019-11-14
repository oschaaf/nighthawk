#pragma once

#include "envoy/api/api.h"
#include "envoy/event/dispatcher.h"
#include "envoy/http/conn_pool.h"
#include "envoy/network/address.h"
#include "envoy/runtime/runtime.h"
#include "envoy/stats/scope.h"
#include "envoy/stats/store.h"
#include "envoy/upstream/upstream.h"

#include "nighthawk/client/benchmark_client.h"
#include "nighthawk/common/header_source.h"
#include "nighthawk/common/sequencer.h"
#include "nighthawk/common/statistic.h"

#include "external/envoy/source/common/common/logger.h"
#include "external/envoy/source/common/http/http1/conn_pool.h"
#include "external/envoy/source/common/http/http2/conn_pool.h"
#include "external/envoy/source/common/runtime/runtime_impl.h"

#include "api/client/options.pb.h"

#include "client/stream_decoder.h"

namespace Nighthawk {
namespace Client {

using namespace std::chrono_literals;

using namespace Envoy; // We need this because of macro expectations.

#define ALL_BENCHMARK_CLIENT_STATS(COUNTER)                                                        \
  COUNTER(stream_resets)                                                                           \
  COUNTER(http_1xx)                                                                                \
  COUNTER(http_2xx)                                                                                \
  COUNTER(http_3xx)                                                                                \
  COUNTER(http_4xx)                                                                                \
  COUNTER(http_5xx)                                                                                \
  COUNTER(http_xxx)                                                                                \
  COUNTER(pool_overflow)                                                                           \
  COUNTER(pool_connection_failure)

struct BenchmarkClientStats {
  ALL_BENCHMARK_CLIENT_STATS(GENERATE_COUNTER_STRUCT)
};

class Http1PoolImpl : public Envoy::Http::Http1::ProdConnPoolImpl {
public:
  using Envoy::Http::Http1::ProdConnPoolImpl::ProdConnPoolImpl;
  void createConnections(const uint32_t connection_limit);
};

// Experimental pool of h2 pools, with the purpose to scale connections. This helps scale over
// multiple backend workers/threads/cores by landing multiple connections, even when using a
// single-worker Nighthawk instance. Vanilla Envoy's H1 pool is single connection only (sometimes
// dual in connection drainage scenarios).
// Combining this with --max-requests-per-connection may help balancing load across the backend
// more, more as doing so gives the target an opportunity to periodically rebalance while it
// experiencing the workload we are handing it.
class Http2PoolImpl : public Envoy::Http::ConnectionPool::Instance,
                      public Envoy::Http::ConnPoolImplBase {
public:
  Http2PoolImpl(Envoy::Event::Dispatcher& dispatcher, Envoy::Upstream::HostConstSharedPtr host,
                Envoy::Upstream::ResourcePriority priority,
                const Envoy::Network::ConnectionSocket::OptionsSharedPtr& options,
                const Envoy::Network::TransportSocketOptionsSharedPtr& transport_socket_options)
      : Envoy::Http::ConnPoolImplBase(std::move(host), std::move(priority)),
        dispatcher_(dispatcher), socket_options_(options),
        transport_socket_options_(transport_socket_options) {
    for (uint32_t i = 0; i < host_->cluster().resourceManager(priority_).connections().max(); i++) {
      pools_.push_back(std::make_unique<Envoy::Http::Http2::ProdConnPoolImpl>(
          dispatcher_, host_, priority_, socket_options_, transport_socket_options_));
    }
  }

  // Envoy::Http::ConnectionPool::Instance
  Envoy::Http::Protocol protocol() const override { return Envoy::Http::Protocol::Http2; }
  void addDrainedCallback(Envoy::Http::ConnectionPool::Instance::DrainedCb cb) override {
    for (auto& pool : pools_) {
      pool->addDrainedCallback(cb);
    }
  }
  void drainConnections() override {
    for (auto& pool : pools_) {
      pool->drainConnections();
    }
  }
  bool hasActiveConnections() const override {
    for (auto& pool : pools_) {
      if (pool->hasActiveConnections()) {
        return true;
      }
    }
    return false;
  }
  Envoy::Http::ConnectionPool::Cancellable*
  newStream(Envoy::Http::StreamDecoder& response_decoder,
            Envoy::Http::ConnectionPool::Callbacks& callbacks) override {
    // Use the simplest but probably naive approach of rotating over the available pool instances
    // / connections to distrubute requests accross them.
    return pools_[pool_round_robin_index_++ % pools_.size()]->newStream(response_decoder,
                                                                        callbacks);
  };
  Envoy::Upstream::HostDescriptionConstSharedPtr host() const override { return host_; };

protected:
  // Envoy::Http::ConnPoolImplBase
  void checkForDrained() override {
    // TODO(oschaaf): this one is protected, can't forward it.
    // pool->checkForDrained();
  }

private:
  Envoy::Event::Dispatcher& dispatcher_;
  const Envoy::Network::ConnectionSocket::OptionsSharedPtr socket_options_;
  const Envoy::Network::TransportSocketOptionsSharedPtr transport_socket_options_;
  std::vector<std::unique_ptr<Envoy::Http::Http2::ProdConnPoolImpl>> pools_;
  uint64_t pool_round_robin_index_{0};
};

class BenchmarkClientHttpImpl : public BenchmarkClient,
                                public StreamDecoderCompletionCallback,
                                public Envoy::Logger::Loggable<Envoy::Logger::Id::main> {
public:
  BenchmarkClientHttpImpl(Envoy::Api::Api& api, Envoy::Event::Dispatcher& dispatcher,
                          Envoy::Stats::Scope& scope, StatisticPtr&& connect_statistic,
                          StatisticPtr&& response_statistic, bool use_h2,
                          Envoy::Upstream::ClusterManagerPtr& cluster_manager,
                          Envoy::Tracing::HttpTracerPtr& http_tracer,
                          absl::string_view cluster_name, HeaderGenerator header_generator);

  void setConnectionLimit(uint32_t connection_limit) { connection_limit_ = connection_limit; }
  void setMaxPendingRequests(uint32_t max_pending_requests) {
    max_pending_requests_ = max_pending_requests;
  }
  void setMaxActiveRequests(uint32_t max_active_requests) {
    max_active_requests_ = max_active_requests;
  }
  void setMaxRequestsPerConnection(uint32_t max_requests_per_connection) {
    max_requests_per_connection_ = max_requests_per_connection;
  }

  // BenchmarkClient
  void terminate() override;
  StatisticPtrMap statistics() const override;
  bool measureLatencies() const override { return measure_latencies_; }
  void setMeasureLatencies(bool measure_latencies) override {
    measure_latencies_ = measure_latencies;
  }
  bool tryStartRequest(CompletionCallback caller_completion_callback) override;
  Envoy::Stats::Scope& scope() const override { return *scope_; }

  // StreamDecoderCompletionCallback
  void onComplete(bool success, const Envoy::Http::HeaderMap& headers) override;
  void onPoolFailure(Envoy::Http::ConnectionPool::PoolFailureReason reason) override;

  // Helpers
  Envoy::Http::ConnectionPool::Instance* pool() {
    auto proto = use_h2_ ? Envoy::Http::Protocol::Http2 : Envoy::Http::Protocol::Http11;
    return cluster_manager_->httpConnPoolForCluster(
        cluster_name_, Envoy::Upstream::ResourcePriority::Default, proto, nullptr);
  }

  void prefetchPoolConnections() override;

private:
  Envoy::Api::Api& api_;
  Envoy::Event::Dispatcher& dispatcher_;
  Envoy::Stats::ScopePtr scope_;
  // These are declared order dependent. Changing ordering may trigger on assert upon
  // destruction when tls has been involved during usage.
  StatisticPtr connect_statistic_;
  StatisticPtr response_statistic_;
  const bool use_h2_;
  std::chrono::seconds timeout_{5s};
  uint32_t connection_limit_{1};
  uint32_t max_pending_requests_{1};
  uint32_t max_active_requests_{UINT32_MAX};
  uint32_t max_requests_per_connection_{UINT32_MAX};
  Envoy::Event::TimerPtr timer_;
  Envoy::Runtime::RandomGeneratorImpl generator_;
  uint64_t requests_completed_{};
  uint64_t requests_initiated_{};
  bool measure_latencies_{};
  BenchmarkClientStats benchmark_client_stats_;
  Envoy::Upstream::ClusterManagerPtr& cluster_manager_;
  Envoy::Tracing::HttpTracerPtr& http_tracer_;
  std::string cluster_name_;
  const HeaderGenerator header_generator_;
};

} // namespace Client
} // namespace Nighthawk