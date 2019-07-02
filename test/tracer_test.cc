#include <chrono>

#include "common/tracer_impl.h"

#include "gtest/gtest.h"

#include "test/test_common/simulated_time_system.h"

#include "common/pool_impl.h"
#include "common/poolable_impl.h"

using namespace testing;

namespace Nighthawk {

class TracerTest : public testing::Test {
public:
  Envoy::Event::SimulatedTimeSystem time_system_;
};

TEST_F(TracerTest, HappyPoolImpl) {}

TEST_F(TracerTest, DanglingPoolImpl) {}

} // namespace Nighthawk
