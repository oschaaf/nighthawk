#include "client/client_worker_impl.h"

#include "envoy/filesystem/watcher.h"

namespace Nighthawk {
namespace Client {

ClientWorkerImpl::ClientWorkerImpl(Envoy::Api::Api& api, Envoy::ThreadLocal::Instance& tls,
                                   const BenchmarkClientFactory& benchmark_client_factory,
                                   const SequencerFactory& sequencer_factory, UriPtr&& uri,
                                   Envoy::Stats::StorePtr&& store, const int worker_number,
                                   const Envoy::MonotonicTime starting_time)
    : WorkerImpl(api, tls, std::move(store)), worker_number_(worker_number),
      starting_time_(starting_time), benchmark_client_(benchmark_client_factory.create(
                                         api, *dispatcher_, *store_, std::move(uri))),
      sequencer_(sequencer_factory.create(time_source_, *dispatcher_, starting_time,
                                          *benchmark_client_)) {}

void ClientWorkerImpl::simpleWarmup() {
  ENVOY_LOG(debug, "> worker {}: warmup start.", worker_number_);
  benchmark_client_->tryStartOne([this] { dispatcher_->exit(); });
  dispatcher_->run(Envoy::Event::Dispatcher::RunType::Block);
  ENVOY_LOG(debug, "> worker {}: warmup done.", worker_number_);
}

void ClientWorkerImpl::work() {
  std::cerr << "add watch 1" << std::endl;
  watcher_ = dispatcher_->createFilesystemWatcher();
  watcher_->addWatch("/tmp/nighthawk.run", Envoy::Filesystem::Watcher::Events::Modified,
                     [this](uint32_t) -> void { this->cancel(); });

  std::cerr << "add watch 2" << std::endl;
  benchmark_client_->initialize(*Envoy::Runtime::LoaderSingleton::getExisting());
  simpleWarmup();
  benchmark_client_->setMeasureLatencies(true);
  sequencer_->start();
  sequencer_->waitForCompletion();
  benchmark_client_->terminate();
  success_ = true;
  dispatcher_->exit();
}

void ClientWorkerImpl::cancel() {
  // dispatcher_->post([this] {
  sequencer_->cancel();
  //});
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