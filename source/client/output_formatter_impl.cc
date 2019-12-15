#include "client/output_formatter_impl.h"

#include <google/protobuf/util/time_util.h>

#include <chrono>
#include <sstream>

#include "nighthawk/common/exception.h"
#include "nighthawk/common/version.h"

#include "external/envoy/source/common/protobuf/utility.h"

#include "api/client/transform/fortio.pb.h"

#include "absl/strings/str_cat.h"

namespace Nighthawk {
namespace Client {

std::vector<std::string> OutputFormatterImpl::getLowerCaseOutputFormats() {
  const Envoy::Protobuf::EnumDescriptor* enum_descriptor =
      nighthawk::client::OutputFormat::OutputFormatOptions_descriptor();
  std::vector<std::string> values;
  // We skip the first, which is DEFAULT, as it's not selectable.
  for (int i = 1; i < enum_descriptor->value_count(); ++i) {
    auto* value_descriptor = enum_descriptor->value(i);
    std::string name = value_descriptor->name();
    std::transform(name.begin(), name.end(), name.begin(),
                   [](unsigned char c) { return std::tolower(c); });
    values.push_back(name);
  }
  return values;
}

void OutputFormatterImpl::iteratePercentiles(
    const nighthawk::client::Statistic& statistic,
    const std::function<void(const nighthawk::client::Percentile&)>& callback) const {
  // The proto percentiles are ordered ascending. We write the first match to the stream.
  double last_percentile = -1.;
  for (const double p : {.0, .5, .75, .8, .9, .95, .99, .999, 1.}) {
    for (const auto& percentile : statistic.percentiles()) {
      if (percentile.percentile() >= p && last_percentile < percentile.percentile()) {
        last_percentile = percentile.percentile();
        callback(percentile);
        break;
      }
    }
  }
}

std::string ConsoleOutputFormatterImpl::formatProto(const nighthawk::client::Output& output) const {
  std::stringstream ss;
  ss << "Nighthawk - A layer 7 protocol benchmarking tool." << std::endl << std::endl;
  for (const auto& result : output.results()) {
    if (result.name() == "global") {
      for (const auto& statistic : result.statistics()) {
        if (statistic.count() == 0) {
          continue;
        }
        ss << fmt::format("{}", statIdtoFriendlyStatName(statistic.id())) << std::endl;
        ss << fmt::format("  samples: {}", statistic.count()) << std::endl;
        ss << fmt::format("  mean:    {}", formatProtoDuration(statistic.mean())) << std::endl;
        ss << fmt::format("  pstdev:  {}", formatProtoDuration(statistic.pstdev())) << std::endl;
        ss << std::endl;
        ss << fmt::format("  {:<{}}{:<{}}{:<{}}", "Percentile", 12, "Count", 12, "Latency", 15)
           << std::endl;
        iteratePercentiles(statistic, [&ss, this](const nighthawk::client::Percentile& percentile) {
          ss << fmt::format("  {:<{}}{:<{}}{:<{}}", percentile.percentile(), 12, percentile.count(),
                            12, formatProtoDuration(percentile.duration()), 15)
             << std::endl;
        });
        ss << std::endl;
      }
      ss << fmt::format("{:<{}}{:<{}}{}", "Counter", 40, "Value", 12, "Per second") << std::endl;
      for (const auto& counter : result.counters()) {
        const auto nanos =
            Envoy::Protobuf::util::TimeUtil::DurationToNanoseconds(result.execution_duration());
        ss << fmt::format("{:<{}}{:<{}}{:.{}f}", counter.name(), 40, counter.value(), 12,
                          counter.value() / (nanos / 1e9), 2)
           << std::endl;
      }
      ss << std::endl;
    }
  }

  return ss.str();
}

std::string ConsoleOutputFormatterImpl::formatProtoDuration(
    const Envoy::ProtobufWkt::Duration& duration) const {
  auto c = Envoy::Protobuf::util::TimeUtil::DurationToMicroseconds(duration);
  return fmt::format("{}s {:03}ms {:03}us", (c % 1'000'000'000) / 1'000'000,
                     (c % 1'000'000) / 1'000, c % 1'000);
}

std::string ConsoleOutputFormatterImpl::statIdtoFriendlyStatName(absl::string_view stat_id) {
  if (stat_id == "benchmark_http_client.queue_to_connect") {
    return "Queueing and connection setup latency";
  } else if (stat_id == "benchmark_http_client.request_to_response") {
    return "Request start to response end";
  } else if (stat_id == "sequencer.callback") {
    return "Initiation to completion";
  } else if (stat_id == "sequencer.blocking") {
    return "Blocking. Results are skewed when significant numbers are reported here.";
  }
  return std::string(stat_id);
}

std::string JsonOutputFormatterImpl::formatProto(const nighthawk::client::Output& output) const {
  return Envoy::MessageUtil::getJsonStringFromMessage(output, true, true);
}

std::string YamlOutputFormatterImpl::formatProto(const nighthawk::client::Output& output) const {
  return Envoy::MessageUtil::getYamlStringFromMessage(output, true, true);
}

std::string
DottedStringOutputFormatterImpl::formatProto(const nighthawk::client::Output& output) const {
  std::stringstream ss;
  for (const auto& result : output.results()) {
    for (const auto& statistic : result.statistics()) {
      const std::string prefix = fmt::format("{}.{}", result.name(), statistic.id());

      ss << fmt::format("{}.samples: {}", prefix, statistic.count()) << std::endl;
      ss << fmt::format("{}.mean: {}", prefix,
                        Envoy::Protobuf::util::TimeUtil::DurationToMicroseconds(statistic.mean()))
         << std::endl;
      ss << fmt::format("{}.pstdev: {}", prefix,
                        Envoy::Protobuf::util::TimeUtil::DurationToMicroseconds(statistic.pstdev()))
         << std::endl;

      iteratePercentiles(statistic, [&ss, prefix](const nighthawk::client::Percentile& percentile) {
        const std::string percentile_prefix =
            fmt::format("{}.permilles-{:.{}f}", prefix, percentile.percentile() * 1000, 0);
        ss << fmt::format("{}.count: {}", percentile_prefix, percentile.count()) << std::endl;
        ss << fmt::format(
                  "{}.microseconds: {}", percentile_prefix,
                  Envoy::Protobuf::util::TimeUtil::DurationToMicroseconds(percentile.duration()))
           << std::endl;
      });
    }
    for (const auto& counter : result.counters()) {
      const std::string prefix = fmt::format("{}.{}", result.name(), counter.name());
      ss << fmt::format("{}:{}", prefix, counter.value()) << std::endl;
    }
  }
  return ss.str();
}

const nighthawk::client::Result&
FortioOutputFormatterImpl::getGlobalResult(const nighthawk::client::Output& output) const {
  for (const auto& nh_result : output.results()) {
    if (nh_result.name() == "global") {
      return nh_result;
    }
  }

  throw NighthawkException("Nighthawk output was malformed, contains no 'global' results.");
}

const nighthawk::client::Counter&
FortioOutputFormatterImpl::getCounterByName(const nighthawk::client::Result& result,
                                            absl::string_view counter_name) const {
  for (const auto& nh_counter : result.counters()) {
    if (nh_counter.name() == counter_name) {
      return nh_counter;
    }
  }

  throw NighthawkException(absl::StrCat(
      "Nighthawk result was malformed, contains no counter with name: ", counter_name));
}

const nighthawk::client::Statistic& FortioOutputFormatterImpl::getRequestResponseStatistic(
    const nighthawk::client::Result& result) const {
  for (auto const& nh_stat : result.statistics()) {
    if (nh_stat.id() == "benchmark_http_client.request_to_response") {
      return nh_stat;
    }
  }

  throw NighthawkException("Nighthawk result was malformed, contains no "
                           "'benchmark_http_client.request_to_response' statistic.");
}

std::chrono::nanoseconds FortioOutputFormatterImpl::getAverageExecutionDuration(
    const nighthawk::client::Output& output) const {
  if (!output.results_size()) {
    throw NighthawkException("No results in output");
  }
  const auto& r = output.results().at(output.results_size() - 1);
  ASSERT(r.name() == "global");
  return std::chrono::nanoseconds(
      Envoy::Protobuf::util::TimeUtil::DurationToNanoseconds(r.execution_duration()));
}

double
FortioOutputFormatterImpl::durationToSeconds(const Envoy::ProtobufWkt::Duration& duration) const {
  return Envoy::Protobuf::util::TimeUtil::DurationToNanoseconds(duration) / 1e9;
}

std::string FortioOutputFormatterImpl::formatProto(const nighthawk::client::Output& output) const {
  nighthawk::client::FortioResult fortio_output;
  // If there's only a single worker we will have only a single result. If there are multiple
  // workers, there will be global aggregations next to per-worker results. We use that to
  // derive the actual number of workers here.
  const uint32_t number_of_workers = output.results().size() == 1 ? 1 : output.results().size() - 1;

  fortio_output.set_version(output.version());
  fortio_output.set_labels("Nighthawk");
  fortio_output.mutable_starttime()->set_seconds(output.timestamp().seconds());
  fortio_output.set_requestedqps(number_of_workers *
                                 output.options().requests_per_second().value());
  fortio_output.set_url(output.options().uri().value());
  *fortio_output.mutable_requestedduration() = output.options().duration();
  auto actual_duration = getAverageExecutionDuration(output);
  fortio_output.set_actualduration(actual_duration.count());

  // The h2 pool doesn't offer supper for multiple connections here. So we must ignore the
  // connections setting when h2 is involved. Also, the number of workers acts as a multiplier.
  const uint32_t number_of_connections =
      (output.options().h2().value() ? 1 : output.options().connections().value()) *
      number_of_workers;
  // This displays as "connections" in the UI, not threads.
  fortio_output.set_numthreads(number_of_connections);

  // Get the result that represents all workers (global)
  const auto& nh_global_result = this->getGlobalResult(output);

  // Fill in the actual QPS based on the counters
  const auto& nh_rq_counter = this->getCounterByName(nh_global_result, "upstream_rq_total");
  const double actual_qps = static_cast<double>(
      nh_rq_counter.value() / std::chrono::duration<double>(actual_duration).count());
  fortio_output.set_actualqps(actual_qps);

  // Fill in the number of successful responses.
  // Fortio-ui only reads the 200 OK field, other fields are never displayed.
  fortio_output.mutable_retcodes()->insert({"200", 0});
  try {
    const auto& nh_2xx_counter = this->getCounterByName(nh_global_result, "benchmark.http_2xx");
    // So Fortio computes the error percentage based on:
    // - the sample count in the histogram
    // - the number of 200 responses
    // Nighthawk workers perform a single-request as a warmup, and doesn't measure latency for that.
    // So we do an approximation here: we substract number_of_workers from the observed 2xx
    // responses.
    // TODO(oschaaf): It would be better to compute the actual ratio of error codes vs success
    // codes.. and possibly also factor in connection failures, etc.
    fortio_output.mutable_retcodes()->at("200") = nh_2xx_counter.value() - number_of_workers;
  } catch (const NighthawkException& e) {
    // If this field doesn't exist, then there were no 2xx responses
    fortio_output.mutable_retcodes()->at("200") = 0;
  }

  // The core of the transformation is here: All the percentiles to display the dashboard
  const auto& nh_stat = this->getRequestResponseStatistic(nh_global_result);

  nighthawk::client::DurationHistogram fortio_histogram;
  uint64_t prev_fortio_count = 0;
  double prev_fortio_end = 0;
  const uint32_t percentiles_size = nh_stat.percentiles().size();
  for (uint32_t i = 0; i < percentiles_size; i++) {
    nighthawk::client::DataEntry fortio_data_entry;
    const auto& nh_percentile = nh_stat.percentiles().at(i);

    // fortio_percent = 100 * nh_percentile
    fortio_data_entry.set_percent(nh_percentile.percentile() * 100);

    // fortio_count = nh_count - prev_fortio_count
    fortio_data_entry.set_count(nh_percentile.count() - prev_fortio_count);

    // fortio_end = nh_duration (need to convert formats)
    const double nh_percentile_duration_sec = durationToSeconds(nh_percentile.duration());
    fortio_data_entry.set_end(nh_percentile_duration_sec);

    // fortio_start = prev_fortio_end
    if (i == 0) {
      // If this is the first entry, force the start and end time to be the same.
      // This prevents it from starting at 0, making it disproportionally big in the UI.
      prev_fortio_end = nh_percentile_duration_sec;
    } else if (i == percentiles_size - 1) {
    }
    fortio_data_entry.set_start(prev_fortio_end);

    // Update tracking variables
    prev_fortio_count = nh_percentile.count();
    prev_fortio_end = nh_percentile_duration_sec;

    // Set the data entry in the histogram only if it's not the first entry
    fortio_histogram.add_data()->CopyFrom(fortio_data_entry);
  }

  // Set the count (number of data points)
  fortio_histogram.set_count(nh_stat.count());
  fortio_histogram.set_avg(durationToSeconds(nh_stat.mean()));
  fortio_histogram.set_sum(nh_stat.count() * fortio_histogram.avg());
  // XXX(oschaaf): We track pstdev whereas fortio seems to use stdev
  fortio_histogram.set_stddev(durationToSeconds(nh_stat.pstdev()));
  iteratePercentiles(nh_stat,
                     [this, &fortio_histogram](const nighthawk::client::Percentile& percentile) {
                       if (percentile.percentile() == 0) {
                         fortio_histogram.set_min(durationToSeconds(percentile.duration()));
                       } else if (percentile.percentile() == 1) {
                         fortio_histogram.set_max(durationToSeconds(percentile.duration()));
                       } else {
                         auto* p = fortio_histogram.add_percentiles();
                         // We perform some rounding on the percentiles for a better UX while we use
                         // HdrHistogram. HDR-Histogram uses base-2 arithmetic behind the scenes
                         // which yields percentiles close to what fortio has, but not perfectly
                         // on-spot, e.g. 0.990625 and 0.9990234375.
                         p->set_percentile(std::floor(percentile.percentile() * 1000) / 1000);
                         p->set_value(durationToSeconds(percentile.duration()));
                       }
                     });

  // Set the histogram in main fortio output
  fortio_output.mutable_durationhistogram()->CopyFrom(fortio_histogram);
  return Envoy::MessageUtil::getJsonStringFromMessage(fortio_output, true, true);
}

} // namespace Client
} // namespace Nighthawk