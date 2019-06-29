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
  auto tracer = pool->get();
  tracer.reset();
}

TEST_F(TracerTest, Dangling) {
  TracerPoolPtr pool = std::make_unique<TracerPoolImpl>(time_system_);
  auto tracer = pool->get();
  pool.reset();
}

} // namespace Nighthawk
