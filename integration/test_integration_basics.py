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
