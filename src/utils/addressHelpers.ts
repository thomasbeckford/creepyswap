import contracts from '../constants/contracts';
import { Address } from '../constants/types';
import { CHAIN_ID } from '../constants';

export const getAddress = (address: Address): string => {
	const mainNetChainId = 250;
	return address[CHAIN_ID] || address[mainNetChainId];
};

export const getCreepyAddress = () => {
	return getAddress(contracts.creepy);
};
// export const getInCreepyAddress = () => {
// 	return getAddress(contracts.inCreepy);
// };
export const getMasterChefAddress = () => {
	return getAddress(contracts.masterChef);
};
export const getMasterChefAddressV2 = () => {
	return getAddress(contracts.masterChefV2);
};
export const getGaugesProxyAddress = () => {
	return getAddress(contracts.gaugesProxy);
};
export const getMulticallAddress = () => {
	return getAddress(contracts.mulltiCall);
};
export const getWbnbAddress = () => {
	return getAddress(contracts.wftm);
};
export const getLotteryAddress = () => {
	return getAddress(contracts.lottery);
};
export const getSpiritProfileAddress = () => {
	return getAddress(contracts.spiritProfile);
};
export const getClaimRefundAddress = () => {
	return getAddress(contracts.claimRefund);
};
export const getPointCenterIfoAddress = () => {
	return getAddress(contracts.pointCenterIfo);
};
export const getBunnySpecialAddress = () => {
	return getAddress(contracts.bunnySpecial);
};

export const getDistributorAddress = () => {
	return getAddress(contracts.distributor);
};

export const getBonusDistributorAddress = () => {
	return getAddress(contracts.bonusDistributor);
};
export const getliquidityGeneratorAddress = () => {
	return getAddress(contracts.liquidityGenerator);
};
export const getOlaLensAddress = () => {
	return getAddress(contracts.olaLens);
};
