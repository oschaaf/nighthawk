#pragma once

#include <memory>
#include <vector>

#include "nighthawk/common/statistic.h"

#include "external/dep_hdrhistogram_c/src/hdr_histogram.h"
#include "external/envoy/source/common/common/logger.h"
#include "external/envoy/source/common/stats/histogram_impl.h"

#include "common/frequency.h"

namespace Nighthawk {

/**
 * Base class for all statistics implementations.
 */
class StatisticImpl : public Statistic, public Envoy::Logger::Loggable<Envoy::Logger::Id::main> {
public:
  void addValue(uint64_t value) override;
  std::string toString() const override;
  nighthawk::client::Statistic toProto(SerializationDomain domain) const override;
  std::string id() const override;
  void setId(absl::string_view id) override;
  uint64_t count() const override;
  uint64_t max() const override;
  uint64_t min() const override;

protected:
  std::string id_;
  uint64_t min_{UINT64_MAX};
  uint64_t max_{0};
  uint64_t count_{0};
};

/**
 * Dummy statistic for future use.
 * Intended be plugged into the system as a no-op in cases where statistic tracking
 * is not desired.
 */
class NullStatistic : public StatisticImpl {
public:
  void addValue(uint64_t) override {}
  double mean() const override { return 0.0; }
  double pvariance() const override { return 0.0; }
  double pstdev() const override { return 0.0; }
  StatisticPtr combine(const Statistic&) const override { return createNewInstanceOfSameType(); };
  uint64_t significantDigits() const override { return 0; }
  StatisticPtr createNewInstanceOfSameType() const override {
    return std::make_unique<NullStatistic>();
  };
};

/**
 * Simple statistic that keeps track of count/mean/pvariance/pstdev with low memory
 * requirements, but the potential for errors due to catastrophic cancellation.
 */
class SimpleStatistic : public StatisticImpl {
public:
  void addValue(uint64_t value) override;
  double mean() const override;
  double pvariance() const override;
  double pstdev() const override;
  StatisticPtr combine(const Statistic& statistic) const override;
  uint64_t significantDigits() const override { return 8; }
  StatisticPtr createNewInstanceOfSameType() const override {
    return std::make_unique<SimpleStatistic>();
  };

private:
  double sum_x_{0};
  double sum_x2_{0};
};

/**
 * Statistic that keeps track of count/mean/pvariance/pstdev with low memory
 * requirements. Resistant to catastrophic cancellation and pretty accurate.
 * Based on Donald Knuth's online variance computation algorithm:
 * (Art of Computer Programming, Vol 2, page 232).
 * Knuth attributes this algorithm to B. P. Welford.
 * (Technometrics, Vol 4, No 3, Aug 1962 pp 419-420).
 */
class StreamingStatistic : public StatisticImpl {
public:
  void addValue(uint64_t value) override;
  double mean() const override;
  double pvariance() const override;
  double pstdev() const override;
  StatisticPtr combine(const Statistic& statistic) const override;
  bool resistsCatastrophicCancellation() const override { return true; }
  StatisticPtr createNewInstanceOfSameType() const override {
    return std::make_unique<StreamingStatistic>();
  };

private:
  double mean_{0};
  double accumulated_variance_{0};
};

/**
 * InMemoryStatistic uses StreamingStatistic under the hood to compute statistics.
 * Stores the raw latencies in-memory, which may accumulate to a lot
 * of data(!). Not used right now, but useful for debugging purposes.
 */
class InMemoryStatistic : public StatisticImpl {
public:
  InMemoryStatistic();
  void addValue(uint64_t sample_value) override;
  double mean() const override;
  double pvariance() const override;
  double pstdev() const override;
  StatisticPtr combine(const Statistic& statistic) const override;
  bool resistsCatastrophicCancellation() const override {
    return streaming_stats_->resistsCatastrophicCancellation();
  }
  uint64_t significantDigits() const override { return streaming_stats_->significantDigits(); }
  StatisticPtr createNewInstanceOfSameType() const override {
    return std::make_unique<InMemoryStatistic>();
  };

private:
  std::vector<int64_t> samples_;
  StatisticPtr streaming_stats_;
};

/**
 * HdrStatistic uses HdrHistogram under the hood to compute statistics.
 */
class HdrStatistic : public StatisticImpl {
public:
  HdrStatistic();
  ~HdrStatistic() override;
  void addValue(uint64_t sample_value) override;
  uint64_t count() const override;
  double mean() const override;
  double pvariance() const override;
  double pstdev() const override;
  uint64_t max() const override;
  uint64_t min() const override;

  StatisticPtr combine(const Statistic& statistic) const override;
  nighthawk::client::Statistic toProto(SerializationDomain domain) const override;
  uint64_t significantDigits() const override { return SignificantDigits; }
  StatisticPtr createNewInstanceOfSameType() const override {
    return std::make_unique<HdrStatistic>();
  };

private:
  static const int SignificantDigits;
  struct hdr_histogram* histogram_;
};

/**
 * Per worker CircllhistStatistic uses Circllhist under the hood to compute statistics.
 * In order to be flushed to Envoy stats Sinks, it takes the singleton Store reference in the
 * constructor and wraps HistogramImplHelper.
 */
class CircllhistStatistic : public StatisticImpl {
public:
  CircllhistStatistic() {
    histogram_ = hist_alloc();
    ASSERT(histogram_ != nullptr);
  }

  ~CircllhistStatistic() override {
    // We must explicitly free the StatName here in order to supply the
    // SymbolTable reference.
    // MetricImpl::clear(symbolTable());
    hist_free(histogram_);
  }

  // Nighthawk::Statistic
  void addValue(uint64_t value) override { recordValue(value); }
  double mean() const override { return hist_approx_mean(histogram_); }
  double pvariance() const override { return pstdev() * pstdev(); }
  double pstdev() const override { return hist_approx_stddev(histogram_); }
  StatisticPtr combine(const Statistic& statistic) const override {
    auto combined = std::make_unique<CircllhistStatistic>();
    const auto& b = dynamic_cast<const CircllhistStatistic&>(statistic);
    hist_accumulate(combined->histogram_, &this->histogram_, 1);
    hist_accumulate(combined->histogram_, &b.histogram_, 1);

    combined->min_ = std::min(this->min(), b.min());
    combined->max_ = std::max(this->max(), b.max());
    combined->count_ = this->count() + b.count();
    return combined;
  }
  StatisticPtr createNewInstanceOfSameType() const override {
    return std::make_unique<CircllhistStatistic>();
  }

  // Envoy::Stats::Histogram
  void recordValue(uint64_t value) {
    // store_.deliverHistogramToSinks(*this, value);
    hist_insert_intscale(histogram_, value, 0, 1);
    StatisticImpl::addValue(value);
  }
  // Envoy::Stats::Histogram::Unit unit() const override {
  //  return Envoy::Stats::Histogram::Unit::Unspecified;
  //};
  // bool used() const override { return count() > 0; }
  // Envoy::Stats::SymbolTable& symbolTable() override { return store_.symbolTable(); }

private:
  // This is used for delivering the histogram data to sinks.
  // Envoy::Stats::Store& store_;
  histogram_t* histogram_;
};

} // namespace Nighthawk
