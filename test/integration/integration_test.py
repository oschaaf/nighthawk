#!/usr/bin/env python3

import unittest
from integration_test_base import IntegrationTestBase


class TestClient(IntegrationTestBase):
    def test_basic(self):
        args = [self.nighthawk_client_path,
                "--output-format json"]
        if IntegrationTestBase.ipv6:
            args.append("--address-family v6")

        args.append("http://%s:%s/" % (self.uri_host, self.server_port))
        parsed_json = self.runNighthawk(args)
        #counters = parsed_json["results"][0]["counters"]
        # self.debugDumpCounterExpectations(parsed_json)
        self.assertCounterEqual(parsed_json, "benchmark.http_2xx", 25)
        self.assertCounterEqual(parsed_json, "upstream_cx_destroy", 1)
        self.assertCounterEqual(
            parsed_json, "upstream_cx_destroy_local", 1)
        self.assertCounterEqual(parsed_json, "upstream_cx_http1_total", 1)
        self.assertCounterEqual(
            parsed_json, "upstream_cx_rx_bytes_total", 3400)
        self.assertCounterEqual(parsed_json, "upstream_cx_total", 1)
        self.assertCounterEqual(
            parsed_json, "upstream_cx_tx_bytes_total", 1400)
        self.assertCounterEqual(
            parsed_json, "upstream_rq_pending_total", 1)
        self.assertCounterEqual(parsed_json, "upstream_rq_total", 25)


if __name__ == '__main__':
    IntegrationTestBase.ipv6 = True
    unittest.main()
