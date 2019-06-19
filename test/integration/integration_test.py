import unittest
import os
import time
import sys
from os import listdir
from os.path import isfile, join
import subprocess
import threading
import socket
import json


class IntegrationTestBase(unittest.TestCase):
    def __init__(self, *args, **kwargs):
        super(IntegrationTestBase, self).__init__(*args, **kwargs)
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

    def serverThreadRunner(self):
        # envoy_config = file_system.fileReadToEnd(Envoy::TestEnvironment::runfilesPath(
        #    "test/test_data/benchmark_http_client_test_envoy.yaml"));
        # envoy_config = Envoy::TestEnvironment::substitute(envoy_config);
        print(self.nighthawk_test_config_path)
        self.server_process = subprocess.Popen(
            [self.nighthawk_test_server_path, "--config-path", self.nighthawk_test_config_path])
        self.server_process.communicate()

    def waitForServerReady(self):
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
            tries = 50
            sock.settimeout(0.1)
            while tries > 0:
                time.sleep(0.1)
                tries -= 1
                if sock.connect_ex(('localhost', 10000)) == 0:
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
        self.server_thread.join()


def getCounterValueFromProto(parsed_json, name):
    counters = parsed_json["results"][0]["counters"]
    for counter in counters:
        if counter["name"] == name:
            return int(counter["value"])
    return None


class TestClient(IntegrationTestBase):
    def test_basic(self):
        process_result = subprocess.run([self.nighthawk_client_path,
                                         "--output-format json", "http://127.0.0.1:10000/"], stdout=subprocess.PIPE, timeout=10)
        self.assertEqual(0, process_result.returncode)
        parsed_json = json.loads(process_result.stdout)
        #print(json.dumps(parsed_json, indent=4, sort_keys=True))
        self.assertEqual(
            25, getCounterValueFromProto(parsed_json, "client.benchmark.http_2xx"))
        self.assertEqual(
            1, getCounterValueFromProto(parsed_json, "client.upstream_cx_destroy"))


if __name__ == '__main__':
    unittest.main()
