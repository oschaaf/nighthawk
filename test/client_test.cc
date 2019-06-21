#include <chrono>

#include "client/client.h"

#include "test/client/utility.h"
#include "test/test_common/environment.h"
#include "test/test_common/utility.h"

#include "gtest/gtest.h"

using namespace std::chrono_literals;
using namespace testing;

namespace Nighthawk {
namespace Client {

class ClientTest : public testing::Test {};

// TODO(oschaaf): revisit this, and improve testability of the Main
// class, so we can mock its dependencies.
// We now have integration tests covering this much better.
TEST_F(ClientTest, NormalRun) {
  Main program(Nighthawk::Client::TestUtility::createOptionsImpl(
      "foo --duration 1 --rps 10 http://localhost:63657/"));
  EXPECT_TRUE(program.run());
}

TEST_F(ClientTest, AutoConcurrencyRun) {
  std::vector<const char*> argv;
  argv.push_back("foo");
  argv.push_back("--concurrency");
  argv.push_back("auto");
  argv.push_back("--duration");
  argv.push_back("1");
  argv.push_back("--rps");
  argv.push_back("1");
  argv.push_back("--verbosity");
  argv.push_back("error");
  argv.push_back("http://localhost:63657/");
  Main program(argv.size(), argv.data());
  EXPECT_TRUE(program.run());
}

TEST_F(ClientTest, BadRun) {
  Main program(Nighthawk::Client::TestUtility::createOptionsImpl(
      "foo --duration 1 --rps 1 https://unresolveable.host/"));
  EXPECT_FALSE(program.run());
}

// TODO(oschaaf): XXX port to python integration test & deprecate
TEST_F(ClientTest, CipherSuiteSelection) {
  // This is just a PoC, and has been manually verified to work; the statistic-counters show the
  // expected ciphers are used.
  Main program_128(Nighthawk::Client::TestUtility::createOptionsImpl(
      R"CFG(foo --pool-options {tls_context:{common_tls_context:{tls_params:{cipher_suites:["-ALL:ECDHE-RSA-AES128-SHA"]}}}} --rps 1 --concurrency 1 --output-format yaml --duration 1 https://www.microsoft.com/ )CFG"));
  EXPECT_TRUE(program_128.run());

  Main program_256(Nighthawk::Client::TestUtility::createOptionsImpl(
      R"CFG(foo --pool-options {tls_context:{common_tls_context:{tls_params:{cipher_suites:["-ALL:ECDHE-RSA-AES256-GCM-SHA384"]}}}} --rps 1 --concurrency 1 --output-format yaml --duration 1 https://www.microsoft.com/ )CFG"));
  EXPECT_TRUE(program_256.run());
}

} // namespace Client
} // namespace Nighthawk
