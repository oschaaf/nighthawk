#pragma once

#include "envoy/common/pure.h"
#include "envoy/common/time.h"

namespace Nighthawk {

class Poolable {
public:
  virtual ~Poolable() = default;
  virtual void set_in_flight(bool in_flight) PURE;
  virtual bool in_flight() const PURE;
  virtual void orphan() PURE;
  virtual bool orphaned() const PURE;
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
    // Mark the in-flight tracers as orphaned.
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
        delete poolable;
      }
    });
    pool_.pop();
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

// TODO(oschaaf): consider extracting a poolable mix-in interface.
class Tracer : public Poolable {
public:
  virtual ~Tracer() = default;

  virtual void traceTime() PURE;
}; // namespace Nighthawk

typedef std::unique_ptr<Tracer, std::function<void(Tracer*)>> TracerPtr;

class TracerPool : public PoolBase<Tracer> {
public:
  virtual ~TracerPool() = default;
};

typedef std::unique_ptr<TracerPool> TracerPoolPtr;

} // namespace Nighthawk
