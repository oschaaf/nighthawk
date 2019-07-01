#pragma once

#include <functional>
#include <iostream>
#include <memory>
#include <stack>
#include <vector>

#include "common/common/assert.h"
#include "envoy/common/time.h"
#include "nighthawk/common/tracer.h"

namespace Nighthawk {

class TracerImpl : public Tracer {
public:
  TracerImpl(Envoy::TimeSource& time_source) : time_source_(time_source) {
    std::cerr << "destruct tracer" << std::endl;
  }
  void traceTime() override { trace_points_.push_back(time_source_.monotonicTime()); }

  // Poolable
  void orphan() override {
    ASSERT(!orphaned_);
    orphaned_ = true;
  };
  bool orphaned() const override { return orphaned_; };

private:
  Envoy::TimeSource& time_source_;
  std::vector<Envoy::MonotonicTime> trace_points_;
  bool orphaned_{false};
};

} // namespace Nighthawk
