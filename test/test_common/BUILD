load(
    "@envoy//bazel:envoy_build_system.bzl",
    "envoy_cc_test_library",
    "envoy_package",
)

licenses(["notice"])  # Apache 2

envoy_package()

envoy_cc_test_library(
    name = "environment_lib",
    hdrs = [
        "environment.h",
    ],
    repository = "@envoy",
    deps = [
        "@envoy//test/test_common:environment_lib",
    ],
)

envoy_cc_test_library(
    name = "test_integration_server_lib",
    srcs = ["test_integration_server.cc"],
    hdrs = [
        "test_integration_server.h",
    ],
    repository = "@envoy",
    deps = [
        ":environment_lib",
        "@envoy//source/exe:process_wide_lib",
        "@envoy//test/integration:http_integration_lib",
    ],
)
