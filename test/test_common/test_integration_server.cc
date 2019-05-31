#include "test/test_common/test_integration_server.h"

#include <chrono>

#include "gtest/gtest.h"

using namespace std::chrono_literals;
using namespace testing;

namespace Nighthawk {
namespace Client {

void HttpTestIntegrationServer::SetUp() {
  const std::string python = "/usr/bin/python3";
  std::string command = fmt::format(
      "{} {} {} {}", python,
      TestEnvironment::runfilesPath(std::string("test/test_tools/test_server.py")),
      Envoy::Network::Test::getLoopbackAddressUrlString(GetParam()), https_ ? "https" : "http");
  std::cerr << command << std::endl;

  test_server_process_pipe_ = popen(command.c_str(), "r");
  RELEASE_ASSERT(test_server_process_pipe_ != nullptr, "Failed to start test server");
  std::string result;
  std::array<char, 10> buffer;
  RELEASE_ASSERT(fgets(buffer.data(), buffer.size(), test_server_process_pipe_) != nullptr,
                 "Failed to read test server output");
  result += buffer.data();
  port_ = std::stoi(result);
}

void HttpTestIntegrationServer::TearDown() {
  const std::string shutdown_command = fmt::format("curl --insecure {}shutdown", testUrl());
  std::system(shutdown_command.c_str());
  RELEASE_ASSERT(pclose(test_server_process_pipe_) == 0, "Test server did not exit cleanly.");
}

std::string HttpTestIntegrationServer::testUrl() {
  const std::string address = Envoy::Network::Test::getLoopbackAddressUrlString(GetParam());
  return fmt::format("http{}://{}:{}/", https_ ? "s" : "", address, port_);
}

const char* HttpTestIntegrationServer::getAddressFamilyOptionString() {
  auto ip_version = GetParam();
  RELEASE_ASSERT(ip_version == Envoy::Network::Address::IpVersion::v4 ||
                     ip_version == Envoy::Network::Address::IpVersion::v6,
                 "bad ip version");
  return ip_version == Envoy::Network::Address::IpVersion::v6 ? "v6" : "v4";
}

} // namespace Client
} // namespace Nighthawk
