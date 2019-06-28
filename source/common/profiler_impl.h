// Copyright 2018 The Bazel Authors. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
#pragma once

#include "common/common/assert.h"
#include "envoy/common/pure.h"
#include "envoy/common/time.h"
#include <functional>
#include <memory>
#include <stack>
#include <vector>

namespace Nighthawk {

class Tracer {
public:
  virtual ~Tracer() = default;
  virtual void traceTime() PURE;
};

class TracerImpl : public Tracer {
public:
  TracerImpl(Envoy::TimeSource& time_source) : time_source_(time_source) {}
  void traceTime() override { trace_points_.push_back(time_source_.monotonicTime()); }

private:
  Envoy::TimeSource& time_source_;
  std::vector<Envoy::MonotonicTime> trace_points_;
};

typedef std::unique_ptr<Tracer, std::function<void(Tracer*)>> TracerPtr;

class TracerPool {
public:
  virtual ~TracerPool() = default;
  virtual TracerPtr get() PURE;
  virtual bool isEmpty() const PURE;
  virtual size_t size() const PURE;
};

class TracerPoolImpl : public TracerPool {
public:
  TracerPtr get() override {
    ASSERT(!pool_.empty());
    TracerPtr tmp(pool_.top().release(),
                  [this](Tracer* tracer) { recycleElement(std::unique_ptr<Tracer>(tracer)); });
    pool_.pop();
    return tmp;
  }

  bool isEmpty() const override { return pool_.empty(); }

  size_t size() const override { return pool_.size(); }

private:
  void recycleElement(std::unique_ptr<Tracer> tracer) { pool_.push(std::move(tracer)); }
  std::stack<std::unique_ptr<Tracer>> pool_;
};

} // namespace Nighthawk
