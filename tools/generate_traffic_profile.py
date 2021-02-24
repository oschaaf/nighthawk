# run with bazel build //tools:generate_traffic_profile && bazel-bin/tools/generate_traffic_profile

from  api.request_source import service_pb2

response = service_pb2.RequestStreamResponse()

foo = response.request_specifier


print("hey")
foo.method.value = "POST"
print(str(foo))

print(response.SerializeToString())
