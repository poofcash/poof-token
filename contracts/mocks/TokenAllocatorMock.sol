// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

import "../TokenAllocator.sol";
import "./Timestamp.sol";

contract TokenAllocatorMock is TokenAllocator, Timestamp {
  constructor(
    uint256 startTimestamp_,
    uint256 endTimestamp_,
    uint256 amount_,
    IERC20 token_,
    address beneficiary_
  ) TokenAllocator(startTimestamp_, endTimestamp_, amount_, token_, beneficiary_) {}

  function blockTimestamp() public view override(Timestamp, TokenAllocator) returns (uint256) {
    return Timestamp.blockTimestamp();
  }
}

