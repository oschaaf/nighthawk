#!/usr/bin/env python

import logging
import os
import sys
import unittest

from integration_test_base import IntegrationTestBase
from integration_test_base import HttpIntegrationTestBase
from integration_test_base import HttpsIntegrationTestBase


class TestHttp(HttpIntegrationTestBase):
    def test_h1(self):
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
            parsed_json, "upstream_cx_tx_bytes_total", 1400 if IntegrationTestBase.ipv6 else 1500)
        self.assertNighthawkCounterEqual(
            parsed_json, "upstream_rq_pending_total", 1)
        self.assertNighthawkCounterEqual(parsed_json, "upstream_rq_total", 25)

    def test_h2(self):
        parsed_json = self.runNighthawk(["--h2", self.getTestServerRootUri()])
        self.assertNighthawkCounterEqual(parsed_json, "benchmark.http_2xx", 25)
        self.assertNighthawkCounterEqual(parsed_json, "upstream_cx_destroy", 1)
        self.assertNighthawkCounterEqual(
            parsed_json, "upstream_cx_destroy_local", 1)
        self.assertNighthawkCounterEqual(
            parsed_json, "upstream_cx_http2_total", 1)
        # self.assertNighthawkCounterEqual(
        #    parsed_json, "upstream_cx_rx_bytes_total", 1145)
        self.assertNighthawkCounterEqual(parsed_json, "upstream_cx_total", 1)

        # self.assertNighthawkCounterEqual(
        #    parsed_json, "upstream_cx_tx_bytes_total", 404 if IntegrationTestBase.ipv6 else 504)
        self.assertNighthawkCounterEqual(
            parsed_json, "upstream_rq_pending_total", 1)
        self.assertNighthawkCounterEqual(parsed_json, "upstream_rq_total", 25)


class TestHttps(HttpIntegrationTestBase):
    def test_h1(self):
        parsed_json = self.runNighthawk(
            [self.getTestServerRootUri()])
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
            parsed_json, "upstream_cx_tx_bytes_total", 1400 if IntegrationTestBase.ipv6 else 1500)
        self.assertNighthawkCounterEqual(
            parsed_json, "upstream_rq_pending_total", 1)
        self.assertNighthawkCounterEqual(parsed_json, "upstream_rq_total", 25)

    def test_h2(self):
        parsed_json = self.runNighthawk(
            ["--h2", self.getTestServerRootUri()])
        self.assertNighthawkCounterEqual(parsed_json, "benchmark.http_2xx", 25)
        self.assertNighthawkCounterEqual(parsed_json, "upstream_cx_destroy", 1)
        self.assertNighthawkCounterEqual(
            parsed_json, "upstream_cx_destroy_local", 1)
        self.assertNighthawkCounterEqual(
            parsed_json, "upstream_cx_http2_total", 1)
        # self.assertNighthawkCounterEqual(
        #    parsed_json, "upstream_cx_rx_bytes_total", 1168)
        self.assertNighthawkCounterEqual(parsed_json, "upstream_cx_total", 1)

        # self.assertNighthawkCounterEqual(
        #   parsed_json, "upstream_cx_tx_bytes_total", 404 if IntegrationTestBase.ipv6 else 504)
        self.assertNighthawkCounterEqual(
            parsed_json, "upstream_rq_pending_total", 1)
        self.assertNighthawkCounterEqual(parsed_json, "upstream_rq_total", 25)


def determineIpVersions():
    ipv4 = True
    ipv6 = True
    versions = os.environ.get("ENVOY_IP_TEST_VERSIONS", "all")
    if versions == "v4only":
        ipv6 = False
    elif versions == "v6only":
        ipv4 = False
    elif versions == "all":
        pass
    else:
        raise Exception("Unknown ip version: '%s'" % versions)
    return (ipv4, ipv6)


def runTests(ipv6):
    logging.info("Running %s integration tests." %
                 ("ipv6" if ipv6 else "ipv4"))
    IntegrationTestBase.ipv6 = ipv6
    res = unittest.main()
    return res.result.wasSuccessful()


if __name__ == '__main__':
    logging.basicConfig(stream=sys.stderr, level=logging.DEBUG)
    (v4, v6) = determineIpVersions()
    assert(v4 or v6)
    ok = True
    if v4:
        ok = ok and runTests(False)
    if v6:
        ok = ok and runTests(True)

    exit(0 if ok else 1)
