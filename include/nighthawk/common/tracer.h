#pragma once

#include "envoy/common/pure.h"
#include "envoy/common/time.h"

namespace Nighthawk {

class Tracer {
public:
  virtual ~Tracer() = default;
  virtual void traceTime() PURE;
};

} // namespace Nighthawk
