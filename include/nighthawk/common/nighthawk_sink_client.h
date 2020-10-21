#pragma once
#include "envoy/common/pure.h"

#include "external/envoy/source/common/common/statusor.h"
#include "external/envoy/source/common/protobuf/protobuf.h"

#include "api/client/options.pb.h"
#include "api/client/service.grpc.pb.h"

namespace Nighthawk {

class NighthawkSinkClient {
public:
  virtual ~NighthawkSinkClient() = default;

  virtual absl::Status ForwardExecutionResponse(
      nighthawk::client::NighthawkSink::StubInterface* nighthawk_sink_stub,
      const nighthawk::client::ExecutionResponse& execution_response) const PURE;
};

} // namespace Nighthawk
