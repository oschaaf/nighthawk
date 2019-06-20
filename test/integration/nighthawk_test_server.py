import os
import time
import sys
import subprocess
import threading
import socket
import json


class TestServerBase():
    def __init__(self, server_binary_path, config_template_path, server_ip, server_port, ipv6):
        self.ipv6 = ipv6
        self.server_binary_path = server_binary_path
        self.config_template_path = config_template_path
        self.server_thread = threading.Thread(target=self.serverThreadRunner)
        self.server_process = None
        self.server_ip = server_ip
        self.socket_type = socket.AF_INET6 if ipv6 else socket.AF_INET
        self.server_port = server_port

    def serverThreadRunner(self):
        with open(self.config_template_path) as f:
            config = f.read()
            config = config.replace(
                "{{ server_ip }}", self.server_ip)
            config = config.replace("{{ server_port }}", str(self.server_port))

        # TODO(oschaaf): write the config to a tmp file, for better x-server compatibility.
        self.server_process = subprocess.Popen(
            [self.server_binary_path, "--config-yaml",  config])
        self.server_process.communicate()

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

    def start(self):
        self.server_thread.daemon = True
        self.server_thread.start()
        return self.waitForServerReady()

    def stop(self):
        self.server_process.terminate()
        self.server_thread.join()
        return self.server_process.returncode


class NighthawkTestServer(TestServerBase):
    def __init__(self, server_binary_path, config_template_path, server_ip, server_port, ipv6):
        super(NighthawkTestServer, self).__init__(server_binary_path,
                                                  config_template_path, server_ip, server_port, ipv6)
