#include <chrono>

#include "common/tracer_impl.h"

#include "gtest/gtest.h"

#include "test/test_common/simulated_time_system.h"

#include "common/pool_impl.h"
#include "common/poolable_impl.h"

using namespace testing;

namespace Nighthawk {

class PoolTest : public testing::Test {
public:
  Envoy::Event::SimulatedTimeSystem time_system_;
};

class TracerPoolImpl : public PoolImpl<TracerImpl> {};

TEST_F(PoolTest, HappyPoolImpl) {
  auto pool = std::make_unique<TracerPoolImpl>();
  EXPECT_EQ(0, pool->allocated());
  pool->addPoolable(std::make_unique<TracerImpl>(time_system_));
  EXPECT_EQ(1, pool->allocated());
  EXPECT_EQ(1, pool->available());
  auto tracer = pool->get();
  tracer->traceTime();
  EXPECT_EQ(1, pool->allocated());
  EXPECT_EQ(0, pool->available());
  tracer.reset();
  EXPECT_EQ(1, pool->allocated());
  EXPECT_EQ(1, pool->available());
}

TEST_F(PoolTest, DanglingPoolImpl) {
  auto pool = std::make_unique<TracerPoolImpl>();
  pool->addPoolable(std::make_unique<TracerImpl>(time_system_));
  auto tracer = pool->get();
  pool.reset();
}

} // namespace Nighthawk
