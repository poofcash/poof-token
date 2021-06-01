// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "../Airdrop.sol";

contract AirdropMock is Airdrop {
  constructor(bytes32 tokenAddress, Recipient[] memory targets) Airdrop(tokenAddress, targets) {}

  function resolve(bytes32 addr) public pure override returns (address) {
    return address(uint160(uint256(addr) >> (12 * 8)));
  }
}
