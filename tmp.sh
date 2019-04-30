#!/bin/bash

echo "nginx direct"
taskset -c 0 bazel-bin/nighthawk_client  --connections 100 \
--rps 1000 --duration 5 --prefetch-connections http://127.0.0.1 | grep mean

echo "nginx via envoy"
taskset -c 0 bazel-bin/nighthawk_client --connections 100 \
--rps 1000 --duration 5 --prefetch-connections http://127.0.0.1:10000 | grep mean

echo "nginx via haproxy"
taskset -c 0 bazel-bin/nighthawk_client --connections 100 \
--rps 1000 --duration 5 --prefetch-connections http://127.0.0.1:10003 | grep mean

echo "nginx direct - batch size 2"
taskset -c 0 bazel-bin/nighthawk_client  --connections 100 \
--rps 1000 --duration 5 --prefetch-connections --batch-size 100 http://127.0.0.1 | grep mean

echo "nginx via envoy - batch size 2"
taskset -c 0 bazel-bin/nighthawk_client --connections 100 \
--rps 1000 --duration 5 --prefetch-connections --batch-size 2 http://127.0.0.1:10000 | grep mean

echo "nginx via haproxy - batch size 2"
taskset -c 0 bazel-bin/nighthawk_client --connections 100 \
--rps 1000 --duration 5 --prefetch-connections --batch-size 2  http://127.0.0.1:10003 | grep mean


echo "nginx direct - batch size 100"
taskset -c 0 bazel-bin/nighthawk_client  --connections 100 \
--rps 1000 --duration 5 --prefetch-connections --batch-size 2 http://127.0.0.1 | grep mean

echo "nginx via envoy - batch size 100"
taskset -c 0 bazel-bin/nighthawk_client --connections 100 \
--rps 1000 --duration 5 --prefetch-connections --batch-size 100 http://127.0.0.1:10000 | grep mean

echo "nginx via haproxy - batch size 100"
taskset -c 0 bazel-bin/nighthawk_client --connections 100 \
--rps 1000 --duration 5 --prefetch-connections --batch-size 100  http://127.0.0.1:10003 | grep mean
