#pragma once

#include <memory>

namespace Nighthawk {
class ControllerGrpcClient {
public:
  virtual ~ControllerGrpcClient() = default;
  virtual void start() PURE;
  virtual bool stream_status_known() const PURE;
};

using ControllerGrpcClientPtr = std::unique_ptr<ControllerGrpcClient>;

} // namespace Nighthawk