// This test relies on fork(). Somehow the integration test server excepts when running
// under TSAN because of Envoy not being able to find its configuration file with die_after_fork
// disabled. The code below seems to suggest that TSAN doesn't support this scenario.
// https://github.com/llvm-mirror/compiler-rt/blob/master/lib/tsan/rtl/tsan_interceptors.cc#L999
// Further root cause analysis is not worth it at this point, because this code will be deprecated
// soon in favor of either https://github.com/envoyproxy/nighthawk/pull/60 or moving this end-to-end
// testing to python.
// Thus we just disable this test when we detect we are running under TSAN.
#ifndef __has_feature
#define __has_feature(x) 0 // Compatibility with non-clang compilers.
#endif
#if defined(__has_feature) && !__has_feature(thread_sanitizer)

#include <chrono>

#include "common/api/api_impl.h"
#include "common/common/thread_impl.h"
#include "common/filesystem/filesystem_impl.h"

#include "client/client.h"
#include "client/factories_impl.h"
#include "client/options_impl.h"

#include "test/client/utility.h"
#include "test/mocks.h"
#include "test/mocks/event/mocks.h"
#include "test/mocks/stats/mocks.h"
#include "test/server/utility.h"
#include "test/test_common/test_integration_server.h"
#include "test/test_common/utility.h"

#include "gtest/gtest.h"

using namespace std::chrono_literals;
using namespace testing;

namespace Nighthawk {
namespace Client {

class HttpClientTest : public HttpTestIntegrationServer {};
class HttpsClientTest : public HttpTestIntegrationServer {};

INSTANTIATE_TEST_SUITE_P(IpVersions, HttpClientTest,
                         ValuesIn(Envoy::TestEnvironment::getIpVersionsForTest()),
                         Envoy::TestUtility::ipTestParamsToString);

TEST_P(HttpClientTest, NormalRun) {
  Main program(Nighthawk::Client::TestUtility::createOptionsImpl(
      fmt::format("foo --address-family {} --duration 2 --rps 10 {}",
                  getAddressFamilyOptionString(), testUrl())));
  EXPECT_TRUE(program.run());
}

INSTANTIATE_TEST_SUITE_P(IpVersions, HttpsClientTest,
                         ValuesIn(Envoy::TestEnvironment::getIpVersionsForTest()),
                         Envoy::TestUtility::ipTestParamsToString);

TEST_P(HttpsClientTest, NormalRun) {
  Main program(Nighthawk::Client::TestUtility::createOptionsImpl(
      fmt::format("foo --address-family {} --duration 2 --rps 10 {}",
                  getAddressFamilyOptionString(), testUrl())));
  EXPECT_TRUE(program.run());
}

TEST_P(HttpClientTest, AutoConcurrencyRun) {
  std::vector<const char*> argv;
  argv.push_back("foo");
  argv.push_back("--concurrency");
  argv.push_back("auto");
  argv.push_back("--address-family");
  argv.push_back(getAddressFamilyOptionString());
  argv.push_back("--duration");
  argv.push_back("1");
  argv.push_back("--rps");
  argv.push_back("1");
  argv.push_back("--verbosity");
  argv.push_back("error");
  std::string url = testUrl();
  argv.push_back(url.c_str());

  Main program(argv.size(), argv.data());
  EXPECT_TRUE(program.run());
}

TEST_P(HttpClientTest, BadRun) {
  Main program(Nighthawk::Client::TestUtility::createOptionsImpl(
      fmt::format("foo --address-family {} --duration 1 --rps 1 https://unresolveable.host/",
                  getAddressFamilyOptionString())));
  EXPECT_FALSE(program.run());
}

} // namespace Client
} // namespace Nighthawk

#endif