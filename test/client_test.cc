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
#include "test/integration/http_integration.h"
#include "test/integration/integration.h"
#include "test/integration/utility.h"
#include "test/mocks.h"
#include "test/mocks/event/mocks.h"
#include "test/mocks/stats/mocks.h"
#include "test/server/utility.h"
#include "test/test_common/utility.h"

#include "gtest/gtest.h"

using namespace std::chrono_literals;
using namespace testing;

namespace Nighthawk {
namespace Client {

class ClientTest : public TestWithParam<Envoy::Network::Address::IpVersion> {
public:
  ClientTest() {}

  void SetUp() override {
    Envoy::Event::Libevent::Global::initialize();

    const std::string python = "/usr/bin/python3 ";
    std::string command =
        python + TestEnvironment::runfilesPath(
                     std::string("test/test_data/test_server.py " +
                                 Envoy::Network::Test::getLoopbackAddressUrlString(GetParam())));

    test_server_process_pipe_ = popen(command.c_str(), "r");
    RELEASE_ASSERT(test_server_process_pipe_ != nullptr, "Failed to start test server");
    std::string result;
    std::array<char, 10> buffer;
    RELEASE_ASSERT(fgets(buffer.data(), buffer.size(), test_server_process_pipe_) != NULL,
                   "Failed to read test server output");
    result += buffer.data();
    port_ = std::stoi(result);
  }

  void TearDown() override {
    const std::string shutdown_command = fmt::format("curl --insecure {}shutdown", testUrl());
    std::system(shutdown_command.c_str());
    RELEASE_ASSERT(pclose(test_server_process_pipe_) == 0, "Test server did not exit cleanly.");
    ares_library_cleanup();
  }

  std::string testUrl() {
    const std::string address = Envoy::Network::Test::getLoopbackAddressUrlString(GetParam());
    return fmt::format("https://{}:{}/", address, port_);
  }

  const char* getAddressFamilyOptionString() {
    auto ip_version = GetParam();
    RELEASE_ASSERT(ip_version == Envoy::Network::Address::IpVersion::v4 ||
                       ip_version == Envoy::Network::Address::IpVersion::v6,
                   "bad ip version");
    return ip_version == Envoy::Network::Address::IpVersion::v6 ? "v6" : "v4";
  }

  int port_;
  FILE* test_server_process_pipe_;
};

INSTANTIATE_TEST_SUITE_P(IpVersions, ClientTest,
                         ValuesIn(Envoy::TestEnvironment::getIpVersionsForTest()),
                         Envoy::TestUtility::ipTestParamsToString);

TEST_P(ClientTest, NormalRun) {
  Main program(Nighthawk::Client::TestUtility::createOptionsImpl(
      fmt::format("foo --address-family {} --duration 2 --rps 10 {}",
                  getAddressFamilyOptionString(), testUrl())));
  EXPECT_TRUE(program.run());
}

TEST_P(ClientTest, AutoConcurrencyRun) {
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

TEST_P(ClientTest, BadRun) {
  Main program(Nighthawk::Client::TestUtility::createOptionsImpl(
      fmt::format("foo --address-family {} --duration 1 --rps 1 https://unresolveable.host/",
                  getAddressFamilyOptionString())));
  EXPECT_FALSE(program.run());
}

} // namespace Client
} // namespace Nighthawk

#endif