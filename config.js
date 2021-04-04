const {toWei} = require('web3-utils')

module.exports = {
  torn: {
    address: 'torn.contract.tornadocash.eth',
    cap: toWei('10000000'),
    pausePeriod: 45 * 24 * 3600, // 45 days
    distribution: {
      airdrop: {to: 'voucher', amount: toWei('500000')},
      miningV2: {to: 'rewardSwap', amount: toWei('1000000')},
      governance: {to: 'vesting.governance', amount: toWei('5500000')},
      team1: {to: 'vesting.team1', amount: toWei('822407')},
      team2: {to: 'vesting.team2', amount: toWei('822407')},
      team3: {to: 'vesting.team3', amount: toWei('822407')},
      team4: {to: 'vesting.team4', amount: toWei('500000')},
      team5: {to: 'vesting.team5', amount: toWei('32779')},
    },
  },
  governance: {address: 'governance.contract.tornadocash.eth'},
  governanceImpl: {address: 'governance-impl.contract.tornadocash.eth'},
  voucher: {address: 'voucher.contract.tornadocash.eth', duration: 12},
  miningV2: {
    address: 'mining-v2.contract.tornadocash.eth',
    initialBalance: toWei('25000'),
    rates: [
      {instance: 'eth-01.tornadocash.eth', value: '10'},
      {instance: 'eth-1.tornadocash.eth', value: '20'},
      {instance: 'eth-10.tornadocash.eth', value: '50'},
      {instance: 'eth-100.tornadocash.eth', value: '400'},
    ],
  },
  rewardSwap: {address: 'reward-swap.contract.tornadocash.eth', poolWeight: 1e11},
  tornadoTrees: {address: 'tornado-trees.contract.tornadocash.eth', levels: 20},
  tornadoProxy: {address: 'tornado-proxy.contract.tornadocash.eth'},
  rewardVerifier: {address: 'reward-verifier.contract.tornadocash.eth'},
  treeUpdateVerifier: {address: 'tree-update-verifier.contract.tornadocash.eth'},
  withdrawVerifier: {address: 'withdraw-verifier.contract.tornadocash.eth'},
  poseidonHasher2: {address: 'poseidon2.contract.tornadocash.eth'},
  poseidonHasher3: {address: 'poseidon3.contract.tornadocash.eth'},
  deployer: {address: 'deployer.contract.tornadocash.eth'},
  vesting: {
    team1: {
      address: 'team1.vesting.contract.tornadocash.eth',
      beneficiary: '0x5A7a51bFb49F190e5A6060a5bc6052Ac14a3b59f',
      cliff: 12,
      duration: 36,
    },
    team2: {
      address: 'team2.vesting.contract.tornadocash.eth',
      beneficiary: '0xF50D442e48E11F16e105431a2664141f44F9feD8',
      cliff: 12,
      duration: 36,
    },
    team3: {
      address: 'team3.vesting.contract.tornadocash.eth',
      beneficiary: '0x6D2C515Ff6A40554869C3Da05494b8D6910D075E',
      cliff: 12,
      duration: 36,
    },
    team4: {
      address: 'team4.vesting.contract.tornadocash.eth',
      beneficiary: '0x504a9c37794a2341F4861bF0A44E8d4016DF8cF2',
      cliff: 12,
      duration: 36,
    },
    team5: {
      address: 'team5.vesting.contract.tornadocash.eth',
      beneficiary: '0x2D81713c58452c92C19b2917e1C770eEcF53Fe41',
      cliff: 12,
      duration: 36,
    },
    governance: {
      address: 'governance.vesting.contract.tornadocash.eth',
      cliff: 3,
      duration: 60,
    },
  },
  feeManager: {
    netId42220: {
      address: '0x7d21531Adf9d029Acc8C5b225d77Ce2a819887B6',
    },
    netId44787: {
      address: '0x13F0c38ee3BBfFe7f18Dbbb4D647853066B5129e',
    }
  },
  instances: {
    netId42220: {
      celo: {
        instanceAddress: {
          '0.1': '0xbf390dA0296F14ACda3C9A0C59000eB1fac1E62c',
          '1': '0xD39697c01279DfaCad50b27D03EDAEc6Bca03097',
          '10': '0xAB0931522889cD50b3519b24a2d74c825b1A3adC',
          '100': '0xB6b10B5f276AF5c0eE5dC46e4083c3DE3bF017c7',
        },
        tokenAddress: "0x471ece3750da237f93b8e339c536989b8978a438",
        symbol: 'CELO',
        decimals: 18
      },
    },
    netId44787: {
      celo: {
        instanceAddress: {
          '0.1': '0xd132e4bd577Ea524CFEa481B41c6feDEfee2f891',
          '1': '0xbb49f367b55b0196312b35F0f01BB12Cd01DeF81',
          '10': '0xFc1107640BB9490F44CBC2D006aA7B8D0B2cC14A',
          '100': '0x38A120F95873755bD33124b214370792AC2D8fDC',
        },
        tokenAddress: "0xf194afdf50b03e69bd7d057c1aa9e10c9954e4c9",
        symbol: 'CELO',
        decimals: 18
      },
    },
  },
}
