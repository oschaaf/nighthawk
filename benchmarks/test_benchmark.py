#!/usr/bin/env python3

import logging
import os
import sys
import pytest

from test.integration.common import IpVersion
from test.integration.integration_test_fixtures import (http_test_server_fixture,
                                                        https_test_server_fixture)
from test.integration.utility import *


def test_http_h1_maxrps_1_connection(http_test_server_fixture):
  assert (http_test_server_fixture.test_server.enableCpuProfiler())
  MIN_EXPECTED_REQUESTS = 100
  parsed_json, _ = http_test_server_fixture.runNighthawkClient(
      [http_test_server_fixture.getTestServerRootUri(), "--rps", "25000", "--duration", "30", "--connections 1", "--concurrency 30"])
  counters = http_test_server_fixture.getNighthawkCounterMapFromJson(parsed_json)
  # We expect to have executed a certain amount of requests
  assertCounterGreater(counters, "benchmark.http_2xx", MIN_EXPECTED_REQUESTS)
  # We expect to have created only a single connection
  #assertCounterEqual(counters, "upstream_cx_http1_total", 2)
  global_histograms = http_test_server_fixture.getNighthawkGlobalHistogramsbyIdFromJson(parsed_json)
  assertGreater(int(global_histograms["sequencer.blocking"]["count"]), MIN_EXPECTED_REQUESTS)
  assertGreater(
      int(global_histograms["benchmark_http_client.request_to_response"]["count"]),
      MIN_EXPECTED_REQUESTS)
  logging.info("# Requests: %s" % str(counters["benchmark.http_2xx"]))

def test_http_h2_maxrps_1_active_request(http_test_server_fixture):
  assert (http_test_server_fixture.test_server.enableCpuProfiler())
  MIN_EXPECTED_REQUESTS = 100
  parsed_json, _ = http_test_server_fixture.runNighthawkClient(
      [http_test_server_fixture.getTestServerRootUri(), "--rps", "25000", "--duration", "30", "--max-active-requests 1", "--h2", "--concurrency 30"])
  counters = http_test_server_fixture.getNighthawkCounterMapFromJson(parsed_json)
  # We expect to have executed a certain amount of requests
  assertCounterGreater(counters, "benchmark.http_2xx", MIN_EXPECTED_REQUESTS)
  # We expect to have created only a single connection
  #assertCounterEqual(counters, "upstream_cx_http1_total", 2)
  global_histograms = http_test_server_fixture.getNighthawkGlobalHistogramsbyIdFromJson(parsed_json)
  assertGreater(int(global_histograms["sequencer.blocking"]["count"]), MIN_EXPECTED_REQUESTS)
  assertGreater(
      int(global_histograms["benchmark_http_client.request_to_response"]["count"]),
      MIN_EXPECTED_REQUESTS)
  logging.info("# Requests: %s" % str(counters["benchmark.http_2xx"]))

def test_http_h1_maxrps_100_connection(http_test_server_fixture):
  assert (http_test_server_fixture.test_server.enableCpuProfiler())
  MIN_EXPECTED_REQUESTS = 100
  parsed_json, _ = http_test_server_fixture.runNighthawkClient(
      [http_test_server_fixture.getTestServerRootUri(), "--rps", "25000", "--duration", "30", "--connections 100", "--concurrency 30"])
  counters = http_test_server_fixture.getNighthawkCounterMapFromJson(parsed_json)
  # We expect to have executed a certain amount of requests
  assertCounterGreater(counters, "benchmark.http_2xx", MIN_EXPECTED_REQUESTS)
  # We expect to have created only a single connection
  #assertCounterEqual(counters, "upstream_cx_http1_total", 2)
  global_histograms = http_test_server_fixture.getNighthawkGlobalHistogramsbyIdFromJson(parsed_json)
  assertGreater(int(global_histograms["sequencer.blocking"]["count"]), MIN_EXPECTED_REQUESTS)
  assertGreater(
      int(global_histograms["benchmark_http_client.request_to_response"]["count"]),
      MIN_EXPECTED_REQUESTS)
  logging.info("# Requests: %s" % str(counters["benchmark.http_2xx"]))

def test_http_h2_maxrps_100_active_request(http_test_server_fixture):
  assert (http_test_server_fixture.test_server.enableCpuProfiler())
  MIN_EXPECTED_REQUESTS = 100
  parsed_json, _ = http_test_server_fixture.runNighthawkClient(
      [http_test_server_fixture.getTestServerRootUri(), "--rps", "25000", "--duration", "30", "--max-active-requests 100", "--h2", "--concurrency 30"])
  counters = http_test_server_fixture.getNighthawkCounterMapFromJson(parsed_json)
  # We expect to have executed a certain amount of requests
  assertCounterGreater(counters, "benchmark.http_2xx", MIN_EXPECTED_REQUESTS)
  # We expect to have created only a single connection
  #assertCounterEqual(counters, "upstream_cx_http1_total", 2)
  global_histograms = http_test_server_fixture.getNighthawkGlobalHistogramsbyIdFromJson(parsed_json)
  assertGreater(int(global_histograms["sequencer.blocking"]["count"]), MIN_EXPECTED_REQUESTS)
  assertGreater(
      int(global_histograms["benchmark_http_client.request_to_response"]["count"]),
      MIN_EXPECTED_REQUESTS)
  logging.info("# Requests: %s" % str(counters["benchmark.http_2xx"]))