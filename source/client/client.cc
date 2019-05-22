#include "client/client.h"

#include <chrono>
#include <fstream>
#include <iostream>
#include <memory>
#include <random>

#include "envoy/stats/store.h"

#include "nighthawk/client/output_formatter.h"

#include "common/api/api_impl.h"
#include "common/common/cleanup.h"
#include "common/common/thread_impl.h"
#include "common/event/dispatcher_impl.h"
#include "common/event/real_time_system.h"
#include "common/filesystem/filesystem_impl.h"
#include "common/frequency.h"
#include "common/network/utility.h"
#include "common/runtime/runtime_impl.h"
#include "common/thread_local/thread_local_impl.h"
#include "common/uri_impl.h"
#include "common/utility.h"

#include "client/client_worker_impl.h"
#include "client/factories_impl.h"
#include "client/options_impl.h"
#include "client/process_context_impl.h"

#include "api/client/output.pb.h"
#include "ares.h"

using namespace std::chrono_literals;

namespace Nighthawk {
namespace Client {

Main::Main(int argc, const char* const* argv)
    : Main(std::make_unique<Client::OptionsImpl>(argc, argv)) {}

Main::Main(Client::OptionsPtr&& options) : options_(std::move(options)) {
  ares_library_init(ARES_LIB_INIT_ALL);
  Envoy::Event::Libevent::Global::initialize();
  configureComponentLogLevels(spdlog::level::from_str(options_->verbosity()));
}

Main::~Main() { ares_library_cleanup(); }

void Main::configureComponentLogLevels(spdlog::level::level_enum level) {
  // TODO(oschaaf): Add options to tweak the log level of the various log tags
  // that are available.
  Envoy::Logger::Registry::setLogLevel(level);
  Envoy::Logger::Logger* logger_to_change = Envoy::Logger::Registry::logger("main");
  logger_to_change->setLevel(level);
}

uint32_t Main::determineConcurrency() const {
  uint32_t cpu_cores_with_affinity = PlatformUtils::determineCpuCoresWithAffinity();
  if (cpu_cores_with_affinity == 0) {
    ENVOY_LOG(warn, "Failed to determine the number of cpus with affinity to our thread.");
    cpu_cores_with_affinity = std::thread::hardware_concurrency();
  }

  bool autoscale = options_->concurrency() == "auto";
  // TODO(oschaaf): Maybe, in the case where the concurrency flag is left out, but
  // affinity is set / we don't have affinity with all cores, we should default to autoscale.
  // (e.g. we are called via taskset).
  uint32_t concurrency = autoscale ? cpu_cores_with_affinity : std::stoi(options_->concurrency());

  if (autoscale) {
    ENVOY_LOG(info, "Detected {} (v)CPUs with affinity..", cpu_cores_with_affinity);
  }

  ENVOY_LOG(info, "Starting {} threads / event loops. Test duration: {} seconds.", concurrency,
            options_->duration().count());
  ENVOY_LOG(info, "Global targets: {} connections and {} calls per second.",
            options_->connections() * concurrency, options_->requestsPerSecond() * concurrency);

  if (concurrency > 1) {
    ENVOY_LOG(info, "   (Per-worker targets: {} connections and {} calls per second)",
              options_->connections(), options_->requestsPerSecond());
  }

  return concurrency;
}

std::vector<StatisticPtr>
Main::mergeWorkerStatistics(const StatisticFactory& statistic_factory,
                            const std::vector<ClientWorkerPtr>& workers) const {
  // First we init merged_statistics with newly created statistics instances.
  // We do that by adding the same amount of Statistic instances that the first worker has.
  // (We always have at least one worker, and all workers have the same number of Statistic
  // instances associated to them, in the same order).
  std::vector<StatisticPtr> merged_statistics;
  StatisticPtrMap w0_statistics = workers[0]->statistics();
  for (const auto& w0_statistic : w0_statistics) {
    auto new_statistic = statistic_factory.create();
    new_statistic->setId(w0_statistic.first);
    merged_statistics.push_back(std::move(new_statistic));
  }

  // Merge the statistics of all workers into the statistics vector we initialized above.
  for (auto& w : workers) {
    uint32_t i = 0;
    for (const auto& wx_statistic : w->statistics()) {
      auto merged = merged_statistics[i]->combine(*(wx_statistic.second));
      merged->setId(merged_statistics[i]->id());
      merged_statistics[i] = std::move(merged);
      i++;
    }
  }
  return merged_statistics;
}

std::map<std::string, uint64_t>
Main::mergeWorkerCounters(const std::vector<ClientWorkerPtr>& workers) const {
  std::map<std::string, uint64_t> merged;
  for (auto& w : workers) {
    const auto counters = Utility().mapCountersFromStore(
        w->store(), [](absl::string_view, uint64_t value) { return value > 0; });
    for (const auto& counter : counters) {
      if (merged.count(counter.first) == 0) {
        merged[counter.first] = counter.second;
      } else {
        merged[counter.first] += counter.second;
      }
    }
  }

  return merged;
}

bool Main::runWorkers(ProcessContext& context, OutputFormatter& formatter) const {
  UriImpl uri(options_->uri());
  try {
    uri.resolve(context.dispatcher(),
                Utility::parseAddressFamilyOptionString(options_->addressFamily()));
  } catch (UriException) {
    return false;
  }
  const std::vector<ClientWorkerPtr>& workers = context.createWorkers(uri, determineConcurrency());
  if (context.runWorkers(formatter)) {
    StatisticFactoryImpl statistic_factory(*options_);
    formatter.addResult("global", mergeWorkerStatistics(statistic_factory, workers),
                        mergeWorkerCounters(workers));
    return true;
  }
  return false;
}

bool Main::run() {
  Envoy::Thread::MutexBasicLockable log_lock;
  auto logging_context = std::make_unique<Envoy::Logger::Context>(
      spdlog::level::from_str(options_->verbosity()), "[%T.%f][%t][%L] %v", log_lock);
  ProcessContextImpl context(*options_);
  OutputFormatterFactoryImpl output_format_factory(context.time_system(), *options_);
  auto formatter = output_format_factory.create();
  if (runWorkers(context, *formatter)) {
    // TODO(oschaaf): the way we output should be optionized.
    std::cout << formatter->toString();
    ENVOY_LOG(info, "Done.");
    return true;
  }
  ENVOY_LOG(critical, "An error ocurred.");
  return false;
}

} // namespace Client
} // namespace Nighthawk
