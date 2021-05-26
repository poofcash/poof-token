// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@ubeswap/governance/contracts/voting/TransferrableVotingToken.sol";

contract POOF is TransferrableVotingToken {
  /// @notice The maximum supply of Ube Tokens.
  uint96 public constant MAX_SUPPLY = 100_000_000e18;

  /**
   * @notice Construct a new POOF token
   * Note: this contract doesn't specify an initial minter, so there is no way new
   * tokens can get created.
   * @param _initialOwner The initial account to grant all the tokens
   */
  constructor(address _initialOwner) TransferrableVotingToken("PoofCash", "POOF", 18, MAX_SUPPLY, _initialOwner) {}
}
