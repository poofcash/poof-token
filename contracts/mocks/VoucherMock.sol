// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

import "../Voucher.sol";
import "./Timestamp.sol";

contract VoucherMock is Voucher, Timestamp {
  constructor(
    address _poof,
    address _governance,
    uint256 _duration,
    Recipient[] memory _airdrops
  ) Voucher(_poof, _governance, _duration, _airdrops) {}

  function blockTimestamp() public view override(Timestamp, Voucher) returns (uint256) {
    return Timestamp.blockTimestamp();
  }
}
