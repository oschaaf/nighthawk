#pragma once

#include <vector>

#include "envoy/common/time.h"

#include "nighthawk/common/tracer.h"

#include "common/common/assert.h"

namespace Nighthawk {

class TracerImpl : public Tracer {
public:
  TracerImpl(Envoy::TimeSource& time_source) : time_source_(time_source) {}
  void traceTime() override { trace_points_.push_back(time_source_.monotonicTime()); }

private:
  Envoy::TimeSource& time_source_;
  std::vector<Envoy::MonotonicTime> trace_points_;
};

} // namespace Nighthawk
