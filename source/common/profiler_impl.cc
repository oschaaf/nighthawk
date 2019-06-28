// Copyright 2018 The Bazel Authors. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

#include "common/profiler_impl.h"

#include <inttypes.h>
#include <stdio.h>
#include <time.h>

namespace Nighthawk {

Task::~Task() {
  Duration duration = GetDuration();
  fprintf(stderr, "Task(%s): %" PRIu64 " calls (%" PRId64 " microseconds)\n", name_, GetCalls(),
          duration.micros_);
}

void StopWatch::PrintAndReset(const char* name) {
  Duration elapsed = ElapsedTime();
  fprintf(stderr, "StopWatch(%s): %" PRId64 " microseconds elapsed\n", name, elapsed.micros_);
  Reset();
}

Ticks Ticks::Now() {
  struct timespec ts = {};
  if (clock_gettime(CLOCK_MONOTONIC, &ts) == -1) {
    // std::string error = GetLastErrorString();
  }
  return {ts.tv_sec * 1000LL * 1000LL * 1000LL + ts.tv_nsec};
}

Duration Duration::FromTicks(const Ticks ticks) { return {ticks.value_ / 1000LL}; }

} // namespace Nighthawk
