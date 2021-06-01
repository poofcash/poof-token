// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./NomResolve.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Airdrop is NomResolve {
  struct Recipient {
    address to;
    uint256 amount;
  }

  constructor(bytes32 tokenAddress, Recipient[] memory targets) {
    IERC20 token = IERC20(resolve(tokenAddress));
    require(token.balanceOf(address(this)) > 0, "Balance is 0, airdrop already done");
    for (uint256 i = 0; i < targets.length; i++) {
      token.transfer(targets[i].to, targets[i].amount);
    }
    selfdestruct(payable(0));
  }
}
