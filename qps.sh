#! /bin/bash

set -e
set -x

function run_qps {
    taskset -c 0 bazel-bin/nighthawk_client --concurrency auto --connections 1000 --rps $1 \
    --duration 10 --max-pending-requests 0 --open-loop \
    --output-format json 127.0.0.1:10000 > ~/tmp/r2-json-$1-qps.json
}


function run_qps_h2 {
    taskset -c 0-4 bazel-bin/nighthawk_client --h2 --concurrency auto --max-active-requests 100000 --rps $1 \
    --duration 10 --max-pending-requests 0 \
    --output-format json 127.0.0.1:10000 > ~/tmp/json-$1-qps.json
}

function fortio_run_qps {
    taskset -c 0 bazel-bin/nighthawk_client --h2 --concurrency auto --max-active-requests 1000 --rps $1 \
    --duration 10 --max-pending-requests 0 --open-loop \
    --output-format fortio 127.0.0.1:10000 > ~/tmp/fortio-$1-qps.json
}

function fortio__qps_old {
    taskset -c 0 bazel-bin/nighthawk_client --h2 --concurrency auto --max-active-requests 1000000 --rps $1 \
    --duration 10 --max-pending-requests 0 --open-loop --request-header x-envoy-fault-delay-request:500 \
    --output-format fortio 127.0.0.1:10000 > ~/tmp/fortio-$1-qps.json
}


rm ~/tmp/fortio-*.json || true
run_qps 100
run_qps 1000
run_qps 10000
run_qps 15000
#run_qps 25000
#run_qps 50000
#run_qps 100000
