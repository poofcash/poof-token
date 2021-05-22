const {toWei} = require('web3-utils')

module.exports = {
  poof: {
    address: '',
    cap: toWei('100000000'),
    pausePeriod: 45 * 24 * 3600, // 45 days
    distribution: {
      airdrop: {to: 'voucher', amount: toWei('500000')},
      miningV2: {to: 'rewardSwap', amount: toWei('42000000')},
      governance: {to: 'vesting.governance', amount: toWei('25400000')},
      team1: {to: 'vesting.team1', amount: toWei('15000000')},
      team2: {to: 'vesting.team2', amount: toWei('15000000')},
    },
  },
  governance: {address: ''},
  governanceImpl: {address: ''},
  voucher: {address: '', duration: 6},
  miningV2: {
    address: '',
    firstPeriodDistribution: toWei('21333333'),
    periodDurationInSeconds: 15724800,
    numPeriods: 6,
    rates: [
      {instance: '', value: '10'},
      {instance: '', value: '20'},
      {instance: '', value: '50'},
      {instance: '', value: '400'},
    ],
  },
  rewardSwap: {address: '', poolWeight: 1e11},
  tornadoTrees: {address: '', levels: 20},
  tornadoProxy: {address: ''},
  rewardVerifier: {address: ''},
  treeUpdateVerifier: {address: ''},
  withdrawVerifier: {address: ''},
  poseidonHasher2: {address: ''},
  poseidonHasher3: {address: ''},
  deployer: {address: ''},
  vesting: {
    team1: {
      address: '',
      cliff: 0,
      duration: 152,
    },
    team2: {
      address: '',
      beneficiary: '',
      cliff: 0,
      duration: 152,
    },
    governance: {
      address: '',
      cliff: 0,
      duration: 152,
    },
  },
  feeManager: {
    netId42220: {
      address: '',
    },
    netId44787: {
      address: '',
    }
  },
  instances: {
    netId42220: {
      celo: {
        instanceAddress: {
          '0.1': '0xD3a07CdC50F4D7C6735783E72a8d3016C2A35F42',
          '1': '0xFF81b5492019B4DF3f8DB3Ba55aa1c1F2c7a747d',
          '10': '0x0b35A116B68860101bcD3bB4E1138aF684a0C66D',
          '100': '0x9F5431380c04F80f07Bd7DB7785491Fe825084D1',
        },
        tokenAddress: "0x471ece3750da237f93b8e339c536989b8978a438",
        symbol: 'CELO',
        decimals: 18
      },
    },
    netId44787: {
      celo: {
        instanceAddress: {
          '0.1': '0x4D74124b70Dc84dc6828FCF5FB3B9d205ec52C03',
          '1': '0x61BADEbF571E302c51a40bB6b5A4E5963d990ab2',
        },
        tokenAddress: "0xf194afdf50b03e69bd7d057c1aa9e10c9954e4c9",
        symbol: 'CELO',
        decimals: 18
      },
    },
  },
}
