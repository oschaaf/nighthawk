#include <chrono>

#include "common/milestone_tracker_impl.h"
#include "common/pool_impl.h"
#include "common/poolable_impl.h"

#include "test/mocks.h"
#include "test/test_common/simulated_time_system.h"

#include "gtest/gtest.h"

using namespace testing;

namespace Nighthawk {

class MockPoolablePoolImpl : public PoolImpl<MockPoolable> {};
class PoolTest : public testing::Test {};

TEST_F(PoolTest, DestructPoolWithoutInFlightPoolables) {
  auto pool = std::make_unique<MockPoolablePoolImpl>();
  EXPECT_EQ(0, pool->allocated());
  pool->addPoolable(std::make_unique<MockPoolable>());
  EXPECT_EQ(1, pool->allocated());
  EXPECT_EQ(1, pool->available());
  auto poolable = pool->get();
  EXPECT_CALL(*poolable, is_orphaned()).WillOnce(Return(false));
  EXPECT_EQ(1, pool->allocated());
  EXPECT_EQ(0, pool->available());
  poolable.reset();
  EXPECT_EQ(1, pool->allocated());
  EXPECT_EQ(1, pool->available());
}

TEST_F(PoolTest, DestructPoolWithInFlightPoolables) {
  auto pool = std::make_unique<MockPoolablePoolImpl>();
  EXPECT_EQ(0, pool->allocated());
  EXPECT_EQ(0, pool->available());

  pool->addPoolable(std::make_unique<MockPoolable>());
  EXPECT_EQ(1, pool->allocated());
  EXPECT_EQ(1, pool->available());

  MockPoolablePoolImpl::PoolablePtr poolable = pool->get();
  EXPECT_EQ(1, pool->allocated());
  EXPECT_EQ(0, pool->available());

  // We will reset the pool, which should cause it to call mark_orphaned() on the in-flight
  // poolable object.
  EXPECT_CALL(*poolable, mark_orphaned());

  // As is_orphaned is set have it return true so it will self destruct on test exit.
  pool.reset();
  EXPECT_CALL(*poolable, is_orphaned()).WillOnce(Return(true));
}

// Compose a poolable milestone for testing a concrete mix-in case.
class PoolableMilestoneTrackerImpl : public MilestoneTrackerImpl, public PoolableImpl {
public:
  PoolableMilestoneTrackerImpl(Envoy::TimeSource& time_source)
      : MilestoneTrackerImpl(time_source) {}
};

// Declare a pool for the poolable milestone
class MilestoneTrackerPoolImpl : public PoolImpl<PoolableMilestoneTrackerImpl> {};

class MilestoneTrackerPoolTest : public testing::Test {
public:
  Envoy::Event::SimulatedTimeSystem time_system_;
};

// Hello world test with a concrete poolable implementing object.
TEST_F(MilestoneTrackerPoolTest, HappyPoolImpl) {
  MilestoneTrackerPoolImpl pool;
  pool.addPoolable(std::make_unique<PoolableMilestoneTrackerImpl>(time_system_));
  auto milestone = pool.get();
  milestone->reset();
}

} // namespace Nighthawk
