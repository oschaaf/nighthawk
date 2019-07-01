#pragma once

#include "nighthawk/common/poolable.h"

namespace Nighthawk {

class Pool {
public:
  using PoolablePtr = std::unique_ptr<Poolable, std::function<void(Poolable*)>>;
  virtual ~Pool() = default;
  virtual void addPoolable(std::unique_ptr<Poolable> poolable) PURE;
  virtual PoolablePtr get() PURE;
  virtual size_t available() const PURE;
  virtual size_t allocated() const PURE;
};

typedef std::unique_ptr<Pool> PoolPtr;

class NewPoolBase : public Pool {
public:
  virtual ~NewPoolBase() override {
    while (!pool_.empty()) {
      Poolable* poolable = pool_.top().get();
      ASSERT(!poolable->in_flight());
      all_.erase(std::remove(all_.begin(), all_.end(), poolable), all_.end());
      pool_.pop();
    }
    // Inform the in-flight poolables that they are own their own now.
    for (auto poolable : all_) {
      ASSERT(poolable->in_flight());
      poolable->orphan();
    }
  }

  void addPoolable(std::unique_ptr<Poolable> poolable) override {
    poolable->set_in_flight(false);
    all_.push_back(poolable.get());
    pool_.push(std::move(poolable));
  }

  PoolablePtr get() override {
    if (pool_.empty()) {
      throw;
    }

    PoolablePtr poolable(pool_.top().release(), [this](Poolable* poolable) {
      if (!poolable->orphaned()) {
        recyclePoolable(std::unique_ptr<Poolable>(poolable));
      } else {
        // The pool is gone, we must self-destruct.
        delete poolable;
      }
    });

    pool_.pop();
    ASSERT(!poolable->in_flight());
    poolable->set_in_flight(true);
    return poolable;
  }

  size_t available() const override { return pool_.size(); }
  size_t allocated() const override { return all_.size(); }

private:
  void recyclePoolable(std::unique_ptr<Poolable> poolable) {
    poolable->set_in_flight(false);
    pool_.push(std::move(poolable));
  }

  std::stack<std::unique_ptr<Poolable>> pool_;
  std::vector<Poolable*> all_;
};

template <class T> class PoolBase {
public:
  using PoolablePtr = std::unique_ptr<T, std::function<void(T*)>>;
  PoolBase() {
    static_assert(std::is_base_of<Poolable, T>::value,
                  "Type parameter of this class must implement Poolable");
  }
  virtual ~PoolBase() {
    while (!pool_.empty()) {
      Poolable* poolable = pool_.top().get();
      ASSERT(!poolable->in_flight());
      all_.erase(std::remove(all_.begin(), all_.end(), poolable), all_.end());
      pool_.pop();
    }
    // Inform the in-flight poolables that they are own their own now.
    for (auto poolable : all_) {
      ASSERT(poolable->in_flight());
      poolable->orphan();
    }
  }

  void addPoolable(std::unique_ptr<T> poolable) {
    poolable->set_in_flight(false);
    all_.push_back(poolable.get());
    pool_.push(std::move(poolable));
  }

  PoolablePtr get() {
    if (pool_.empty()) {
      throw;
    }

    PoolablePtr poolable(pool_.top().release(), [this](T* poolable) {
      if (!poolable->orphaned()) {
        recyclePoolable(std::unique_ptr<T>(poolable));
      } else {
        // The pool is gone, we must self-destruct.
        delete poolable;
      }
    });
    pool_.pop();
    ASSERT(!poolable->in_flight());
    poolable->set_in_flight(true);
    return std::move(poolable);
  }

  size_t available() { return pool_.size(); }
  size_t allocated() { return all_.size(); }

private:
  void recyclePoolable(std::unique_ptr<T> poolable) {
    poolable->set_in_flight(false);
    pool_.push(std::move(poolable));
  }

  std::stack<std::unique_ptr<T>> pool_;
  std::vector<T*> all_;
};

} // namespace Nighthawk
