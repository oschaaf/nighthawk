#! /bin/bash

taskset -c 0 bazel-bin/nighthawk_client --concurrency auto --rps 15000 --output-format json --duration 30 127.0.0.1:10000 > 1.json
taskset -c 0 bazel-bin/nighthawk_client --concurrency auto --rps 15000 --output-format json --duration 30 127.0.0.1:10001 > 2.json
