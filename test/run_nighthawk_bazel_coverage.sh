#!/bin/bash

# derived from test/run_envoy_bazel_coverage.sh over the Envoy repo.

set -e
set -x

[[ -z "${SRCDIR}" ]] && SRCDIR="${PWD}"
[[ -z "${VALIDATE_COVERAGE}" ]] && VALIDATE_COVERAGE=true

echo "Starting run_nighthawk_bazel_coverage.sh..."
echo "    PWD=$(pwd)"
echo "    SRCDIR=${SRCDIR}"
echo "    VALIDATE_COVERAGE=${VALIDATE_COVERAGE}"

# This is the target that will be run to generate coverage data. It can be overridden by consumer
# projects that want to run coverage on a different/combined target.
# Command-line arguments take precedence over ${COVERAGE_TARGET}.
if [[ $# -gt 0 ]]; then
  COVERAGE_TARGETS=$*
elif [[ -n "${COVERAGE_TARGET}" ]]; then
  COVERAGE_TARGETS=${COVERAGE_TARGET}
else
  COVERAGE_TARGETS=//test/...
fi

BAZEL_BUILD_OPTIONS+=" --config=test-coverage --test_tag_filters=-nocoverage --test_env=ENVOY_IP_TEST_VERSIONS=v4only"
bazel coverage ${BAZEL_BUILD_OPTIONS} --test_output=all ${COVERAGE_TARGETS}

COVERAGE_DIR="${SRCDIR}"/generated/coverage
mkdir -p "${COVERAGE_DIR}"

COVERAGE_DATA="${COVERAGE_DIR}/coverage.dat"

cp bazel-out/_coverage/_coverage_report.dat "${COVERAGE_DATA}"

COVERAGE_VALUE=$(genhtml --prefix ${PWD} --output "${COVERAGE_DIR}" "${COVERAGE_DATA}" | tee /dev/stderr | grep lines... | cut -d ' ' -f 4)
COVERAGE_VALUE=${COVERAGE_VALUE%?}

[[ -z "${ENVOY_COVERAGE_DIR}" ]] || rsync -av "${COVERAGE_DIR}"/ "${ENVOY_COVERAGE_DIR}"

if [ "$VALIDATE_COVERAGE" == "true" ]
then
  COVERAGE_THRESHOLD=98.2
  COVERAGE_FAILED=$(echo "${COVERAGE_VALUE}<${COVERAGE_THRESHOLD}" | bc)
  if test ${COVERAGE_FAILED} -eq 1; then
      echo Code coverage ${COVERAGE_VALUE} is lower than limit of ${COVERAGE_THRESHOLD}
      exit 1
  else
      echo Code coverage ${COVERAGE_VALUE} is good and higher than limit of ${COVERAGE_THRESHOLD}
  fi
fi
echo "HTML coverage report is in ${COVERAGE_DIR}/index.html"