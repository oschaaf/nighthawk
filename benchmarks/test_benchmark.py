#!/usr/bin/env python3

import logging
import os
import sys
import pytest

from test.integration.common import IpVersion
from test.integration.integration_test_fixtures import (http_test_server_fixture,
                                                        https_test_server_fixture)
from test.integration.utility import *


#bazel-bin/nighthawk_client  --rps 100000 --connections 10 --max-active-requests 10 --prefetch-connections --output-format fortio




def test_http_h1_maxrps_no_client_side_queueing(http_test_server_fixture):
  assert (http_test_server_fixture.test_server.enableCpuProfiler())
  parsed_json, _ = http_test_server_fixture.runNighthawkClient(
      [http_test_server_fixture.getTestServerRootUri(), "--duration 10", "--open-loop", "--rps 100000", "--connections 10", "--max-active-requests 10", "--prefetch-connections"])
  global_histograms = http_test_server_fixture.getNighthawkGlobalHistogramsbyIdFromJson(parsed_json)

def test_http_h2_maxrps_no_client_side_queueing(http_test_server_fixture):
  assert (http_test_server_fixture.test_server.enableCpuProfiler())
  parsed_json, _ = http_test_server_fixture.runNighthawkClient(
      [http_test_server_fixture.getTestServerRootUri(), "--duration 10", "--open-loop", "--rps 100000", "--connections 10", "--max-active-requests 10", "--prefetch-connections", "--h2"])
  global_histograms = http_test_server_fixture.getNighthawkGlobalHistogramsbyIdFromJson(parsed_json)    
