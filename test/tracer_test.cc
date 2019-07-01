#include <chrono>

#include "common/tracer_impl.h"

#include "gtest/gtest.h"

#include "test/test_common/simulated_time_system.h"

using namespace testing;

namespace Nighthawk {

class TracerTest : public testing::Test {
public:
  Envoy::Event::SimulatedTimeSystem time_system_;
};

TEST_F(TracerTest, Happy) {
  auto pool = std::make_unique<TracerPoolImpl>();
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

TEST_F(TracerTest, Dangling) {
  auto pool = std::make_unique<TracerPoolImpl>();
  pool->addPoolable(std::make_unique<PoolableTracerImpl>(time_system_));
  auto tracer = pool->get();
  pool.reset();
}

TEST_F(TracerTest, HappyNewPoolable) {
  PoolPtr pool = std::make_unique<NewPoolBase>();

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

} // namespace Nighthawk
