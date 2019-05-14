load(
    "@envoy//bazel:envoy_build_system.bzl",
    "envoy_package",
)
load("@envoy_api//bazel:api_build_system.bzl", "api_proto_library")

licenses(["notice"])  # Apache 2

envoy_package()

api_proto_library(
    name = "base",
    srcs = [
        "options.proto",
        "output.proto",
        "service.proto",
    ],
    has_services = 1,
    visibility = ["//visibility:public"],
    deps = [
        "@envoy_api//envoy/api/v2/core:base_export",
    ],
)

#proto_lang_toolchain(
#    name = "cc_toolchain",
#    command_line = "--cpp_out=$(PLUGIN_out)",
#    plugin = "grpc",
#    runtime = ":protobuf",
#    visibility = ["//visibility:public"],
#)
