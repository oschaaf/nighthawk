#pragma once

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

} // namespace Nighthawk
