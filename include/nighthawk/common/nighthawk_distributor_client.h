#pragma once
#include "envoy/common/pure.h"

#include "external/envoy/source/common/common/statusor.h"
#include "external/envoy/source/common/protobuf/protobuf.h"

#include "api/client/options.pb.h"
#include "api/client/service.grpc.pb.h"

namespace Nighthawk {

class NighthawkDistributorClient {
public:
  virtual ~NighthawkDistributorClient() = default;

  virtual absl::StatusOr<::nighthawk::client::DistributedResponse> DistributedRequest(
      nighthawk::client::NighthawkDistributor::StubInterface& nighthawk_distributor_stub,
      const nighthawk::client::DistributedRequest& distributed_request) const PURE;
};

} // namespace Nighthawk
