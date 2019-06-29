#include "common/tracer_impl.h"

namespace Nighthawk {

TracerPoolImpl::~TracerPoolImpl() {
  // Clear the pool.
  while (!pool_.empty()) {
    Tracer* tracer = pool_.top().get();
    ASSERT(!tracer->in_flight());
    all_.erase(std::remove(all_.begin(), all_.end(), tracer), all_.end());
    pool_.pop();
  }
  // Mark the in-flight tracers as orphaned.
  for (auto tracer : all_) {
    ASSERT(tracer->in_flight());
    tracer->orphan();
  }
}

TracerPtr TracerPoolImpl::get() {
  if (pool_.empty()) {
    growPool();
  }
  // We pass a custom deleter, which will recycle the tracer or delete
  // it when it is orphaned.
  TracerPtr tracer(pool_.top().release(), [this](Tracer* tracer) {
    if (!tracer->orphaned()) {
      recycleElement(std::unique_ptr<Tracer>(tracer));
    } else {
      delete tracer;
    }
  });
  pool_.pop();
  tracer->set_in_flight(true);
  return tracer;
}

void TracerPoolImpl::growPool() {
  // Probably want to allocate more in one go, but this now is more about interface
  // and using a pool in general than the details.
  pool_.emplace(std::make_unique<TracerImpl>(time_source_));
  all_.push_back(pool_.top().get());
}

void TracerPoolImpl::recycleElement(std::unique_ptr<Tracer> tracer) {
  tracer->set_in_flight(false);
  pool_.push(std::move(tracer));
}

} // namespace Nighthawk
