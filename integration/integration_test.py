"""@package integration_test.py
Entry point for our integration testing
"""

import logging
import os
import sys
import unittest

import test_integration_basics
from common import IpVersion, NighthawkException
from integration_test_base import IntegrationTestBase


def determineIpVersionsFromEnvironment():
  supported = []
  versions = os.environ.get("ENVOY_IP_TEST_VERSIONS", "all")
  if versions == "v4only":
    supported.append(IpVersion.ipv4)
  elif versions == "v6only":
    supported.append(IpVersion.ipv6)
  elif versions == "all":
    supported.append(IpVersion.ipv4)
    supported.append(IpVersion.ipv6)
  else:
    raise NighthawkException("Unknown ip version: '%s'" % versions)
  return supported


def runTests(ip_version):
  IntegrationTestBase.ip_version = ip_version
  logging.info("Running %s integration tests." %
               ("ipv6" if IntegrationTestBase.ip_version == IpVersion.ipv6 else "ipv4"))
  res = unittest.TextTestRunner(verbosity=2).run(
      unittest.TestLoader().loadTestsFromModule(test_integration_basics))
  return res.wasSuccessful()


if __name__ == '__main__':
  logging.basicConfig(stream=sys.stderr, level=logging.DEBUG)
  ip_versions = determineIpVersionsFromEnvironment()
  assert (len(ip_versions) > 0)
  ok = True

  for ip_version in ip_versions:
    ok = ok and runTests(ip_version)

  exit(0 if ok else 1)
