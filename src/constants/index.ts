export enum ConnectorNames {
	Injected = 'injected', // Metamask
	WalletConnect = 'walletconnect',
	WalletLink = 'walletlink',
	TrustWallet = 'trustwallet',
}

export const CHAIN_ID = 250;
export const NODE = 'https://rpc.ftm.tools';
export const CONNECTOR_LOCAL_STORAGE_KEY = 'connectorId';
export const POLLING_INTERVAL = 1000 * 20; // web3 apis
export const DEFAULT_PROVIDER_NAME = 'ethers.js' || 'web3.js';

export const THROTTLE_TIME = 1000 * 20; // throttle waiting time
export const THROTTLE_CLEAR_TIME = 1000 * 60; // throttle clean time
export const LOADING_TIME = 1000 * 10; // loading time to unthrottle API calls
export const FAST_REFRESH_INTERVAL = 1000 * 10;
export const SLOW_REFRESH_INTERVAL = 1000 * 60;
export const SLOWEST_REFRESH_INTERVAL = 1000 * 60 * 60; // one hour
