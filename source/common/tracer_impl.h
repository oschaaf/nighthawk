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
  friend class TracerPoolImpl;
  Envoy::TimeSource& time_source_;
  std::vector<Envoy::MonotonicTime> trace_points_;
  bool in_flight_{false};
  bool orphaned_{false};
};

class TracerPoolImpl : public TracerPool {
public:
  TracerPoolImpl(Envoy::TimeSource& time_source) : time_source_(time_source) {}
  ~TracerPoolImpl() override {
    // Clear the pool.
    while (!pool_.empty()) {
      Tracer* tracer = pool_.top().get();
      ASSERT(!tracer->in_flight());
      all_.erase(std::remove(all_.begin(), all_.end(), tracer), all_.end());
      pool_.pop();
    }
    // Mark the in-flight tracers as orphaned.
    for (auto tracer : all_) {
      ASSERT(tracer->in_flight());
      tracer->orphan();
    }
  }

  TracerPtr get() override {
    if (pool_.empty()) {
      growPool();
    }
    TracerPtr tracer(pool_.top().release(), [this](Tracer* tracer) {
      if (!tracer->orphaned()) {
        recycleElement(std::unique_ptr<Tracer>(tracer));
      } else {
        delete tracer;
      }
    });
    pool_.pop();
    tracer->set_in_flight(true);
    return tracer;
  }

private:
  void growPool() {
    pool_.emplace(std::make_unique<TracerImpl>(time_source_));
    all_.push_back(pool_.top().get());
  }

  void recycleElement(std::unique_ptr<Tracer> tracer) {
    tracer->set_in_flight(false);
    pool_.push(std::move(tracer));
  }
  std::stack<std::unique_ptr<Tracer>> pool_;
  std::vector<Tracer*> all_;
  Envoy::TimeSource& time_source_;
};

} // namespace Nighthawk
