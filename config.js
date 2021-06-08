const {toWei} = require('web3-utils')

module.exports = {
  poof: {
    name: 'POOF',
    address: '0x8d1f9B9e0F672E2a320Ee0B629C9dB58ceeA945c',
    cap: toWei('100000000'),
    distribution: {
      airdrop: {to: 'voucher', amount: toWei('70000')},
      miningV2: {to: 'rewardSwap', amount: toWei('42000000')},
      releasePoof: {to: 'releasePoof', amount: toWei('57930000')},
    },
  },
  releasePoof: {
    name: 'rPOOF',
    address: '0x0cfD91652bEC47915d3Ec4a94B46709A0fc15668',
    releaseStart: 1627920000, // August 2nd, 2021
    cliffDuration: 0, // No cliff
    releaseEnd: 1722268800, // July 29, 2024
  },
  timelockGov: {
    name: 'PoofGovTimelock',
    address: '0xe7273A2E109A62738279e01Bc999881190C56B18',
  },
  timelockReserve: {
    name: 'PoofReserveTimelock',
    address: '0xe7273A2E109A62738279e01Bc999881190C56B18',
  },
  airdrop: {
    weights: {
      POOF: 10,
      LOCKED_GOLD: 5,
      TORNADO: 4,
    },
  },
  governance: {
    name: 'PoofGov',
    address: '0x51cA2708D6b6dD610771cAA7b82240673dC9458B',
    votingPeriod: 51840, // ~3 days in blocks
    votingDelay: 17280, // ~1 day in blocks
    proposalThreshold: toWei('1000000'), // 1% of all tokens
  },
  governanceImpl: {
    name: 'PoofGovImpl',
    address: '0x8a535AeDd49761199ec8670F724D1dcC6C2D070f',
  },
  voucher: {
    name: 'PoofVoucher',
    address: '0xFCDbF13b8fe9774EbdBb15DED5de71cc55027317',
    duration: 2592000 * 6, // 6 months
  },
  miningV2: {
    name: 'PoofMiner',
    address: '0x643902397cC5D6B51Fa7e106cFCc4D0C6adf11Cb',
    releaseStart: 1627920000, // August 2nd, 2021
    firstPeriodDistribution: toWei('21333333'),
    periodDurationInSeconds: 15724800,
    numPeriods: 6,
    rates: {
      netId42220: [
        // TODO: Update for pCELO
        {instance: '0xD3a07CdC50F4D7C6735783E72a8d3016C2A35F42', value: '10'},
        {instance: '0xFF81b5492019B4DF3f8DB3Ba55aa1c1F2c7a747d', value: '20'},
        {instance: '0x0b35A116B68860101bcD3bB4E1138aF684a0C66D', value: '50'},
        {instance: '0x9F5431380c04F80f07Bd7DB7785491Fe825084D1', value: '400'},
      ],
      netId44787: [
        // TODO: Update for pCELO
        // [
        //   '0x4D74124b70Dc84dc6828FCF5FB3B9d205ec52C03',
        //   ['0xf194afdf50b03e69bd7d057c1aa9e10c9954e4c9', '2'],
        // ],
        // {
        //   addr: '0x61BADEbF571E302c51a40bB6b5A4E5963d990ab2',
        //   instance: ['0xf194afdf50b03e69bd7d057c1aa9e10c9954e4c9', '2'],
        // },
        {
          addr: '0x4D74124b70Dc84dc6828FCF5FB3B9d205ec52C03',
          instance: {token: '0xf194afdf50b03e69bd7d057c1aa9e10c9954e4c9', state: '2'},
          value: '10',
        },
        {
          addr: '0x61BADEbF571E302c51a40bB6b5A4E5963d990ab2',
          instance: {token: '0xf194afdf50b03e69bd7d057c1aa9e10c9954e4c9', state: '2'},
          value: '20',
        },
      ],
    },
  },
  rewardSwap: {
    name: 'PoofRewardSwap',
    address: '0x2C2D7cD483FC43c22559Ae354D454A950b3bc9e9',
    poolWeight: 1e11,
  },
  tornadoTrees: {
    name: 'PoofTrees',
    address: '0x803Aa900D9A40EE3e44bEaA5C4bD81Be52af9A1e',
    levels: 20,
  },
  tornadoProxy: {
    name: 'PoofProxy',
    address: '0x1F1338adA4Aa5FBad065B10F8AfCa6B2D468E6c9',
  },
  rewardVerifier: {
    name: 'PoofRewardVerifier',
    address: '0xe0E6594Cae8e09aA0D88fc4BC308259E7fE7e0b6',
  },
  treeUpdateVerifier: {
    name: 'PoofTreeVerifier',
    address: '0xb317397a183Fbf8366c12A115e5AB71c1F0Cba73',
  },
  withdrawVerifier: {
    name: 'PoofWithdrawVerifier',
    address: '0x99592cAdf5607150E75838002799FA2C36b73747',
  },
  poseidonHasher2: {
    name: 'PoofPoseidon2',
    address: '0x7EABdBF8d845f499b519eba012535161E29e4ed1',
  },
  poseidonHasher3: {
    name: 'PoofPoseidon3',
    address: '0xf990B0e2c30e0136C7F5A163A51deC409051C28b',
  },
  deployer: {address: '0xfcbbd4CA98C21013F4F27993689D849e8D46FBa6'},
  vesting: {
    // TODO
  },
  feeManager: {
    netId42220: {
      address: '',
    },
    netId44787: {
      address: '',
    },
  },
  instances: {
    netId42220: {
      celo: {
        instanceAddress: {
          0.1: '0xD3a07CdC50F4D7C6735783E72a8d3016C2A35F42',
          1: '0xFF81b5492019B4DF3f8DB3Ba55aa1c1F2c7a747d',
          10: '0x0b35A116B68860101bcD3bB4E1138aF684a0C66D',
          100: '0x9F5431380c04F80f07Bd7DB7785491Fe825084D1',
        },
        tokenAddress: '0x471ece3750da237f93b8e339c536989b8978a438',
        symbol: 'CELO',
        decimals: 18,
      },
    },
    netId44787: {
      celo: {
        instanceAddress: {
          0.1: '0x4D74124b70Dc84dc6828FCF5FB3B9d205ec52C03',
          1: '0x61BADEbF571E302c51a40bB6b5A4E5963d990ab2',
        },
        tokenAddress: '0xf194afdf50b03e69bd7d057c1aa9e10c9954e4c9',
        symbol: 'CELO',
        decimals: 18,
      },
    },
  },
}
