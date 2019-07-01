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
  void orphan() override {
    ASSERT(!orphaned_);
    orphaned_ = true;
  };
  bool orphaned() const override { return orphaned_; };

private:
  bool orphaned_{false};
};

} // namespace Nighthawk
