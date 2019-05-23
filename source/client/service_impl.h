#include "client/service.grpc.pb.h"

#include "common/common/logger.h"

#include <condition_variable>
#include <mutex>
#include <queue>

namespace Nighthawk {
namespace Client {

template <class T> class BlockingQueue {
public:
  void Push(T element) {
    std::lock_guard<std::mutex> lock(mutex_);
    queue_.push(element);
    condvar_.notify_one();
  }

  T Pop() {
    std::unique_lock<std::mutex> lock(mutex_);
    while (queue_.empty()) {
      condvar_.wait(lock);
    }
    T element = queue_.front();
    queue_.pop();
    return element;
  }

  bool IsEmpty() {
    std::unique_lock<std::mutex> lock(mutex_);
    return queue_.empty();
  }

private:
  std::queue<T> queue_;
  mutable std::mutex mutex_;
  std::condition_variable condvar_;
};

class ServiceImpl final : public nighthawk::client::NighthawkService::Service,
                          public Envoy::Logger::Loggable<Envoy::Logger::Id::main> {

public:
  virtual ::grpc::Status
  SendCommand(::grpc::ServerContext* context,
              ::grpc::ServerReaderWriter<::nighthawk::client::SendCommandResponse,
                                         ::nighthawk::client::SendCommandRequest>* stream) override;

private:
  void NighthawkRunner(nighthawk::client::SendCommandRequest start_request);
  bool EmitResponses(::grpc::ServerReaderWriter<::nighthawk::client::SendCommandResponse,
                                                ::nighthawk::client::SendCommandRequest>* stream);

  BlockingQueue<nighthawk::client::SendCommandRequest> request_queue_;
  BlockingQueue<nighthawk::client::SendCommandResponse> response_queue_;
  std::thread nighthawk_runner_thread_;
};

} // namespace Client
} // namespace Nighthawk