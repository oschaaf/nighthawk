import json
import logging
from nighthawk_test_server import NighthawkTestServer
import os
import threading
import time
import subprocess
import sys
import socket
import unittest


class IntegrationTestBase(unittest.TestCase):
    def __init__(self, *args, **kwargs):
        super(IntegrationTestBase, self).__init__(*args, **kwargs)
        self.test_rundir = os.path.join(os.environ["TEST_SRCDIR"],
                                        os.environ["TEST_WORKSPACE"])

        self.nighthawk_test_server_path = os.path.join(
            self.test_rundir, "nighthawk_test_server")
        self.nighthawk_test_config_path = os.path.join(
            self.test_rundir, "integration/configurations/nighthawk_http_origin.yaml")

        self.nighthawk_client_path = os.path.join(
            self.test_rundir, "nighthawk_client")
        self.server_ip = "::1" if IntegrationTestBase.ipv6 else "127.0.0.1"
        self.socket_type = socket.AF_INET6 if IntegrationTestBase.ipv6 else socket.AF_INET
        self.test_server = None
        self.server_port = -1
        self.parameters = dict()

    def getFreeListenerPortForAddress(self, address):
        sock = socket.socket(self.socket_type, socket.SOCK_STREAM)
        sock.bind((address, 0))
        port = sock.getsockname()[1]
        sock.close()
        return port

    def setUp(self):
        self.assertTrue(os.path.exists(self.nighthawk_test_server_path))
        self.assertTrue(os.path.exists(self.nighthawk_client_path))
        self.server_port = self.getFreeListenerPortForAddress(
            self.server_ip)
        self.test_server = NighthawkTestServer(
            self.nighthawk_test_server_path, self.nighthawk_test_config_path, self.server_ip, self.server_port, IntegrationTestBase.ipv6, "--config-path", self.parameters)
        self.assertTrue(self.test_server.start())

    def tearDown(self):
        self.assertEqual(0, self.test_server.stop())

    def getNighthawkCounter(self, parsed_json, name):
        counters = parsed_json["results"][0]["counters"]
        for counter in counters:
            if counter["name"] == "client.%s" % name:
                return int(counter["value"])
        self.assertTrue(False)

    def assertNighthawkCounterEqual(self, parsed_json, name, value):
        self.assertEqual(int(value), self.getNighthawkCounter(
            parsed_json, name))

    def assertNumberOfCountersEqual(self, parsed_json, count):
        counters = parsed_json["results"][0]["counters"]
        self.assertEqual(len(counters), count)

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

    def runNighthawk(self, args, expect_failure=False, timeout=30):
        if IntegrationTestBase.ipv6:
            args.insert(0, "--address-family v6")
        args.insert(0, "--output-format json")
        args.insert(0, self.nighthawk_client_path)
        logging.info("Nighthawk client popen() args: [%s]" % args)
        client_process = subprocess.Popen(
            args, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        stdout, stderr = client_process.communicate()
        logging.info(stderr.decode('utf-8'))
        json_string = stdout.decode('utf-8')
        if expect_failure:
            self.assertNotEqual(0, client_process.returncode)
        else:
            self.assertEqual(0, client_process.returncode)
            return json.loads(json_string)


class HttpIntegrationTestBase(IntegrationTestBase):
    def __init__(self, *args, **kwargs):
        super(HttpIntegrationTestBase, self).__init__(*args, **kwargs)

    def getTestServerRootUri(self):
        return super(HttpIntegrationTestBase, self).getTestServerRootUri(False)


class HttpsIntegrationTestBase(IntegrationTestBase):
    def __init__(self, *args, **kwargs):
        super(HttpsIntegrationTestBase, self).__init__(*args, **kwargs)
        self.parameters["ssl_key_path"] = os.path.join(
            self.test_rundir, "external/envoy/test/config/integration/certs/serverkey.pem")
        self.parameters["ssl_cert_path"] = os.path.join(
            self.test_rundir, "external/envoy/test/config/integration/certs/servercert.pem")
        self.nighthawk_test_config_path = os.path.join(
            self.test_rundir, "integration/configurations/nighthawk_https_origin.yaml")

    def getTestServerRootUri(self):
        return super(HttpsIntegrationTestBase, self).getTestServerRootUri(True)


IntegrationTestBase.ipv6 = False
