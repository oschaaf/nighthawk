#echo "nginx direct"
#taskset -c 0 bazel-bin/nighthawk_client  --connections 100 \
#--rps 4000 --batch-size 100 --duration 5 --prefetch-connections http://127.0.0.1


###
echo "nginx via envoy"
taskset -c 0 bazel-bin/nighthawk_client --connections 100 \
--rps 4000 --burst-size 100 --duration 5 --prefetch-connections http://127.0.0.1:10000

####

echo "nginx via haproxy"
taskset -c 0 bazel-bin/nighthawk_client --connections 100 \

--rps 4000 --burst-size 100 --duration 5 --prefetch-connections http://127.0.0.1:10003



