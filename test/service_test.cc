#include <chrono>

#include "nighthawk/common/exception.h"

#include "test/mocks.h"

#include "gtest/gtest.h"

#include "test/mocks/upstream/mocks.h"

#include <grpc++/grpc++.h>

#include "test/test_common/environment.h"
#include "test/test_common/network_utility.h"

#include "api/client/service.pb.h"
#include "client/service_impl.h"
#include "common/grpc/async_client_impl.h"

using namespace std::chrono_literals;
using namespace testing;

namespace Nighthawk {
namespace Client {

class ServiceTest : public TestWithParam<Envoy::Network::Address::IpVersion> {
public:
  void SetUp() override {
    grpc::ServerBuilder builder;
    int grpc_server_port = 0;
    const std::string loopback_address =
        Envoy::Network::Test::getLoopbackAddressUrlString(GetParam());

    builder.AddListeningPort(fmt::format("{}:0", loopback_address),
                             grpc::InsecureServerCredentials(), &grpc_server_port);
    builder.RegisterService(&service_);
    server_ = builder.BuildAndStart();
    channel_ = grpc::CreateChannel(fmt::format("{}:{}", loopback_address, grpc_server_port),
                                   grpc::InsecureChannelCredentials());
  }

  void TearDown() override { server_->Shutdown(); }

  ServiceImpl service_;
  std::unique_ptr<grpc::Server> server_;
  std::shared_ptr<grpc::Channel> channel_;
  grpc::ClientContext context_;
};

INSTANTIATE_TEST_SUITE_P(IpVersions, ServiceTest,
                         ValuesIn(Envoy::TestEnvironment::getIpVersionsForTest()),
                         Envoy::TestUtility::ipTestParamsToString);

TEST_P(ServiceTest, QueueSessionBasic) {
  nighthawk::client::NighthawkService::Stub stub(channel_);
  nighthawk::client::QueueSessionRequest request;
  nighthawk::client::QueueSessionResponse response;
  grpc::Status status = stub.QueueSession(&context_, request, &response);
  std::cerr << response.DebugString();
  EXPECT_TRUE(status.ok());
}

} // namespace Client
} // namespace Nighthawk
