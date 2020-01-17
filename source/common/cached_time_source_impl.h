namespace Nighthawk {

#include "envoy/common/time.h"
#include "envoy/event/dispatcher.h"

/**
 * Time source which caches monotonic time. Intended for usage accross
 * components to get a consistent view of what "now" is during a single event loop cycle accross
 * components as well as minimize system calls.
 * The dispatcher can be used to update the cached time.
 */
class CachedTimeSourceImpl : public Envoy::TimeSource {
public:
  CachedTimeSourceImpl(Envoy::Event::Dispatcher& dispatcher) : dispatcher_(dispatcher) {}
  Envoy::SystemTime systemTime() override { NOT_IMPLEMENTED_GCOVR_EXCL_LINE; };
  Envoy::MonotonicTime monotonicTime() override { return dispatcher_.approximateMonotonicTime(); };

private:
  Envoy::Event::Dispatcher& dispatcher_;
};

} // namespace Nighthawk