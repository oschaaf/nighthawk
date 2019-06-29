#pragma once

#include <functional>
#include <iostream>
#include <memory>
#include <stack>
#include <vector>

#include "common/common/assert.h"
#include "envoy/common/pure.h"
#include "envoy/common/time.h"

namespace Nighthawk {

class Tracer {
public:
  virtual ~Tracer() = default;
  virtual void traceTime() PURE;
  virtual void set_in_flight(bool in_flight) PURE;
  virtual bool in_flight() const PURE;
  virtual void orphan() PURE;
  virtual bool orphaned() const PURE;
};

typedef std::unique_ptr<Tracer, std::function<void(Tracer*)>> TracerPtr;

class TracerPool {
public:
  virtual ~TracerPool() = default;
  virtual TracerPtr get() PURE;
};

typedef std::unique_ptr<TracerPool> TracerPoolPtr;

class TracerImpl : public Tracer {
public:
  TracerImpl(Envoy::TimeSource& time_source) : time_source_(time_source) {}
  ~TracerImpl() override {
    std::cerr << "deleted tracer " << this << " " << this->orphaned() << std::endl;
  }
  void traceTime() override { trace_points_.push_back(time_source_.monotonicTime()); }
  void set_in_flight(bool in_flight) override { in_flight_ = in_flight; }
  bool in_flight() const override { return in_flight_; };
  void orphan() override { orphaned_ = true; };
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
    for (auto tracer : all_) {
      std::cerr << "orphaned tracer " << tracer << std::endl;
      tracer->orphan();
    }
    std::cerr << "destroy pool" << std::endl;
  }

  TracerPtr get() override {
    if (pool_.empty()) {
      growPool();
    }
    TracerPtr tmp(pool_.top().release(), [this](Tracer* tracer) {
      if (!tracer->orphaned()) {
        recycleElement(std::unique_ptr<Tracer>(tracer));
      } else {
        delete tracer;
      }
    });
    pool_.pop();
    tmp->set_in_flight(false);
    std::cerr << "return {}" << tmp.get() << std::endl;
    return tmp;
  }

private:
  void growPool() {
    std::cerr << "alloc" << std::endl;
    pool_.emplace(std::make_unique<TracerImpl>(time_source_));
    all_.push_back(pool_.top().get());
  }

  void recycleElement(std::unique_ptr<Tracer> tracer) {
    std::cerr << "recycle {}" << tracer.get() << std::endl;
    tracer->set_in_flight(false);
    pool_.push(std::move(tracer));
  }
  std::stack<std::unique_ptr<Tracer>> pool_;
  std::vector<Tracer*> all_;
  Envoy::TimeSource& time_source_;
};

} // namespace Nighthawk
