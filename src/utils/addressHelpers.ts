import contracts from '../constants/contracts'
import { Address } from '../constants/types'
import { CHAIN_ID } from '../constants'

export const getAddress = (address: Address): string => {
  const mainNetChainId = 250
  return address[CHAIN_ID] || address[mainNetChainId]
}

export const getCreepyAddress = () => getAddress(contracts.creepy)
// export const getInCreepyAddress = () => {
// 	return getAddress(contracts.inCreepy);
// };
export const getMasterChefAddress = () => getAddress(contracts.masterChef)
export const getMasterChefAddressV2 = () => getAddress(contracts.masterChefV2)
export const getGaugesProxyAddress = () => getAddress(contracts.gaugesProxy)
export const getMulticallAddress = () => getAddress(contracts.mulltiCall)
export const getWbnbAddress = () => getAddress(contracts.wftm)
export const getLotteryAddress = () => getAddress(contracts.lottery)
export const getSpiritProfileAddress = () => getAddress(contracts.spiritProfile)
export const getClaimRefundAddress = () => getAddress(contracts.claimRefund)
export const getPointCenterIfoAddress = () =>
  getAddress(contracts.pointCenterIfo)
export const getBunnySpecialAddress = () => getAddress(contracts.bunnySpecial)

export const getDistributorAddress = () => getAddress(contracts.distributor)

export const getBonusDistributorAddress = () =>
  getAddress(contracts.bonusDistributor)
export const getliquidityGeneratorAddress = () =>
  getAddress(contracts.liquidityGenerator)
export const getOlaLensAddress = () => getAddress(contracts.olaLens)
