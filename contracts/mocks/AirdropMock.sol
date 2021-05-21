// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
pragma experimental ABIEncoderV2;

import "../Airdrop.sol";

contract AirdropMock is Airdrop {
  constructor(address tokenAddress, Recipient[] memory targets) Airdrop(tokenAddress, targets) {}
}
