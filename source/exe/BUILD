load(
    "@envoy//bazel:envoy_build_system.bzl",
    "envoy_cc_library",
    "envoy_package",
)

licenses(["notice"])  # Apache 2

envoy_package()

envoy_cc_library(
    name = "nighthawk_client_entry_lib",
    srcs = ["client_main_entry.cc"],
    external_deps = [
        "abseil_symbolize",
    ],
    repository = "@envoy",
    visibility = ["//visibility:public"],
    deps = [
        "//source/client:nighthawk_client_lib",
        "//source/common:version_linkstamp",
    ],
)

envoy_cc_library(
    name = "nighthawk_service_entry_lib",
    srcs = ["service_main_entry.cc"],
    external_deps = [
        "abseil_symbolize",
    ],
    repository = "@envoy",
    visibility = ["//visibility:public"],
    deps = [
        "//source/client:nighthawk_service_lib",
        "//source/common:version_linkstamp",
    ],
)

envoy_cc_library(
    name = "output_transform_main_entry_lib",
    srcs = ["output_transform_main_entry.cc"],
    repository = "@envoy",
    visibility = ["//visibility:public"],
    deps = [
        "//source/client:output_transform_main_lib",
        "//source/common:version_linkstamp",
    ],
)

envoy_cc_library(
    name = "v2_bootstrap_override_injector_main_entry_lib",
    srcs = ["v2_bootstrap_override_injector_main_entry.cc"],
    repository = "@envoy",
    visibility = ["//visibility:public"],
    deps = [
        "//source/common:version_linkstamp",
        "@envoy//source/common/api:api_lib_with_external_headers",
        "@envoy//source/common/common:assert_lib_with_external_headers",
        "@envoy//source/common/common:random_generator_lib_with_external_headers",
        "@envoy//source/common/event:real_time_system_lib_with_external_headers",
        "@envoy//source/common/protobuf:message_validator_lib_with_external_headers",
        "@envoy//source/common/protobuf:utility_lib_with_external_headers",
        "@envoy//source/common/stats:isolated_store_lib_with_external_headers",
        "@envoy//source/exe:platform_header_lib_with_external_headers",
        "@envoy//source/exe:platform_impl_lib",
        "@envoy_api//envoy/api/v2:pkg_cc_proto",
        "@envoy_api//envoy/config/bootstrap/v3:pkg_cc_proto",
        "@envoy//source/common/runtime:runtime_lib_with_external_headers",
    ],
)
