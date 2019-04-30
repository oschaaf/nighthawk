#!/bin/bash

set -e

function cleanup() {
    echo "Cleaning up"
    kill $SRV_PID
    # Kill any other stray child processes.
    kill $(jobs -p)
    rm -r "$WORKING_DIR"
    trap - SIGINT SIGTERM EXIT
}

trap cleanup SIGINT SIGTERM EXIT

WORKING_DIR=$(mktemp -d)
echo "Starting server."

taskset -c 0 envoy --concurrency 1 -l warning --config-path origin-configs/envoy-static-origin.yaml > "$WORKING_DIR/server.log" 2>&1 &
SRV_PID=$!

until $(curl --output /dev/null --silent --head --fail 127.0.0.1:10000); do
    sleep .2
done

echo "Server is up."

set +e
taskset -c 1 ~/code/envoy-perf-vscode/nighthawk/bazel-bin/nighthawk_client 127.0.0.1:10000 > "$WORKING_DIR/client.log" 2>&1 &
NH_PID=$!

echo "Waiting for benchmark"
wait $NH_PID
NH_EXIT_CODE=$?
set -e

if [ $NH_EXIT_CODE != 0 ]; then
    echo "Client returned an error."
else
    echo "Done."
    cat "$WORKING_DIR/client.log"
fi
