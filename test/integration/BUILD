licenses(["notice"])  # Apache 2

py_test(
    name = "integration_test",
    srcs = ["integration_test.py"],
    data = [
        "configurations/nighthawk_test_server.yaml",
        "//:nighthawk_client",
        "//:nighthawk_test_server",
    ],
)
