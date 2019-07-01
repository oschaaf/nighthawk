#pragma once

#include "envoy/common/pure.h"
#include "envoy/common/time.h"

namespace Nighthawk {

class Tracer {
public:
  virtual ~Tracer() = default;
  virtual void traceTime() PURE;
};

class PoolableTracer : public Tracer, public Poolable {
public:
  virtual ~PoolableTracer() = default;
};

typedef std::unique_ptr<Tracer, std::function<void(Tracer*)>> TracerPtr;

} // namespace Nighthawk
