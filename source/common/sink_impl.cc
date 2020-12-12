#include "common/sink_impl.h"

#include <filesystem>
#include <fstream>

#include "external/envoy/source/common/common/logger.h"

namespace Nighthawk {

// TODO: security aspects of filename?
// TODO: compute/validated aggregated result from multiple pieces.
absl::Status FileSinkImpl::StoreExecutionResultPiece(
    const ::nighthawk::client::ExecutionResponse& response) const {
  std::string execution_id = response.execution_id();
  std::filesystem::create_directories("/tmp/nh/" + std::string(execution_id) + "/");
  char name_buffer[L_tmpnam];
  // TODO(oschaaf): tmpname complaint from compiler, dangerous. Portable mkstemp?
  if (!std::tmpnam(name_buffer)) {
    ENVOY_LOG_MISC(error, "Failure creating temp file '{}'", name_buffer);
    return absl::Status(absl::StatusCode::kInternal, "Failure creating temp file");
  }

  std::ofstream ofs(name_buffer, std::ios_base::out | std::ios_base::binary);
  if (!response.SerializeToOstream(&ofs)) {
    ENVOY_LOG_MISC(error, "Failure writing to tmp file '{}'", name_buffer);
    return absl::Status(absl::StatusCode::kNotFound, "Failure writing to temp file");
  }
  ofs.close();
  std::filesystem::path filesystem_path(name_buffer);
  try {
    const std::string new_name =
        "/tmp/nh/" + std::string(execution_id) + "/" + std::string(filesystem_path.filename());
    std::filesystem::rename(name_buffer, new_name);
    ENVOY_LOG_MISC(info, "Stored '{}'.", new_name);
  } catch (std::exception& ex) {
    ENVOY_LOG_MISC(error, "Failure renaming temp file '{}': {}", name_buffer, ex.what());
    return absl::Status(absl::StatusCode::kInternal, ex.what());
  }
  return absl::Status();
}

const absl::StatusOr<std::vector<::nighthawk::client::ExecutionResponse>>
FileSinkImpl::LoadExecutionResult(absl::string_view execution_id) const {
  std::filesystem::path filesystem_directory_path("/tmp/nh/" + std::string(execution_id) + "/");
  std::vector<::nighthawk::client::ExecutionResponse> responses;
  for (const auto& it : std::filesystem::directory_iterator(filesystem_directory_path)) {
    ::nighthawk::client::ExecutionResponse response;
    std::ifstream ifs(it.path(), std::ios_base::binary);
    if (!response.ParseFromIstream(&ifs)) {
      ENVOY_LOG_MISC(error, "Failure reading/parsing '{}'.", it.path());
      return absl::Status(absl::StatusCode::kInternal,
                          fmt::format("Failure reading/parsing '{}'.", it.path()));
    } else {
      ENVOY_LOG_MISC(info, "Loaded '{}'.", it.path());
    }
    responses.push_back(response);
  }
  return responses;
}

} // namespace Nighthawk
