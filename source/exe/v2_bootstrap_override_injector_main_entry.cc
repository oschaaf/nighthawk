/**
 * Utility to modify a v2 configuration for continued ingestion
 * of the deprecated v2 api.
 *
 * Usage:
 *
 * vs_bootstrap_override_injector <input path> <output path>
 *
 * A zero exit-code means that the program wrote an modified v2
 * configuration to the output path.
 *
 */
#include <cstdlib>
#include <fstream>

#include "envoy/config/bootstrap/v2/bootstrap.pb.h"
#include "envoy/config/bootstrap/v3/bootstrap.pb.h"

#include "external/envoy/source/common/api/api_impl.h"
#include "external/envoy/source/common/common/assert.h"
#include "external/envoy/source/common/common/random_generator.h"
#include "external/envoy/source/common/event/real_time_system.h"
#include "external/envoy/source/common/protobuf/message_validator_impl.h"
#include "external/envoy/source/common/protobuf/utility.h"
#include "external/envoy/source/common/runtime/runtime_impl.h"
#include "external/envoy/source/common/stats/isolated_store_impl.h"
#include "external/envoy/source/exe/platform_impl.h"

// NOLINT(namespace-nighthawk)
int main(int argc, char** argv) {
  if (argc != 3) {
    std::cerr << "Usage: " << argv[0] << " <input path> <output path>" << std::endl;
    return EXIT_FAILURE;
  }
  Envoy::PlatformImpl platform_impl_;
  Envoy::Stats::IsolatedStoreImpl stats_store;
  Envoy::Event::RealTimeSystem time_system; // NO_CHECK_FORMAT(real_time)
  Envoy::Random::RandomGeneratorImpl random_generator;
  Envoy::Api::Impl api(platform_impl_.threadFactory(), stats_store, time_system,
                       platform_impl_.fileSystem(), random_generator);

  envoy::config::bootstrap::v3::Bootstrap v3_bootstrap;
  try {
    Envoy::MessageUtil::loadFromFile(
        argv[1], v3_bootstrap, Envoy::ProtobufMessage::getStrictValidationVisitor(), api, false);
    std::cerr << "Configuration parsed cleanly as v3. Backing out indicating failure." << std::endl;
    return EXIT_FAILURE;
  } catch (Envoy::DeprecatedMajorVersionException& exception) {
    std::cerr << "Failed to parse " << argv[0]
              << " cleanly as v3. Attempt to inject overrides to allow v2." << std::endl;
  } catch (Envoy::ProtobufMessage::UnknownProtoFieldException& exception) {
    std::cerr << "Failed to parse " << argv[0]
              << " cleanly as v3. Attempt to inject overrides to allow v2." << std::endl;
  }

  try {
    envoy::config::bootstrap::v2::Bootstrap v2_bootstrap;
    Envoy::MessageUtil::loadFromFile(
        argv[1], v2_bootstrap, Envoy::ProtobufMessage::getStrictValidationVisitor(), api, true);
    envoy::config::bootstrap::v2::RuntimeLayer* runtime_layer =
        v2_bootstrap.mutable_layered_runtime()->add_layers();
    runtime_layer->set_name("static_layer");
    Envoy::ProtobufWkt::Value value1;
    value1.set_string_value(std::string("true"));
    (*runtime_layer->mutable_static_layer()
          ->mutable_fields())[std::string("envoy.reloadable_features.enable_deprecated_v2_api")] =
        value1;
    (*runtime_layer->mutable_static_layer()
          ->mutable_fields())[std::string("envoy.features.enable_all_deprecated_features")] =
        value1;
    std::ofstream bootstrap_file(argv[2]);
    bootstrap_file << Envoy::MessageUtil::getJsonStringFromMessage(v2_bootstrap, true, true);
    std::cerr << "Wrote " << argv[1] << std::endl;
  } catch (std::exception& exception) {
    std::cerr << "Failed to override the bootstrap: " << exception.what() << std::endl;
    return EXIT_FAILURE;
  }

  return EXIT_SUCCESS;
}