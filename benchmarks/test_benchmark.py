#!/usr/bin/env python3

import logging
import os
import sys
import pytest

from test.integration.common import IpVersion
from test.integration.integration_test_fixtures import (http_test_server_fixture, https_test_server_fixture)
from test.integration.utility import *

# TODO(oschaaf): we mostly verify stats observed from the client-side. Add expectations
# for the server side as well.


def assertCounterEqual(counters, name, value):
  assertIn(name, counters)
  assertEqual(counters[name], value)


def assertCounterGreater(counters, name, value):
  assertIn(name, counters)
  assertGreater(counters[name], value)


def assertCounterGreaterEqual(counters, name, value):
  assertIn(name, counters)
  assertGreaterEqual(counters[name], value)


def assertCounterLessEqual(counters, name, value):
  assertIn(name, counters)
  assertLessEqual(counters[name], value)


def test_http_h1_mini_stress_test_without_client_side_queueing(http_test_server_fixture):
  """
  Run a max rps test with the h1 pool against our test server, with no client-side
  queueing. We expect to observe:
  - upstream_rq_pending_total to be equal to 1
  - blocking to be reported by the sequencer
  - no upstream_cx_overflows
  """
  counters = mini_stress_test_h1(
      http_test_server_fixture,
      [http_test_server_fixture.getTestServerRootUri(), "--rps", "999999", "--duration 2"])
  assertCounterEqual(counters, "upstream_rq_pending_total", 1)
  assertNotIn("upstream_cx_overflow", counters)
