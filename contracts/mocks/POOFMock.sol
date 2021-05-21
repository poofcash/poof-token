// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
pragma experimental ABIEncoderV2;

import "../POOF.sol";
import "./Timestamp.sol";

contract POOFMock is POOF, Timestamp {
  uint256 public chainId;

  constructor(address _governance) POOF(_governance) {}

  function blockTimestamp() public view override returns (uint256) {
    return Timestamp.blockTimestamp();
  }
}
