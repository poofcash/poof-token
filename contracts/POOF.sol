// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@ubeswap/governance/contracts/voting/TransferrableVotingToken.sol";
import "./NomResolve.sol";

contract POOF is TransferrableVotingToken, NomResolve {
  using SafeMath for uint256;
  using SafeERC20 for IERC20;

  /// @notice The maximum supply of Ube Tokens.
  uint96 public constant MAX_SUPPLY = 100_000_000e18;

  struct Recipient {
    bytes32 to;
    uint256 amount;
  }

  /**
   * @notice Construct a new POOF token
   * Note: this contract doesn't specify an initial minter, so there is no way new
   * tokens can get created.
   */
  constructor(
    Recipient[] memory recipients
  ) TransferrableVotingToken("PoofCash", "POOF", 18, 0, address(this)) {
    uint256 total = 0;
    for(uint i = 0; i < recipients.length; i++) {
      address resolution = resolve(recipients[i].to);
      total = total.add(recipients[i].amount);
      _mintVotes(resolution, uint96(recipients[i].amount));
    }
    require(total == MAX_SUPPLY, "Should not have remaining POOF in the token contract");
  }
}
