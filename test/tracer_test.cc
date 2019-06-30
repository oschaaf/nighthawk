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
  TracerPoolPtr pool = std::make_unique<TracerPoolImpl>(time_system_);
  EXPECT_EQ(0, pool->allocated());
  pool->addPoolable(std::make_unique<TracerImpl>(time_system_));
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
  TracerPoolPtr pool = std::make_unique<TracerPoolImpl>(time_system_);
  pool->addPoolable(std::make_unique<TracerImpl>(time_system_));
  auto tracer = pool->get();
  pool.reset();
}

} // namespace Nighthawk
