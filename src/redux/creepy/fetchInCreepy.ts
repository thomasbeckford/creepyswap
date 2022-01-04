import inCreepyABI from '../../utils/abi/increepy.json';
import multicall from '../../utils/Multicall';
import { getCreepyAddress } from '../../utils/addressHelpers';
import { getBalanceNumber } from '../../utils/formatBalance';

const fetchInspirit = async (account: string) => {
	const creepyAddress = getCreepyAddress();

	const [tokenName, Symbol, creepySupply, creepyBalance] =
		await multicall.invoke()(inCreepyABI, [
			// Gettting inCreepy balance in proxyGauge
			{
				address: creepyAddress,
				name: 'name',
			},
			{
				address: creepyAddress,
				name: 'symbol',
			},
			{
				address: creepyAddress,
				name: 'totalSupply',
			},
			{
				address: creepyAddress,
				name: 'balanceOf',
				params: [account],
			},
		]);

	return {
		tokenName,
		Symbol: Symbol[0],
		creepyAddress,
		creepySupply: getBalanceNumber(creepySupply),
		userBalance: getBalanceNumber(creepyBalance),
		// spiritLocked: getBalanceNumber(creepyLocked[0]._hex),
	};
};

export default fetchInspirit;