// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@nomspace/nomspace/contracts/interfaces/INom.sol";
import "@nomspace/nomspace/contracts/interfaces/IFeeModule.sol";
import "@nomspace/nomspace/contracts/Nom.sol";

contract NomMock is Nom, IFeeModule {
  uint256 public chainId;

  constructor() Nom(IFeeModule(address(this))) {}

  function pay(address, uint256) override external pure returns (bool success) {
    return true;
  }
}
