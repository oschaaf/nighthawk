import http.client
import json
import logging
import os
import socket
import subprocess
import sys
import random
import tempfile
import threading
import time
from string import Template

from common import IpVersion


class TestServerBase(object):
  """
    Base class for running a server in a separate process.
    """

  def __init__(self, server_binary_path, config_template_path, server_ip, ip_version,
               server_binary_config_path_arg, parameters):
    assert ip_version != IpVersion.UNKNOWN
    self.ip_version = ip_version
    self.server_binary_path = server_binary_path
    self.config_template_path = config_template_path
    self.server_thread = threading.Thread(target=self.serverThreadRunner)
    self.server_process = None
    self.server_ip = server_ip
    self.socket_type = socket.AF_INET6 if ip_version == IpVersion.IPV6 else socket.AF_INET
    self.server_port = -1
    self.admin_port = -1
    self.admin_address_path = ""
    self.instance_id = str(random.randint(1,1024*1024*1024))
    self.parameters = parameters
    self.server_binary_config_path_arg = server_binary_config_path_arg

  def serverThreadRunner(self):
    self.parameters["server_ip"] = self.server_ip

    with open(self.config_template_path) as f:
      config = Template(f.read())
      config = config.substitute(self.parameters)

    parameterized_config_path = None
    with tempfile.NamedTemporaryFile(mode="w", delete=False, suffix=".yaml") as tmp:
      parameterized_config_path = tmp.name
      tmp.write(config)
    with tempfile.NamedTemporaryFile(mode="w", delete=False, suffix=".adminpath") as tmp:
      self.admin_address_path = tmp.name

    args = [
        self.server_binary_path, self.server_binary_config_path_arg, parameterized_config_path,
        "-l", "error", "--base-id", self.instance_id, "--admin-address-path", self.admin_address_path
    ]
    logging.info("Test server popen() args: [%s]" % args)
    self.server_process = subprocess.Popen(args)
    self.server_process.communicate()

  def waitUntilServerListening(self):
    with socket.socket(self.socket_type, socket.SOCK_STREAM) as sock:
      sock.settimeout(1)
      tries = 10
      while tries > 0:
        time.sleep(0.5)
        tries -= 1
        with open(self.admin_address_path) as admin_address_file:
          admin_address = admin_address_file.read()
          self.admin_port = admin_address.split(":")[1]
          admin_conn = http.client.HTTPConnection(admin_address)
          admin_conn.request('GET', '/listeners?format=json')
          admin_response = admin_conn.getresponse()
          if not admin_response.status == 200:
            return False
          listeners = json.loads(admin_response.read().decode('utf-8'))
          print (str(listeners))
          self.server_port = listeners["listener_statuses"][0]["local_address"]["socket_address"]["port_value"]
          print ("@@" + str(self.server_port))

        if sock.connect_ex((self.server_ip, self.server_port)) == 0:
          return True
      logging.error("Timeout while waiting for server listener at %s:%s to accept connections.",
                    self.server_ip, self.server_port)
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

  def __init__(self,
               server_binary_path,
               config_template_path,
               server_ip,
               ip_version,
               parameters=dict()):
    super(NighthawkTestServer, self).__init__(server_binary_path, config_template_path, server_ip,
                                              ip_version, "--config-path", parameters)
