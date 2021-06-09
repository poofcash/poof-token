const {toWei} = require('web3-utils')

module.exports = {
  poof: {
    name: 'POOF',
    address: '',
    cap: toWei('100000000'),
    distribution: {
      miningV2: {to: 'rewardSwap', amount: toWei('42000000')},
      releasePoof: {to: 'releasePoof', amount: toWei('30000000')},
      governance: {to: 'allocatorGov', amount: toWei('25930000')},
      reserve: {to: 'allocatorReserve', amount: toWei('8000000')},
      liquidity: {to: 'timelockLiquidity', amount: toWei('2000000')},
      airdrop: {to: 'voucher', amount: toWei('70000')},
    },
  },
  releasePoof: {
    name: 'rPOOF',
    address: '',
    releaseStart: 1627920000, // August 2nd, 2021
    cliffDuration: 0, // No cliff
    releaseEnd: 1722268800, // July 29, 2024
  },
  timelockGov: {
    name: 'PoofGovTimelock',
    address: '',
  },
  timelockReserve: {
    name: 'PoofReserveTimelock',
    address: '',
  },
  timelockLiquidity: {
    name: 'PoofLiquidityTimelock',
    address: '',
  },
  allocatorGov: {
    name: 'PoofGovAllocator',
    releaseStart: 1627920000, // August 2nd, 2021
    releaseEnd: 1722268800, // July 29, 2024
  },
  allocatorReserve: {
    name: 'PoofReserveAllocator',
    releaseStart: 1627920000, // August 2nd, 2021
    releaseEnd: 1722268800, // July 29, 2024
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
    address: '',
    votingPeriod: 51840, // ~3 days in blocks
    votingDelay: 17280, // ~1 day in blocks
    proposalThreshold: toWei('1000000'), // 1% of all tokens
  },
  governanceImpl: {
    name: 'PoofGovImpl',
    address: '',
  },
  voucher: {
    name: 'PoofVoucher',
    address: '',
    duration: 2592000 * 6, // 6 months
  },
  miningV2: {
    name: 'PoofMiner',
    address: '',
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
    address: '',
    poolWeight: 1e11,
  },
  tornadoTrees: {
    name: 'PoofTrees',
    address: '',
    levels: 20,
  },
  tornadoProxy: {
    name: 'PoofProxy',
    address: '',
  },
  rewardVerifier: {
    name: 'PoofRewardVerifier',
    address: '',
  },
  treeUpdateVerifier: {
    name: 'PoofTreeVerifier',
    address: '',
  },
  withdrawVerifier: {
    name: 'PoofWithdrawVerifier',
    address: '',
  },
  poseidonHasher2: {
    name: 'PoofPoseidon2',
    address: '',
  },
  poseidonHasher3: {
    name: 'PoofPoseidon3',
    address: '',
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
