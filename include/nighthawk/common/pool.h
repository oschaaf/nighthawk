#pragma once

#include "nighthawk/common/poolable.h"

namespace Nighthawk {

using poolDeletionDelegate = std::function<void(Poolable*)>;

class Pool {
public:
  using PoolablePtr = std::unique_ptr<Poolable, poolDeletionDelegate>;
  virtual ~Pool() = default;
  virtual void addPoolable(std::unique_ptr<Poolable> poolable) PURE;
  virtual PoolablePtr get() PURE;
  virtual size_t available() const PURE;
  virtual size_t allocated() const PURE;
};

using PoolPtr = std::unique_ptr<Pool>;

} // namespace Nighthawk
