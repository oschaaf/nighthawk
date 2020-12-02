load(
    "@envoy//bazel:envoy_build_system.bzl",
    "envoy_cc_binary",
    "envoy_package",
)

licenses(["notice"])  # Apache 2

envoy_package()

filegroup(
    name = "nighthawk",
    srcs = [
        ":nighthawk_client",
        ":nighthawk_output_transform",
        ":nighthawk_service",
        ":nighthawk_test_server",
        ":nighthawk_test_server_direct",
    ],
)

envoy_cc_binary(
    name = "nighthawk_client",
    repository = "@envoy",
    deps = [
        "//source/exe:nighthawk_client_entry_lib",
    ],
)

envoy_cc_binary(
    name = "v2_bootstrap_override_injector",
    repository = "@envoy",
    deps = [
        "//source/exe:v2_bootstrap_override_injector_main_entry_lib",
    ],
)

envoy_cc_binary(
    name = "nighthawk_test_server_direct",
    repository = "@envoy",
    deps = [
        "//source/server:http_dynamic_delay_filter_config",
        "//source/server:http_test_server_filter_config",
        "//source/server:http_time_tracking_filter_config",
        "@envoy//source/exe:envoy_main_entry_lib",
    ],
)

sh_binary(
    name = "nighthawk_test_server",
    srcs = ["test_server"],
    data = [
        ":nighthawk_test_server_direct",
        ":v2_bootstrap_override_injector",
    ],
)

envoy_cc_binary(
    name = "nighthawk_service",
    repository = "@envoy",
    deps = [
        "//source/exe:nighthawk_service_entry_lib",
    ],
)

envoy_cc_binary(
    name = "nighthawk_output_transform",
    repository = "@envoy",
    deps = [
        "//source/exe:output_transform_main_entry_lib",
    ],
)
