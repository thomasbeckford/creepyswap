import throttle from '@jcoreio/async-throttle';
import { AbiItem } from 'web3-utils';
import { Interface } from '@ethersproject/abi';
import { getWeb3NoAccount } from './web3';
import MultiCallAbi from './abi/Multicall.json';
import { LOADING_TIME, THROTTLE_TIME, THROTTLE_CLEAR_TIME } from '../constants';
import { getMulticallAddress } from './addressHelpers';

interface Call {
	address: string; // Address of the contract
	name: string; // Function name on the contract (exemple: balanceOf)
	params?: any[]; // Function params
}

const multicall = async (abi: any, calls: Call[] | any) => {
	const web3 = getWeb3NoAccount();
	const multi = new web3.eth.Contract(
		MultiCallAbi as unknown as AbiItem,
		getMulticallAddress()
	);
	const itf = new Interface(abi);

	const calldata = calls.map((call: any) => [
		call.address.toLowerCase(),
		itf.encodeFunctionData(call.name, call.params),
	]);
	const { returnData } = await multi.methods.aggregate(calldata).call();
	const res = returnData.map((call: any, i: any) =>
		itf.decodeFunctionResult(calls[i].name, call)
	);

	return res;
};

const throttled = throttle(multicall, THROTTLE_TIME);

const result = {
	loaded: false,
	invoke(throttling = false) {
		return throttling && this.loaded ? throttled : multicall;
	},
	cancelId: setInterval(() => {
		throttled.cancel();
	}, THROTTLE_CLEAR_TIME),
	load() {
		clearInterval(result.cancelId);
		result.loaded = false;
		setTimeout(() => {
			result.loaded = true;
		}, LOADING_TIME);
	},
};

export default result;
