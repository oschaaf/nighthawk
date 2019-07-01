#pragma once

#include <functional>
#include <iostream>
#include <memory>
#include <stack>
#include <vector>

#include "common/common/assert.h"
#include "nighthawk/common/poolable.h"

namespace Nighthawk {

class PoolableImpl : public Poolable {
public:
  void set_in_flight(bool in_flight) override { in_flight_ = in_flight; }
  bool in_flight() const override { return in_flight_; };
  void orphan() override {
    ASSERT(!orphaned_);
    orphaned_ = true;
  };
  bool orphaned() const override { return orphaned_; };

private:
  bool in_flight_{false};
  bool orphaned_{false};
};

} // namespace Nighthawk
