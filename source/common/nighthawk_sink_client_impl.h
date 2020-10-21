#include "nighthawk/common/nighthawk_sink_client.h"

#include "external/envoy/source/common/common/statusor.h"
#include "external/envoy/source/common/protobuf/protobuf.h"

#include "api/client/options.pb.h"
#include "api/client/service.grpc.pb.h"

namespace Nighthawk {

/**
 * Real implementation of a helper that opens a channel with the gRPC stub, sends the input, and
 * translates the output or errors into a StatusOr.
 *
 * This class is stateless and may be called from multiple threads. Furthermore, the same gRPC stub
 * is safe to use from multiple threads simultaneously.
 */
class NighthawkSinkClientImpl : public NighthawkSinkClient {
public:
  absl::Status ForwardExecutionResponse(
      nighthawk::client::NighthawkSink::StubInterface* nighthawk_sink_stub,
      const nighthawk::client::ExecutionResponse& execution_response) const override;
};

} // namespace Nighthawk
