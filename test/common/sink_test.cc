#include "external/envoy/source/common/common/random_generator.h"

#include "common/sink_impl.h"

#include "gtest/gtest.h"

namespace Nighthawk {
namespace {

// Future sink implementations register here for testing top level generic sink behavior.
using SinkTypes = ::testing::Types<FileSinkImpl>;

template <typename T> class TypedSinkTest : public ::testing::Test {
public:
  void SetUp() override { uuid_ = random_.uuid(); }
  std::string executionIdForTest() const { return uuid_; }

private:
  Envoy::Random::RandomGeneratorImpl random_;
  std::string uuid_;
};

TYPED_TEST_SUITE(TypedSinkTest, SinkTypes);

TYPED_TEST(TypedSinkTest, BasicSaveAndLoad) {
  FileSinkImpl sink;
  nighthawk::client::ExecutionResponse result_to_store;
  *(result_to_store.mutable_execution_id()) = this->executionIdForTest();
  absl::Status status = sink.StoreExecutionResultPiece(result_to_store);
  EXPECT_EQ(status.ok(), true);
  const auto status_or_execution_responses = sink.LoadExecutionResult(this->executionIdForTest());
  ASSERT_EQ(status_or_execution_responses.ok(), true);
  ASSERT_EQ(status_or_execution_responses.value().size(), 1);
  EXPECT_EQ(this->executionIdForTest(), status_or_execution_responses.value()[0].execution_id());
}

TYPED_TEST(TypedSinkTest, Append) {
  FileSinkImpl sink;
  nighthawk::client::ExecutionResponse result_to_store;
  *(result_to_store.mutable_execution_id()) = this->executionIdForTest();
  absl::Status status = sink.StoreExecutionResultPiece(result_to_store);
  EXPECT_EQ(status.ok(), true);
  status = sink.StoreExecutionResultPiece(result_to_store);
  EXPECT_EQ(status.ok(), true);
  const auto status_or_execution_responses = sink.LoadExecutionResult(this->executionIdForTest());
  EXPECT_EQ(status_or_execution_responses.value().size(), 2);
}

TYPED_TEST(TypedSinkTest, MultiPart) {}

TYPED_TEST(TypedSinkTest, BadId) {}

TYPED_TEST(TypedSinkTest, CorruptedFile) {}

} // namespace
} // namespace Nighthawk
