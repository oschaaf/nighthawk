#include <chrono>

#include "nighthawk/common/exception.h"

#include "test/mocks.h"

#include "gtest/gtest.h"

#include <grpc++/grpc++.h>

#include "api/client/service.pb.h"
#include "client/service_impl.h"

using namespace std::chrono_literals;
using namespace testing;

namespace Nighthawk {
namespace Client {

class ServiceTest : public Test {

  void SetUp() override {
    grpc::ServerBuilder builder;
    builder.AddListeningPort("127.0.0.1:0", grpc::InsecureServerCredentials(), &grpc_server_port_);
    builder.RegisterService(&service_);
    server_ = builder.BuildAndStart();
  }

  void TearDown() override { server_->Shutdown(); }

  int grpc_server_port_{0};
  ServiceImpl service_;
  std::unique_ptr<grpc::Server> server_;
};

TEST_F(ServiceTest, TestA) {}
TEST_F(ServiceTest, TestB) {}
TEST_F(ServiceTest, TestC) {}

} // namespace Client
} // namespace Nighthawk
