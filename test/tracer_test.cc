#include <chrono>

#include "common/pool_impl.h"
#include "common/poolable_impl.h"
#include "common/tracer_impl.h"

#include "test/test_common/simulated_time_system.h"

#include "gtest/gtest.h"

using namespace testing;

namespace Nighthawk {

class TracerTest : public testing::Test {
public:
  Envoy::Event::SimulatedTimeSystem time_system_;
};

} // namespace Nighthawk
