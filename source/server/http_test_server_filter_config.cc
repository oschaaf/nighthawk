#include <string>

#include "envoy/registry/registry.h"

#include "external/envoy/source/common/protobuf/message_validator_impl.h"

#include "api/server/response_options.pb.h"
#include "api/server/response_options.pb.validate.h"

#include "server/http_test_server_filter.h"

namespace nighthawk {

class HttpTestServerDecoderFilterConfigFactory
    : public Envoy::Server::Configuration::NamedHttpFilterConfigFactory {
public:
  Envoy::Http::FilterFactoryCb
  createFilterFactoryFromProto(const Envoy::Protobuf::Message& proto_config, const std::string&,
                               Envoy::Server::Configuration::FactoryContext& context) override {

    auto& validation_visitor = Envoy::ProtobufMessage::getStrictValidationVisitor();
    return createFilter(
        Envoy::MessageUtil::downcastAndValidate<const nighthawk::server::ResponseOptions&>(
            proto_config, validation_visitor),
        context);
  }

  Envoy::ProtobufTypes::MessagePtr createEmptyConfigProto() override {
    return Envoy::ProtobufTypes::MessagePtr{new nighthawk::server::ResponseOptions()};
  }

  std::string name() const override { return "test-server"; }

private:
  Envoy::Http::FilterFactoryCb createFilter(const nighthawk::server::ResponseOptions& proto_config,
                                            Envoy::Server::Configuration::FactoryContext&) {
    HttpTestServerDecoderFilterConfigSharedPtr config =
        std::make_shared<HttpTestServerDecoderFilterConfig>(
            HttpTestServerDecoderFilterConfig(proto_config));

    return [config](Envoy::Http::FilterChainFactoryCallbacks& callbacks) -> void {
      auto* filter = new HttpTestServerDecoderFilter(config);
      callbacks.addStreamDecoderFilter(Envoy::Http::StreamDecoderFilterSharedPtr{filter});
    };
  }
};

static Envoy::Registry::RegisterFactory<HttpTestServerDecoderFilterConfigFactory,
                                        Envoy::Server::Configuration::NamedHttpFilterConfigFactory>
    register_;

} // namespace nighthawk
