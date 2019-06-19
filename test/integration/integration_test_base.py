import unittest
import os
import time
import sys
from os.path import join
import subprocess
import threading
import socket
import json

from unittest import TestCase


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
        self.server_thread = threading.Thread(target=self.serverThreadRunner)
        self.server_process = None
        self.server_ip = "::1" if IntegrationTestBase.ipv6 else "127.0.0.1"
        self.uri_host = "[::1]" if IntegrationTestBase.ipv6 else "127.0.0.1"
        self.socket_type = socket.AF_INET6 if IntegrationTestBase.ipv6 else socket.AF_INET
        self.server_port = -1

    def serverThreadRunner(self):
        self.server_port = self.getFreeListenerPortForAddress(self.server_ip)
        with open(self.nighthawk_test_config_path) as f:
            config = f.read()
            config = config.replace(
                "{{ server_ip }}", self.server_ip)
            config = config.replace("{{ test_rundir }}", self.test_rundir)
            config = config.replace("{{ server_port }}", str(self.server_port))

        self.server_process = subprocess.Popen(
            [self.nighthawk_test_server_path, "--config-yaml",  config])
        self.server_process.communicate()

    def getFreeListenerPortForAddress(self, address):
        with socket.socket(self.socket_type, socket.SOCK_STREAM) as sock:
            sock.bind((address, 0))
            return sock.getsockname()[1]

    def waitForServerReady(self):
        with socket.socket(self.socket_type, socket.SOCK_STREAM) as sock:
            sock.settimeout(1)
            tries = 10
            while tries > 0:
                time.sleep(0.5)
                tries -= 1
                if sock.connect_ex((self.server_ip, self.server_port)) == 0:
                    return True
        return False

    def setUp(self):
        self.assertTrue(os.path.exists(self.nighthawk_test_server_path))
        self.assertTrue(os.path.exists(self.nighthawk_client_path))
        self.server_thread.daemon = True
        self.server_thread.start()
        self.assertTrue(self.waitForServerReady())

    def tearDown(self):
        self.server_process.terminate()
        self.server_thread.join()
        self.assertEqual(0, self.server_process.returncode)

    def assertCounterEqual(self, parsed_json, name, value):
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
            print('\t\tself.assertCounterEqual(parsed_json, "%s", %s)' %
                  (counter["name"].lstrip("client."), counter["value"]))

    def runNighthawk(self, args, expect_failure=False, timeout=10):
        process_result = subprocess.run(
            args, stdout=subprocess.PIPE, timeout=timeout)
        if expect_failure:
            self.assertNotEqual(0, process_result.returncode)
        else:
            self.assertEqual(0, process_result.returncode)
            return json.loads(process_result.stdout)
