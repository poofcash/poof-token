/* global artifacts, web3, contract */
require('chai').use(require('bn-chai')(web3.utils.BN)).use(require('chai-as-promised')).should()

const { setTime, mineBlock, increaseTime } = require('../scripts/ganacheHelper')
const Poof = artifacts.require('./POOFMock.sol')
const TokenAllocator = artifacts.require('./TokenAllocator.sol')
const { cap } = require('../config').poof
const { toBN } = require('web3-utils')
const RLP = require('rlp')

async function getNextAddr(sender, offset = 0) {
  const nonce = await web3.eth.getTransactionCount(sender)
  return (
    '0x' +
    web3.utils
      .sha3(RLP.encode([sender, Number(nonce) + Number(offset)]))
      .slice(12)
      .substring(14)
  )
}

contract('TokenAllocator', (accounts) => {
  let poof, allocator, start, end, beneficiary
  before(async () => {
    const allocatorAddr = await getNextAddr(accounts[0], 1)
    poof = await Poof.new([{ to: allocatorAddr, amount: cap }])
    beneficiary = accounts[1]
    start = Math.floor(new Date() / 1000)
    end = start + 1000
    allocator = await TokenAllocator.new(start, end, cap, poof.address, beneficiary)
  })
  describe('#claimable', () => {
    it('should work at t=start', async () => {
      const claimable = await allocator.getClaimable()
      claimable.should.be.eq.BN(toBN('0'))
    })
    it('should work at t=(start + end) / 2', async () => {
      await increaseTime(500)
      await mineBlock()
      const delta = toBN(cap).div(toBN(10))
      const claimable = await allocator.getClaimable()
      expect(claimable.sub(toBN(cap).div(toBN(2))).lt(delta)).to.be.true
    })
    it('should work at t=end', async () => {
      await increaseTime(500)
      await mineBlock()
      const claimable = await allocator.getClaimable()
      claimable.should.be.eq.BN(toBN(cap))
    })
  })
})
