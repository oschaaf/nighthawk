#!/usr/bin/env python3

import logging
import os
import sys
import pytest

from test.integration.integration_test_fixtures import (http_test_server_fixture)
from test.integration.utility import *


def run_with_number_of_connections(fixture,
                                   number_of_connections,
                                   expected_connections=-1,
                                   max_pending_requests=0,
                                   requests_per_connection=1024 * 1024,
                                   rps=100,
                                   run_test_expectation=True,
                                   h2=False):
  if expected_connections == -1:
    expected_connections = number_of_connections
  # We add a delay to responses to make sure connections are needed, as the pool creates connections on-demand.
  args = [
      fixture.getTestServerRootUri(), "--rps",
      str(rps), "--duration", "1", "--request-header", "x-envoy-fault-delay-request:500",
      "--max-pending-requests",
      str(max_pending_requests), "--max-requests-per-connection",
      str(requests_per_connection), "--connections",
      str(number_of_connections)
  ]
  if h2:
    args.append("--h2")
  parsed_json, _ = fixture.runNighthawkClient(args)
  counters = fixture.getNighthawkCounterMapFromJson(parsed_json)
  if run_test_expectation:
    assertCounterEqual(counters, "upstream_cx_total", expected_connections)
  return counters


# A series that tests with queueing disabled
def test_http_h1_connection_management_1(http_test_server_fixture):
  run_with_number_of_connections(http_test_server_fixture, 1)


def test_http_h1_connection_management_2(http_test_server_fixture):
  run_with_number_of_connections(http_test_server_fixture, 2)


def test_http_h1_connection_management_10(http_test_server_fixture):
  run_with_number_of_connections(http_test_server_fixture, 10)


# A series that tests with queueing enabled
def test_http_h1_connection_management_with_queue_1(http_test_server_fixture):
  run_with_number_of_connections(http_test_server_fixture, 1, max_pending_requests=100)


def test_http_h1_connection_management_with_queue_2(http_test_server_fixture):
  run_with_number_of_connections(http_test_server_fixture, 2, max_pending_requests=100)


def test_http_h1_connection_management_with_queue_10(http_test_server_fixture):
  run_with_number_of_connections(http_test_server_fixture, 10, max_pending_requests=100)


# Test h1 with a single request_per_connection
def test_http_h1_connection_management_single_request_per_conn_1(http_test_server_fixture):
  counters = run_with_number_of_connections(
      http_test_server_fixture,
      1,
      max_pending_requests=100,
      requests_per_connection=1,
      run_test_expectation=False)
  requests = counters["upstream_rq_total"]
  assertCounterBetweenInclusive(counters, "upstream_cx_total", requests, requests + 1)


# Test h2 with a single request_per_connection
def test_http_h2_connection_management_single_request_per_conn_1(http_test_server_fixture):
  counters = run_with_number_of_connections(
      http_test_server_fixture,
      1,
      max_pending_requests=100,
      h2=True,
      requests_per_connection=1,
      run_test_expectation=False)
  requests = counters["upstream_rq_total"]
  assertCounterBetweenInclusive(counters, "upstream_cx_total", requests, requests + 1)
