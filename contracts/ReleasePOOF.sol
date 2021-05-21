// SPDX-License-Identifier: MIT

pragma solidity ^0.8.3;

import "@ubeswap/governance/contracts/voting/LinearReleaseToken.sol";

/**
 * Released Ube token.
 */
contract ReleasePOOF is LinearReleaseToken {
    constructor(
        address owner_,
        address poof_,
        uint96 amount_,
        uint256 startTime_,
        uint256 cliffEndTime_,
        uint256 endTime_
    )
        LinearReleaseToken(
            "Release POOF",
            "rPOOF",
            18,
            owner_,
            poof_,
            amount_,
            startTime_,
            cliffEndTime_,
            endTime_
        )
    // solhint-disable-next-line no-empty-blocks
    {
        // Do nothing
    }
}
