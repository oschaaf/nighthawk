import os
import time
import sys
import subprocess
import threading
import socket
import json
from string import Template
import tempfile
import logging


class TestServerBase(object):
    def __init__(self, server_binary_path, config_template_path, server_ip, server_port, ipv6, parameters):
        self.ipv6 = ipv6
        self.server_binary_path = server_binary_path
        self.config_template_path = config_template_path
        self.server_thread = threading.Thread(target=self.serverThreadRunner)
        self.server_process = None
        self.server_ip = server_ip
        self.socket_type = socket.AF_INET6 if ipv6 else socket.AF_INET
        self.server_port = server_port
        self.parameters = parameters

    def serverThreadRunner(self):
        self.parameters["server_ip"] = self.server_ip
        self.parameters["server_port"] = self.server_port

        with open(self.config_template_path) as f:
            config = Template(f.read())
            config = config.substitute(self.parameters)

        parameterized_config_path = None
        with tempfile.NamedTemporaryFile(mode="w", delete=False, suffix=".yaml") as tmp:
            parameterized_config_path = tmp.name
            tmp.write(config)

        args = [self.server_binary_path,
                "--config-path", parameterized_config_path]
        logging.info("Popen args: [%s]" % args)
        # TODO(oschaaf): commandline is server specific and should be passed in
        self.server_process = subprocess.Popen(args)
        self.server_process.communicate()

    def waitForServerReady(self):
        sock = socket.socket(self.socket_type, socket.SOCK_STREAM)
        sock.settimeout(1)
        tries = 10
        while tries > 0:
            time.sleep(0.5)
            tries -= 1
            if sock.connect_ex((self.server_ip, self.server_port)) == 0:
                sock.close()
                return True
        logging.error(
            "Timeout while waiting for server listener at %s:%s to accept connections.", self.server_ip, self.server_port)
        return False

    def start(self):
        self.server_thread.daemon = True
        self.server_thread.start()
        return self.waitForServerReady()

    def stop(self):
        self.server_process.terminate()
        self.server_thread.join()
        return self.server_process.returncode


class NighthawkTestServer(TestServerBase):
    def __init__(self, server_binary_path, config_template_path, server_ip, server_port, ipv6, parameters=dict()):
        super(NighthawkTestServer, self).__init__(server_binary_path,
                                                  config_template_path, server_ip, server_port, ipv6, parameters)
