#!/usr/bin/env python3

import logging
import os
import sys
import pytest

from test.integration.common import IpVersion
from test.integration.integration_test_fixtures import (http_test_server_fixture,
                                                        https_test_server_fixture)
from test.integration.utility import *


def test_new_h1_redline_30(http_test_server_fixture):
  assert (http_test_server_fixture.test_server.enableCpuProfiler())
  parsed_json, _ = http_test_server_fixture.runNighthawkClient(
      [http_test_server_fixture.getTestServerRootUri(), "--rps", "50000", "--duration", "60", "--concurrency 120", "--connections", "100", "--max-pending-requests", "100"])
  counters = http_test_server_fixture.getNighthawkCounterMapFromJson(parsed_json)
  global_histograms = http_test_server_fixture.getNighthawkGlobalHistogramsbyIdFromJson(parsed_json)
  logging.info(str(parsed_json))

def test_new_h2_redline_30(http_test_server_fixture):
  assert (http_test_server_fixture.test_server.enableCpuProfiler())
  parsed_json, _ = http_test_server_fixture.runNighthawkClient(
      [http_test_server_fixture.getTestServerRootUri(), "--rps", "50000", "--duration", "60", "--concurrency 120", "--max-active-requests", "100", "--h2", "--max-pending-requests", "100"])
  counters = http_test_server_fixture.getNighthawkCounterMapFromJson(parsed_json)
  global_histograms = http_test_server_fixture.getNighthawkGlobalHistogramsbyIdFromJson(parsed_json)
  logging.info(str(parsed_json))

