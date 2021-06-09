// SPDX-License-Identifier: MIT

pragma solidity ^0.8.3;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";

/**
 * A linear release cycle with a start and end date
 */
contract LinearReleaseSchedule {
  using SafeMath for uint256;

  /**
   * Release schedule start time
   */
  uint256 public immutable startTimestamp;
  /**
   * Release schedule end time
   */
  uint256 public immutable endTimestamp;
  /**
   * The total amount to release
   */
  uint256 public immutable amount;

  /**
   * @param startTimestamp_ When the schedule starts
   * @param endTimestamp_ When the schedule ends
   * @param amount_ Total amount to emit during the schedule
   */ constructor(
    uint256 startTimestamp_,
    uint256 endTimestamp_, uint256 amount_
  ) {
    startTimestamp = startTimestamp_;
    endTimestamp = endTimestamp_;
    amount = amount_;
  }

  // @dev Get the amount of tokens available for a given timestamp
  // @param fromTimestamp The timestamp to query
  // @return Total number of tokens available at time `fromTimestamp`
  function getCumulativeTokens(uint256 fromTimestamp) external view returns (uint256) {
    if (fromTimestamp <= startTimestamp) {
      return 0;
    }
    if (fromTimestamp >= endTimestamp) {
      return amount;
    }

    uint256 timeElapsed = fromTimestamp - startTimestamp;
    uint256 duration = endTimestamp.sub(startTimestamp);

    return amount.mul(timeElapsed).div(duration);
  }
}
