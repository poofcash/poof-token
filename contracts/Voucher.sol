// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "./NomResolve.sol";

contract Voucher is ERC20("PoofCash voucher for POOF tokens", "vPOOF"), NomResolve {
  using SafeMath for uint256;
  using SafeERC20 for IERC20;

  IERC20 public immutable poof;
  uint256 public immutable expiresAt;
  address public immutable governance;
  mapping(address => bool) public allowedTransferee;

  struct Recipient {
    address to;
    uint256 amount;
  }

  constructor(
    bytes32 _poof,
    bytes32 _governance,
    uint256 _duration,
    Recipient[] memory _airdrops
  ) {
    poof = IERC20(resolve(_poof));
    governance = resolve(_governance);
    expiresAt = blockTimestamp().add(_duration);
    for (uint256 i = 0; i < _airdrops.length; i++) {
      _mint(_airdrops[i].to, _airdrops[i].amount);
      allowedTransferee[_airdrops[i].to] = true;
    }
  }

  function redeem() external {
    require(blockTimestamp() < expiresAt, "Airdrop redeem period has ended");
    uint256 amount = balanceOf(msg.sender);
    _burn(msg.sender, amount);
    poof.safeTransfer(msg.sender, amount);
  }

  function rescueExpiredTokens() external {
    require(blockTimestamp() >= expiresAt, "Airdrop redeem period has not ended yet");
    poof.safeTransfer(governance, poof.balanceOf(address(this)));
  }

  function _beforeTokenTransfer(
    address from,
    address to,
    uint256 amount
  ) internal override {
    super._beforeTokenTransfer(from, to, amount);
    require(to == address(0) || from == address(0) || allowedTransferee[from], "ERC20: transfer is not allowed");
  }

  function blockTimestamp() public view virtual returns (uint256) {
    return block.timestamp;
  }
}
