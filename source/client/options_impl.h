#pragma once

#include <chrono>
#include <cstdint>
#include <string>

#include "nighthawk/client/options.h"
#include "nighthawk/common/exception.h"

namespace Nighthawk {
namespace Client {

class OptionsImpl : public Options {
public:
  OptionsImpl(int argc, const char* const* argv);
  OptionsImpl(const nighthawk::client::CommandLineOptions& options);

  Client::CommandLineOptionsPtr toCommandLineOptions() const override;

  uint32_t requestsPerSecond() const override { return requests_per_second_; }
  uint32_t connections() const override { return connections_; }
  std::chrono::seconds duration() const override { return std::chrono::seconds(duration_); }
  std::chrono::seconds timeout() const override { return std::chrono::seconds(timeout_); }
  std::string uri() const override { return uri_; }
  bool h2() const override { return h2_; }
  std::string concurrency() const override { return concurrency_; }
  std::string verbosity() const override { return verbosity_; };
  std::string outputFormat() const override { return output_format_; };
  bool prefetchConnections() const override { return prefetch_connections_; }
  uint32_t burstSize() const override { return burst_size_; }
  std::string addressFamily() const override { return address_family_; };
  std::string requestMethod() const override { return request_method_; };
  std::vector<std::string> requestHeaders() const override { return request_headers_; };
  uint32_t requestBodySize() const override { return request_body_size_; };
  const envoy::api::v2::auth::UpstreamTlsContext& tlsContext() const override {
    return tls_context_;
  };
  uint32_t maxPendingRequests() const override { return max_pending_requests_; }
  uint32_t maxActiveRequests() const override { return max_active_requests_; }
  uint32_t maxRequestsPerConnection() const override { return max_requests_per_connection_; }

private:
  uint32_t requests_per_second_;
  uint32_t connections_;
  uint32_t duration_;
  uint32_t timeout_;
  std::string uri_;
  bool h2_;
  std::string concurrency_;
  std::string verbosity_;
  std::string output_format_;
  bool prefetch_connections_;
  uint32_t burst_size_;
  std::string address_family_;
  std::string request_method_;
  std::vector<std::string> request_headers_;
  uint32_t request_body_size_;
  envoy::api::v2::auth::UpstreamTlsContext tls_context_;
  uint32_t max_pending_requests_;
  uint32_t max_active_requests_;
  uint32_t max_requests_per_connection_;
};

} // namespace Client
} // namespace Nighthawk
