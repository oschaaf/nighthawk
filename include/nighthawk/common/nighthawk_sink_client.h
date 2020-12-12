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

  virtual absl::StatusOr<nighthawk::client::StoreExecutionResponse> StoreExecutionResponseStream(
      nighthawk::client::NighthawkSink::StubInterface* nighthawk_sink_stub,
      const nighthawk::client::StoreExecutionRequest& store_execution_request) const PURE;

  virtual absl::StatusOr<nighthawk::client::SinkResponse>
  SinkRequestStream(nighthawk::client::NighthawkSink::StubInterface& nighthawk_sink_stub,
                    const nighthawk::client::SinkRequest& sink_request) const PURE;
};

} // namespace Nighthawk
