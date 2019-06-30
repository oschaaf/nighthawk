#pragma once

#include <functional>
#include <iostream>
#include <memory>
#include <stack>
#include <vector>

#include "common/common/assert.h"
#include "envoy/common/pure.h"
#include "envoy/common/time.h"
#include "nighthawk/common/tracer.h"

namespace Nighthawk {

class TracerImpl : public Tracer {
public:
  TracerImpl(Envoy::TimeSource& time_source) : time_source_(time_source) {}
  void traceTime() override { trace_points_.push_back(time_source_.monotonicTime()); }
  void set_in_flight(bool in_flight) override { in_flight_ = in_flight; }
  bool in_flight() const override { return in_flight_; };
  void orphan() override {
    ASSERT(!orphaned_);
    orphaned_ = true;
  };
  bool orphaned() const override { return orphaned_; };

private:
  Envoy::TimeSource& time_source_;
  std::vector<Envoy::MonotonicTime> trace_points_;
  bool in_flight_{false};
  bool orphaned_{false};
};

class TracerPoolImpl : public TracerPool {
public:
  TracerPoolImpl(Envoy::TimeSource& time_source) : time_source_(time_source) {}

private:
  void growPool();
  void recycleElement(std::unique_ptr<Tracer> tracer);

  std::stack<std::unique_ptr<Tracer>> pool_;
  std::vector<Tracer*> all_;
  Envoy::TimeSource& time_source_;
};

} // namespace Nighthawk
