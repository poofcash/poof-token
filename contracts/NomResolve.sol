// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@nomspace/nomspace/contracts/interfaces/INom.sol";

contract NomResolve {
  function resolve(bytes32 name) public view virtual returns (address) {
    INom nom = INom(
      computeChainId() == 42220 ? 0xABf8faBbC071F320F222A526A2e1fBE26429344d : 0x36C976Da6A6499Cad683064F849afa69CD4dec2e
    );
    return nom.resolve(name);
  }

  function computeChainId() internal view returns (uint256) {
    uint256 chainId;
    assembly {
      chainId := chainid()
    }
    return chainId;
  }
}
