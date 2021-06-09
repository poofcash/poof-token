// SPDX-License-Identifier: MIT

pragma solidity ^0.8.3;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "./LinearReleaseSchedule.sol";

/**
 * A token allocator that allocates on a linear release schedule for exactly one beneficiary
 */
contract TokenAllocator is LinearReleaseSchedule {
  using SafeMath for uint256;
  using SafeERC20 for IERC20;

  IERC20 public immutable token;

  address public immutable beneficiary;

  uint256 public amountClaimed;

  // @param startTimestamp_ When allocator begins
  // @param endTimestamp_ When allocator ends
  // @param amount_ How much to allocate
  // @param token_ The token to allocate
  // @param beneficiary_ The receiver of the allocated tokens
  constructor (
    uint256 startTimestamp_,
    uint256 endTimestamp_,
    uint256 amount_,
    IERC20 token_,
    address beneficiary_
  ) LinearReleaseSchedule(startTimestamp_, endTimestamp_, amount_) {
    require(token_.balanceOf(address(this)) == amount_, "Incorrect balance for token allocator");
    token = token_;
    beneficiary = beneficiary_;
  }

  // @dev Transfers claimable tokens to the beneficiary
  function claim() external {
    uint256 claimable = getClaimable();
    if (claimable == 0) {
      return;
    }
    token.safeTransfer(beneficiary, claimable);
    amountClaimed = amountClaimed.add(claimable);
  }

  // @dev Number of tokens available to be claimed
  function getClaimable() public view returns (uint256) {
    uint256 currentTimestamp = blockTimestamp();
    uint256 released = this.getCumulativeTokens(currentTimestamp);
    if (released <= amountClaimed) {
      return 0;
    }
    return released.sub(amountClaimed);
  }

  function blockTimestamp() public view virtual returns (uint256) {
    return block.timestamp;
  }
}
