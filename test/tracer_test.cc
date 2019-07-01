#include <chrono>

#include "common/tracer_impl.h"

#include "gtest/gtest.h"

#include "test/test_common/simulated_time_system.h"

#include "common/pool_impl.h"
#include "common/poolable_impl.h"

using namespace testing;

namespace Nighthawk {

class PoolableTracerImpl : public PoolableImpl, public TracerImpl {
public:
  PoolableTracerImpl(Envoy::TimeSource& time_source) : TracerImpl(time_source) {}
};

class TracerTest : public testing::Test {
public:
  Envoy::Event::SimulatedTimeSystem time_system_;
};

TEST_F(TracerTest, HappyPoolImpl) {
  PoolPtr pool = std::make_unique<PoolImpl>();

  EXPECT_EQ(0, pool->allocated());
  pool->addPoolable(std::make_unique<PoolableTracerImpl>(time_system_));
  EXPECT_EQ(1, pool->allocated());
  EXPECT_EQ(1, pool->available());
  auto tracer = pool->get();
  EXPECT_EQ(1, pool->allocated());
  EXPECT_EQ(0, pool->available());
  tracer.reset();
  EXPECT_EQ(1, pool->allocated());
  EXPECT_EQ(1, pool->available());
}

TEST_F(TracerTest, DanglingPoolImpl) {
  PoolPtr pool = std::make_unique<PoolImpl>();
  pool->addPoolable(std::make_unique<PoolableTracerImpl>(time_system_));
  auto tracer = pool->get();
  pool.reset();
}

} // namespace Nighthawk
