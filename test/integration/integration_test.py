#!/usr/bin/env python3

import unittest
from integration_test_base import IntegrationTestBase

class TestClient(IntegrationTestBase):
    def test_basic(self):
        parsed_json = self.runNighthawk([self.getTestServerRootUri()])
        self.assertNighthawkCounterEqual(parsed_json, "benchmark.http_2xx", 25)
        self.assertNighthawkCounterEqual(parsed_json, "upstream_cx_destroy", 1)
        self.assertNighthawkCounterEqual(
            parsed_json, "upstream_cx_destroy_local", 1)
        self.assertNighthawkCounterEqual(
            parsed_json, "upstream_cx_http1_total", 1)
        self.assertNighthawkCounterEqual(
            parsed_json, "upstream_cx_rx_bytes_total", 3400)
        self.assertNighthawkCounterEqual(parsed_json, "upstream_cx_total", 1)
        self.assertNighthawkCounterEqual(
            parsed_json, "upstream_cx_tx_bytes_total", 1400)
        self.assertNighthawkCounterEqual(
            parsed_json, "upstream_rq_pending_total", 1)
        self.assertNighthawkCounterEqual(parsed_json, "upstream_rq_total", 25)


if __name__ == '__main__':
    IntegrationTestBase.ipv6 = True
    unittest.main()
