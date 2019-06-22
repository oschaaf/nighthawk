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
    """
    Base class for running a server in a separate process.
    """

    def __init__(self, server_binary_path, config_template_path, server_ip, server_port, ipv6, server_binary_config_path_arg, parameters):
        self.ipv6 = ipv6
        self.server_binary_path = server_binary_path
        self.config_template_path = config_template_path
        self.server_thread = threading.Thread(target=self.serverThreadRunner)
        self.server_process = None
        self.server_ip = server_ip
        self.socket_type = socket.AF_INET6 if ipv6 else socket.AF_INET
        self.server_port = server_port
        self.parameters = parameters
        self.server_binary_config_path_arg = server_binary_config_path_arg

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
                self.server_binary_config_path_arg, parameterized_config_path]
        logging.info("Test server popen() args: [%s]" % args)
        self.server_process = subprocess.Popen(args)
        self.server_process.communicate()

    def waitUntilServerListening(self):
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
        return self.waitUntilServerListening()

    def stop(self):
        self.server_process.terminate()
        self.server_thread.join()
        return self.server_process.returncode


class NighthawkTestServer(TestServerBase):
    """
    Will run the Nighthawk test server in a separate process. Passes in the right cli-arg to point it to its
    configuration. For, say, NGINX this would be '-c' instead.
    """

    def __init__(self, server_binary_path, config_template_path, server_ip, server_port, ipv6, parameters=dict()):
        super(NighthawkTestServer, self).__init__(server_binary_path,
                                                  config_template_path, server_ip, server_port, ipv6, "--config-path", parameters)
