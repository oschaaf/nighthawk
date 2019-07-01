#pragma once

#include <functional>
#include <iostream>
#include <memory>
#include <stack>
#include <vector>

#include "common/common/assert.h"
#include "common/pool_base.h"
#include "common/poolable_impl.h"
#include "envoy/common/time.h"
#include "nighthawk/common/poolable.h"
#include "nighthawk/common/tracer.h"

namespace Nighthawk {

class TracerImpl : public Tracer {
public:
  TracerImpl(Envoy::TimeSource& time_source) : time_source_(time_source) {}
  void traceTime() override { trace_points_.push_back(time_source_.monotonicTime()); }

private:
  Envoy::TimeSource& time_source_;
  std::vector<Envoy::MonotonicTime> trace_points_;
};

class PoolableTracerImpl : public PoolableImpl, public TracerImpl {
public:
  PoolableTracerImpl(Envoy::TimeSource& time_source) : TracerImpl(time_source) {}
};

class TracerPoolImpl : public PoolBase<PoolableTracerImpl> {};

} // namespace Nighthawk
