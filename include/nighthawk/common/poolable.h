#pragma once

#include "envoy/common/pure.h"

namespace Nighthawk {

class Poolable {
public:
  virtual ~Poolable() = default;
  virtual void set_in_flight(bool in_flight) PURE;
  virtual bool in_flight() const PURE;
  virtual void orphan() PURE;
  virtual bool orphaned() const PURE;
};

} // namespace Nighthawk
