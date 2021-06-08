const {toWei} = require('web3-utils')

module.exports = {
  poof: {
    name: 'POOF',
    address: '0x400F742DbEa93DE2760872cAcd936548036A0d54',
    cap: toWei('100000000'),
    distribution: {
      airdrop: {to: 'voucher', amount: toWei('70000')},
      miningV2: {to: 'rewardSwap', amount: toWei('42000000')},
      releasePoof: {to: 'releasePoof', amount: toWei('57930000')},
    },
  },
  releasePoof: {
    name: 'rPOOF',
    address: '0x985DdBF2d39331CbAd9C1fb2F06535708979e476',
    releaseStart: 1627920000, // August 2nd, 2021
    cliffDuration: 0, // No cliff
    releaseEnd: 1722268800, // July 29, 2024
  },
  timelockGov: {
    name: 'PoofGovTimelock',
    address: '0x50B3E0932c309B2421cAF26BA535f98ceA119643',
  },
  timelockReserve: {
    name: 'PoofReserveTimelock',
    address: '0xa6f6FFBaa5b91dDA0BE3da4d383f6de8acd7d816',
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
    address: '0xD60990Bd8c81EB19D9Be3072e8f8c5B1F547B1CF',
    votingPeriod: 51840, // ~3 days in blocks
    votingDelay: 17280, // ~1 day in blocks
    proposalThreshold: toWei('1000000'), // 1% of all tokens
  },
  governanceImpl: {
    name: 'PoofGovImpl',
    address: '0x2F02d7daB5A5D71bCda22da9791068B83E0c30AA',
  },
  voucher: {
    name: 'PoofVoucher',
    address: '0x8DB09D7Ae4f3e0e2D297c4FeEf2FcF7A329D7978',
    duration: 2592000 * 6, // 6 months
  },
  miningV2: {
    name: 'PoofMiner',
    address: '0xB9260dBd600F205d7A1161c75602520909cfb3b4',
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
    address: '0x951C948EdA202653058F826D6D9D917e63CA5454',
    poolWeight: 1e11,
  },
  tornadoTrees: {
    name: 'PoofTrees',
    address: '0xD3d4937f6e0ED87aF9915B232FBe7c83F816E3Fe',
    levels: 20,
  },
  tornadoProxy: {
    name: 'PoofProxy',
    address: '0x118eC903Bb4b00DF2a2bBDbCc44d130045FED7c7',
  },
  rewardVerifier: {
    name: 'PoofRewardVerifier',
    address: '0xA03BBAA4aCa9aC37196332f8bE1a07c61BfA8aDb',
  },
  treeUpdateVerifier: {
    name: 'PoofTreeVerifier',
    address: '0x9E8E0342cafb36a04e2F0010C71c9B4fc4cF615d',
  },
  withdrawVerifier: {
    name: 'PoofWithdrawVerifier',
    address: '0x3813dbc68b9F5Ae01F9870481e7E3cf33954C620',
  },
  poseidonHasher2: {
    name: 'PoofPoseidon2',
    address: '0xe90167f05933CA1BCF274adb6fBA3Bc4F10BA5c1',
  },
  poseidonHasher3: {
    name: 'PoofPoseidon3',
    address: '0x209D1dcE4310c43042E869aD2884B4132aB15DF7',
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
