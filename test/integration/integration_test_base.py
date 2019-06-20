import unittest
import os
import time
import sys
import subprocess
import threading
import socket
import json
from nighthawk_test_server import NighthawkTestServer


class IntegrationTestBase(unittest.TestCase):
    def __init__(self, *args, **kwargs):
        super(IntegrationTestBase, self).__init__(*args, **kwargs)
        self.assertTrue(not IntegrationTestBase.ipv6 is None)
        self.test_rundir = os.path.join(os.environ["TEST_SRCDIR"],
                                        os.environ["TEST_WORKSPACE"])
        self.nighthawk_test_server_path = os.path.join(
            self.test_rundir, "nighthawk_test_server")
        self.nighthawk_test_config_path = os.path.join(
            self.test_rundir, "test/integration/configurations/nighthawk_test_server.yaml")

        self.nighthawk_client_path = os.path.join(
            self.test_rundir, "nighthawk_client")
        self.server_ip = "::1" if IntegrationTestBase.ipv6 else "127.0.0.1"
        self.socket_type = socket.AF_INET6 if IntegrationTestBase.ipv6 else socket.AF_INET
        self.test_server = None
        self.server_port = -1

    def getFreeListenerPortForAddress(self, address):
        with socket.socket(self.socket_type, socket.SOCK_STREAM) as sock:
            sock.bind((address, 0))
            return sock.getsockname()[1]

    def setUp(self):
        self.assertTrue(os.path.exists(self.nighthawk_test_server_path))
        self.assertTrue(os.path.exists(self.nighthawk_client_path))
        self.server_port = self.getFreeListenerPortForAddress(
            self.server_ip)
        self.test_server = NighthawkTestServer(
            self.nighthawk_test_server_path, self.nighthawk_test_config_path, self.server_ip, self.server_port, IntegrationTestBase.ipv6)
        self.assertTrue(self.test_server.start())

    def tearDown(self):
        self.assertEqual(0, self.test_server.stop())

    def assertNighthawkCounterEqual(self, parsed_json, name, value):
        counters = parsed_json["results"][0]["counters"]
        for counter in counters:
            if counter["name"] == "client.%s" % name:
                self.assertEqual(value, int(counter["value"]))
                return
        # Shouldn't get here
        self.assertTrue(False)

    def debugDumpCounterExpectations(self, parsed_json):
        counters = parsed_json["results"][0]["counters"]
        for counter in counters:
            print('\t\tself.assertNighthawkCounterEqual(parsed_json, "%s", %s)' %
                  (counter["name"].lstrip("client."), counter["value"]))

    def getTestServerRootUri(self, https=False):
        uri_host = self.server_ip
        if IntegrationTestBase.ipv6:
            uri_host = "[%s]" % self.server_ip

        uri = "%s://%s:%s/" % ("https" if https else "http",
                               uri_host, self.test_server.server_port)
        return uri

    def runNighthawk(self, args, expect_failure=False, timeout=10):
        if IntegrationTestBase.ipv6:
            args.insert(0, "--address-family v6")
        args.insert(0, "--output-format json")
        args.insert(0, self.nighthawk_client_path)
        process_result = subprocess.run(
            args, stdout=subprocess.PIPE, timeout=timeout)
        if expect_failure:
            self.assertNotEqual(0, process_result.returncode)
        else:
            self.assertEqual(0, process_result.returncode)
            return json.loads(process_result.stdout)
