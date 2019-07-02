#pragma once

#include "envoy/common/pure.h"
#include "envoy/common/time.h"

#include "nighthawk/common/poolable.h"

namespace Nighthawk {

class Tracer {
public:
  virtual ~Tracer() = default;
  virtual void traceTime() PURE;
};

} // namespace Nighthawk
