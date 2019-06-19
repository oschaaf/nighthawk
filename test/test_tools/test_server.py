#!/usr/bin/env python3

import sys
import socket
import ssl
import threading
from http.server import HTTPServer, SimpleHTTPRequestHandler, HTTPStatus
import os


class HttpTestRequestHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        self.protocol_version = 'HTTP/1.1'
        self.send_response(200, 'OK')
        self.send_header('content-type', 'plain/text')
        self.end_headers()

        if self.path == '/shutdown':
            assassin = threading.Thread(target=httpd.shutdown)
            assassin.daemon = True
            assassin.start()
            self.wfile.write(b'Shutting down')
        else:
            self.wfile.write(b'Lorem ipsum')


class HTTPServerV6(HTTPServer):
    address_family = socket.AF_INET6


if ':' in sys.argv[1]:
    httpd = HTTPServerV6(
        (sys.argv[1].strip('[]'), 0), HttpTestRequestHandler)
else:
    httpd = HTTPServer((sys.argv[1], 0), HttpTestRequestHandler)

https = sys.argv[2] == "https"

print(httpd.server_port)
sys.stdout.flush()

if https:
    keyfile = os.path.join(
        os.environ["TEST_RUNDIR"], "external/envoy/test/config/integration/certs/serverkey.pem")
    certfile = os.path.join(
        os.environ["TEST_RUNDIR"], "external/envoy/test/config/integration/certs/servercert.pem")
    httpd.socket = ssl.wrap_socket(httpd.socket, server_side=True,  keyfile=keyfile,
                                   certfile=certfile)
httpd.serve_forever()
httpd.socket.close()
