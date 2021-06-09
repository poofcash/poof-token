/* global artifacts, web3, contract */
require('chai').use(require('bn-chai')(web3.utils.BN)).use(require('chai-as-promised')).should()

const { mineBlock, increaseTime } = require('../scripts/ganacheHelper')
const Poof = artifacts.require('./POOFMock.sol')
const TokenAllocator = artifacts.require('./TokenAllocatorMock.sol')
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
  describe('#getClaimable', () => {
    it('should work at t=start', async () => {
      await allocator.setFakeTimestamp(start)
      const claimable = await allocator.getClaimable()
      claimable.should.be.eq.BN(toBN('0'))
    })
    it('should work at t=(start + end) / 2', async () => {
      await allocator.setFakeTimestamp(start + 500)
      const claimable = await allocator.getClaimable()
      claimable.should.be.eq.BN(toBN(cap).div(toBN(2)))
    })
    it('should work at t=end', async () => {
      await allocator.setFakeTimestamp(end)
      const claimable = await allocator.getClaimable()
      claimable.should.be.eq.BN(toBN(cap))
    })
  })

  describe('#claim', () => {
    it('should not claim anything at the start', async () => {
      await allocator.setFakeTimestamp(start)
      const balanceBefore = await poof.balanceOf(beneficiary)
      balanceBefore.should.be.eq.BN(toBN(0))
      await allocator.claim()
      const balanceAfter = await poof.balanceOf(beneficiary)
      balanceAfter.should.be.eq.BN(toBN(0))
    })

    it('should claim after some time has passed', async () => {
      await allocator.setFakeTimestamp(start + 500)
      const balanceBefore = await poof.balanceOf(beneficiary)
      await allocator.claim()
      const balanceAfter = await poof.balanceOf(beneficiary)
      balanceAfter.should.be.eq.BN(toBN(toBN(cap).div(toBN(2))))
      balanceAfter.sub(balanceBefore).should.be.eq.BN(toBN(cap).div(toBN(2)))
    })

    it('should not claim twice', async () => {
      const balanceBefore = await poof.balanceOf(beneficiary)
      await allocator.claim()
      const balanceAfter = await poof.balanceOf(beneficiary)
      balanceAfter.sub(balanceBefore).should.be.eq.BN(toBN(0))
    })

    it('should claim remainder at release schedule end', async () => {
      await allocator.setFakeTimestamp(end)
      const balanceBefore = await poof.balanceOf(beneficiary)
      await allocator.claim()
      const balanceAfter = await poof.balanceOf(beneficiary)
      balanceAfter.should.be.eq.BN(toBN(toBN(cap)))
      balanceAfter.sub(balanceBefore).should.be.eq.BN(toBN(cap).div(toBN(2)))
    })

    it('should not claim more after release schedule ends and tokens were previously claimed', async () => {
      await allocator.setFakeTimestamp(end + 1000)
      const balanceBefore = await poof.balanceOf(beneficiary)
      await allocator.claim()
      const balanceAfter = await poof.balanceOf(beneficiary)
      balanceAfter.sub(balanceBefore).should.be.eq.BN(toBN(0))
    })
  })
})
