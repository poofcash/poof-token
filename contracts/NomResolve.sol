// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@nomspace/nomspace/contracts/interfaces/INom.sol";

contract NomResolve {
  function resolve(bytes32 name) public view virtual returns (address) {
    INom nom = INom(
      computeChainId() == 42220 ? 0xF88fc5616E20Bab3E765ea8c5FCB182320325Ae1 : 0xd02b161c538902CF56Ad05062809F9130ba74B22 
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
