#!/usr/bin/env python2.7
"""@package integration_test.py
Entry point for our integration testing
"""

import logging
import os
import sys
import unittest
from integration_test_base import IntegrationTestBase

import test_integration_basics


def determineIpVersionsFromEnvironment():
  ipv4 = True
  ipv6 = True
  versions = os.environ.get("ENVOY_IP_TEST_VERSIONS", "all")
  if versions == "v4only":
    ipv6 = False
  elif versions == "v6only":
    ipv4 = False
  elif versions == "all":
    pass
  else:
    raise Exception("Unknown ip version: '%s'" % versions)
  return (ipv4, ipv6)


def runTests(ipv6):
  logging.info("Running %s integration tests." % ("ipv6" if ipv6 else "ipv4"))
  IntegrationTestBase.ipv6 = ipv6
  res = unittest.TextTestRunner(verbosity=2).run(
      unittest.TestLoader().loadTestsFromModule(test_integration_basics))

  return res.wasSuccessful()


if __name__ == '__main__':
  logging.basicConfig(stream=sys.stderr, level=logging.DEBUG)
  (v4, v6) = determineIpVersionsFromEnvironment()
  assert (v4 or v6)
  ok = True
  if v4:
    ok = ok and runTests(False)
  if v6:
    ok = ok and runTests(True)

  exit(0 if ok else 1)
