#!/usr/bin/env python3
import pytest

from integration_test_fixtures import (http_test_server_fixture)
from utility import *


def test_grpc_service_happy_flow(http_test_server_fixture):
  http_test_server_fixture.startNighthawkGrpcService()
  parsed_json, _ = http_test_server_fixture.runNighthawkClient([
      "--termination-predicate", "benchmark.http_2xx:10", "--rps 100",
      "--request-source %s:%s" % (http_test_server_fixture.grpc_service.server_ip,
                                  http_test_server_fixture.grpc_service.server_port),
      http_test_server_fixture.getTestServerRootUri()
  ])
  counters = http_test_server_fixture.getNighthawkCounterMapFromJson(parsed_json)
  assertGreaterEqual(counters["benchmark.http_2xx"], 10)
  assertEqual(counters["headersource.internal.upstream_rq_200"], 1)


@pytest.mark.skipif(isSanitizerRun(), reason="Slow in sanitizer runs")
def test_grpc_service_stress(http_test_server_fixture):
  http_test_server_fixture.startNighthawkGrpcService()
  parsed_json, _ = http_test_server_fixture.runNighthawkClient([
      "--duration 100", "--rps 10000", "--concurrency 4", "--termination-predicate",
      "benchmark.http_2xx:5000",
      "--request-source %s:%s" % (http_test_server_fixture.grpc_service.server_ip,
                                  http_test_server_fixture.grpc_service.server_port),
      http_test_server_fixture.getTestServerRootUri()
  ])
  counters = http_test_server_fixture.getNighthawkCounterMapFromJson(parsed_json)
  assertGreaterEqual(counters["benchmark.http_2xx"], 5000)
  assertEqual(counters["headersource.internal.upstream_rq_200"], 4)
