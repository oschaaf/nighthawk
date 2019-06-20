licenses(["notice"])  # Apache 2

py_runtime(
    name = "python3-runtime",
    files = [],
    interpreter_path = select({
        "@bazel_tools//tools/python:PY3": "/usr/bin/python3",
    }),
)

py_test(
    name = "integration_test",
    srcs = ["integration_test.py"],
    data = [
        "configurations/nighthawk_http_origin.yaml",
        "configurations/nighthawk_https_origin.yaml",
        "//:nighthawk_client",
        "//:nighthawk_test_server",
        "@envoy//test/config/integration/certs",
    ],
)
