// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@nomspace/nomspace/contracts/interfaces/INom.sol";
import "../POOF.sol";
import "./Timestamp.sol";

contract POOFMock is POOF, Timestamp {
  constructor(
    Recipient[] memory recipients
  ) POOF(recipients) {}

  function resolve(bytes32 addr) public pure override returns (address) {
    return address(uint160(uint256(addr) >> (12 * 8)));
  }

  function blockTimestamp() public view override returns (uint256) {
    return Timestamp.blockTimestamp();
  }
}
