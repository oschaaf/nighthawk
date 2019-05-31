#pragma once

#include <chrono>

// TODO(oschaaf): clean this and the deps up.
#include "exe/process_wide.h"

#include "test/integration/http_integration.h"
#include "test/integration/integration.h"
#include "test/integration/utility.h"
#include "test/mocks/event/mocks.h"
#include "test/mocks/stats/mocks.h"
#include "gtest/gtest.h"

using namespace std::chrono_literals;
using namespace testing;

namespace Nighthawk {
namespace Client {

// TODO(oschaaf): Use Envoy::ProcesWide. Move implementation to .cc
class HttpTestIntegrationServer : public TestWithParam<Envoy::Network::Address::IpVersion> {
public:
  HttpTestIntegrationServer(bool https = false) : https_(https) {}

  void SetUp() override;
  void TearDown() override;

  std::string testUrl();
  const char* getAddressFamilyOptionString();

  int port_;
  bool https_;
  FILE* test_server_process_pipe_;
  Envoy::ProcessWide process_wide_;
};

class HttpsTestIntegrationServer : HttpTestIntegrationServer {
public:
  HttpsTestIntegrationServer() : HttpTestIntegrationServer(true) {}
};

} // namespace Client
} // namespace Nighthawk
