#pragma once

#include <memory>

#include "envoy/common/pure.h"

namespace Nighthawk {

class TerminationPredicate;

using TerminationPredicatePtr = std::unique_ptr<TerminationPredicate>;

/**
 * Determines if and how a test is terminated.
 */
class TerminationPredicate {
public:
  enum class Status {
    PROCEED,   // indicates a test should proceed
    TERMINATE, // indicates successful test termination
    FAIL       // indicates unsuccessful test termination
  };

  virtual ~TerminationPredicate() = default;

  /**
   * Links a child predicated. Will be evaluated first when evaluateChain()
   * is called.
   *
   * @param child the child predicate to link.
   */
  virtual void link(TerminationPredicatePtr&& child) PURE;

  /**
   * Recursively evaluates chain of linked predicates, this instance last.
   * If any linked element returns anything other then PROCEED that status will
   * be returned.
   *
   * @return Status as determined by the chain of predicates.
   */
  virtual Status evaluateChain() PURE;

  /**
   * @return Status as determined by this instance.
   */
  virtual Status evaluate() PURE;
};

} // namespace Nighthawk