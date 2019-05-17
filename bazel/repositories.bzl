load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

ENVOY_COMMIT = "98bce8c0f5e0f37cd140aff9c9b35c8f46a0840a"
ENVOY_SHA = "edfb7083c7936e37be49ad27514f239dfea784b54491e48d8790a6774437af02"

def nighthawk_dependencies():
    http_archive(
        name = "envoy",
        sha256 = ENVOY_SHA,
        strip_prefix = "envoy-%s" % ENVOY_COMMIT,
        url = "https://github.com/envoyproxy/envoy/archive/%s.tar.gz" % ENVOY_COMMIT,
    )
    http_archive(
        name = "build_stack_rules_proto",
        urls = ["https://github.com/stackb/rules_proto/archive/56665373fe541d6f134d394624c8c64cd5652e8c.tar.gz"],
        sha256 = "78e378237c6e7bd7cfdda155d4f7010b27723f26ebfa6345e79675bddbbebc11",
        strip_prefix = "rules_proto-56665373fe541d6f134d394624c8c64cd5652e8c",
    )
    http_archive(
        name = "dep_hdrhistogram_c",
        build_file_content = """
cc_library(
    name = "hdrhistogram_c",
    srcs = [
        "src/hdr_encoding.c",
        "src/hdr_histogram.c",
        "src/hdr_histogram_log.c",
        "src/hdr_interval_recorder.c",
        "src/hdr_thread.c",
        "src/hdr_time.c",
        "src/hdr_writer_reader_phaser.c",
    ],
    hdrs = [
        "src/hdr_atomic.h",
        "src/hdr_encoding.h",
        "src/hdr_endian.h",
        "src/hdr_histogram.h",
        "src/hdr_histogram_log.h",
        "src/hdr_interval_recorder.h",
        "src/hdr_tests.h",
        "src/hdr_thread.h",
        "src/hdr_time.h",
        "src/hdr_writer_reader_phaser.h",
    ],
    copts = [
        "-std=gnu99",
        "-Wno-implicit-function-declaration",
        "-Wno-error",
    ],
    deps = ["//external:zlib"],
    visibility = ["//visibility:public"],
)
  """,
        sha256 = "6928ba22634d9a5b2752227309c9097708e790db6a285fa5c3f40a219bf7ee98",
        strip_prefix = "HdrHistogram_c-0.9.8",
        url = "https://github.com/HdrHistogram/HdrHistogram_c/archive/0.9.8.tar.gz",
    )
