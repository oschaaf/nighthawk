#include "client/client_worker_impl.h"

#include "external/envoy/source/common/stats/symbol_table_impl.h"

#include "common/utility.h"

namespace Nighthawk {
namespace Client {

ClientWorkerImpl::ClientWorkerImpl(Envoy::Api::Api& api, Envoy::ThreadLocal::Instance& tls,
                                   Envoy::Upstream::ClusterManagerPtr& cluster_manager,
                                   const BenchmarkClientFactory& benchmark_client_factory,
                                   const SequencerFactory& sequencer_factory, UriPtr&& uri,
                                   Envoy::Stats::Store& store, const int worker_number,
                                   const Envoy::MonotonicTime starting_time,
                                   bool prefetch_connections)
    : WorkerImpl(api, tls, store), worker_number_(worker_number), starting_time_(starting_time),
      benchmark_client_(benchmark_client_factory.create(api, *dispatcher_, store_, std::move(uri),
                                                        cluster_manager)),
      sequencer_(
          sequencer_factory.create(time_source_, *dispatcher_, starting_time, *benchmark_client_)),
      prefetch_connections_(prefetch_connections) {}

void ClientWorkerImpl::simpleWarmup() {
  ENVOY_LOG(debug, "> worker {}: warmup start.", worker_number_);
  if (prefetch_connections_) {
    benchmark_client_->prefetchPoolConnections();
  }
  benchmark_client_->tryStartOne([this] { dispatcher_->exit(); });
  dispatcher_->run(Envoy::Event::Dispatcher::RunType::Block);
  ENVOY_LOG(debug, "> worker {}: warmup done.", worker_number_);
}

void ClientWorkerImpl::work() {
  simpleWarmup();
  benchmark_client_->setMeasureLatencies(true);
  sequencer_->start();
  sequencer_->waitForCompletion();
  benchmark_client_->terminate();
  success_ = true;
  dispatcher_->exit();
  // Save a final snapshot of the worker-specific counter accumulations before
  // we exit the thread.
  thread_local_counter_values_ = Utility().mapCountersFromStore(
      store_, [](absl::string_view, uint64_t value) { return value > 0; });
}

StatisticPtrMap ClientWorkerImpl::statistics() const {
  StatisticPtrMap statistics;
  StatisticPtrMap s1 = benchmark_client_->statistics();
  StatisticPtrMap s2 = sequencer_->statistics();
  statistics.insert(s1.begin(), s1.end());
  statistics.insert(s2.begin(), s2.end());
  return statistics;
}

} // namespace Client
} // namespace Nighthawk