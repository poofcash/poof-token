const { toWei } = require('web3-utils')

module.exports = {
  poof: {
    name: 'POOF',
    address: '0x400F8F7C1AB92F9A8AbCbf4b2A97d609E13f2f79',
    cap: toWei('100000000'),
    distribution: {
      miningV2: { to: 'rewardSwap', amount: toWei('42000000') },
      governance: { to: 'allocatorGov', amount: toWei('17930000') },
      reserve: { to: 'allocatorReserve', amount: toWei('8000000') },
      releasePoof: { to: 'releasePoof', amount: toWei('30000000') },
      liquidity: { to: 'timelockLiquidity', amount: toWei('2000000') },
      airdrop: { to: 'voucher', amount: toWei('70000') },
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
    address: '0x31E28B9208E627B9714596A83E97a9a7dB08b758',
    duration: 2592000 * 6, // 6 months
  },
  miningV2: {
    name: 'PoofMiner',
    netId42220: {
      address: '',
    },
    netId44787: {
      address: '0x0eB2bc98DD64BE563EA4Df7f8DdE519543BDE9F7',
    },
    releaseStart: 1622505600, // June 1, 2021
    firstPeriodDistribution: toWei('21333333'),
    periodDurationInSeconds: 15724800,
    numPeriods: 6,
    rates: {
      netId42220: [
        { instance: { token: '0xaC6684401dc4A2bfBa478a6B511F17fA442048fc', state: '2' }, value: '2' },
        { instance: { token: '0x39cD59268266d5F1c3582e1c3B748f3D9fCc58A5', state: '2' }, value: '20' },
        { instance: { token: '0x47272d2B47bfbdBDA7532fCF1BB83b98463Ce842', state: '2' }, value: '200' },
        { instance: { token: '0x60E5FC15Ed704C19E923abF63359933Ff1a0F9AA', state: '2' }, value: '3000' },
      ],
      netId44787: [
        {
          addr: '0x4D74124b70Dc84dc6828FCF5FB3B9d205ec52C03',
          instance: { token: '0xf194afdf50b03e69bd7d057c1aa9e10c9954e4c9', state: '2' },
          value: '10',
        },
        {
          addr: '0x61BADEbF571E302c51a40bB6b5A4E5963d990ab2',
          instance: { token: '0xf194afdf50b03e69bd7d057c1aa9e10c9954e4c9', state: '2' },
          value: '20',
        },
      ],
    },
  },
  rewardSwap: {
    name: 'PoofRewardSwap',
    netId42220: {
      address: '',
    },
    netId44787: {
      address: '0x1F05973792905991b9593078629d17833007A757',
    },
    poolWeight: 1e12,
  },
  tornadoTrees: {
    name: 'PoofTrees',
    address: '0x2cdc0dCD8a17BeDCD74CE68E7dE91707714c0eC1',
    levels: 20,
  },
  tornadoProxy: {
    name: 'PoofProxy',
    netId42220: {
      address: '',
    },
    netId44787: {
      address: '0xD150657aeaa9E6e63C35d8E988d012E4547AedA2',
    },
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
  deployer: { address: '0x60483A552391b4388C1F03af4cEf38e51ab00FA2' },
  feeManager: {
    netId42220: {
      address: '0x7DA532a6F59232936320011106585521B9F18362',
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
      rcelo: {
        instanceAddress: {
          6500: '0xaC6684401dc4A2bfBa478a6B511F17fA442048fc',
          65000: '0x39cD59268266d5F1c3582e1c3B748f3D9fCc58A5',
          650000: '0x47272d2B47bfbdBDA7532fCF1BB83b98463Ce842',
          6500000: '0x60E5FC15Ed704C19E923abF63359933Ff1a0F9AA',
        },
        tokenAddress: '0x1a8Dbe5958c597a744Ba51763AbEBD3355996c3e',
        symbol: 'rCELO',
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
      rcelo: {
        instanceAddress: {
          6500: '0x2B864d707A417B6Bb9aBB92011f5Af97aBE16A6C',
          65000: '0x892d1d07d1b2F201aa24B774bF49838e4Ba3397c',
        },
        tokenAddress: '0xBDeedCDA79BAbc4Eb509aB689895a3054461691e',
        symbol: 'rCELO',
        decimals: 18,
      },
    },
  },
}
