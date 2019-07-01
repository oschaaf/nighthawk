#pragma once

#include "nighthawk/common/pool.h"
#include "nighthawk/common/poolable.h"

namespace Nighthawk {

class PoolImpl : public Pool {
public:
  virtual ~PoolImpl() override {
    while (!pool_.empty()) {
      Poolable* poolable = pool_.top().get();
      all_.erase(std::remove(all_.begin(), all_.end(), poolable), all_.end());
      pool_.pop();
    }
    // Inform the in-flight poolables that they are own their own now.
    for (auto poolable : all_) {
      poolable->orphan();
    }
  }

  void addPoolable(std::unique_ptr<Poolable> poolable) override {
    all_.push_back(poolable.get());
    pool_.push(std::move(poolable));
  }

  PoolablePtr get() override {
    if (pool_.empty()) {
      throw;
    }
    PoolablePtr poolable(pool_.top().release(),
                         [this](Poolable* poolable) { recyclePoolable(poolable); });
    pool_.pop();
    return poolable;
  }

  size_t available() const override { return pool_.size(); }
  size_t allocated() const override { return all_.size(); }

private:
  void recyclePoolable(Poolable* poolable) {
    if (!poolable->orphaned()) {
      pool_.push(std::unique_ptr<Poolable>(poolable));
    } else {
      // The pool is gone, we must self-destruct.
      delete poolable;
    }
  }

  std::stack<std::unique_ptr<Poolable>> pool_;
  std::vector<Poolable*> all_;
};

} // namespace Nighthawk
