import { TokenData } from '@/types';

import { BigNumber } from 'ethers';
import { formatUnits } from 'ethers/lib/utils';
import connectors from './../connectors';
import { IProviderOptions, IWallet } from './types';

export const connectWallet = async (
  wallet: IWallet,
  chainId: number,
  // eslint-disable-next-line no-unused-vars
  setProvider: (provider: any) => void,
) => {
  let providerOptions: IProviderOptions = {};

  const isMobile = window.navigator.userAgent.includes('Mobile');

  const connectTo = async (
    name: string,
    // eslint-disable-next-line no-unused-vars
    connector: (providerPackage: any, opts: any) => Promise<any>,
  ) => {
    try {
      const providerPackage =
        providerOptions &&
        providerOptions[name] &&
        providerOptions[name].package
          ? providerOptions[name].package
          : {};
      providerOptions =
        providerOptions &&
        providerOptions[name] &&
        providerOptions[name].options
          ? providerOptions[name].options
          : {};
      const opts = chainId
        ? { network: chainId, ...providerOptions }
        : providerOptions;

      const provider = await connector(providerPackage, opts);
      setProvider(provider);
      const address = provider.accounts[0];
      return address;
    } catch (error) {
      // await onError(error);
    }
  };

  if (isMobile) {
    return connectTo('walletconnect', connectors.ConnectToWalletConnect);
  }

  const connectToInjected = async () => {
    try {
      const provider = await connectors.ConnectToInjected();
      const address = await provider.request({ method: 'eth_requestAccounts' });
      return address[0];
    } catch (error) {
      // console.log(error);
    }
  };
  if (wallet?.type === 'injected') {
    return connectToInjected();
  }
  if (wallet?.type === 'walletconnect') {
    return connectTo('walletconnect', connectors.ConnectToWalletConnect);
  }
};

// Formats ether amounts into readible format
export const formatFrom = (_amount: BigNumber, _decimals: number = 18) =>
  formatUnits(_amount, _decimals);

// Format return token data
export const formatReturnData = (item: any) => {
  const tdata: TokenData = {
    name: item.contract_ticker_symbol.replace('-', '/'),
    full_name: item.contract_name,
    amount: formatFrom(item.balance || 0, item.contract_decimals),
    symbol: item.contract_ticker_symbol,
    usd: item.quote?.toFixed(2) || 0,
    usd_24: item.quote_24h?.toFixed(2) || 0,
    rate: item.quote_rate,
    rate_24: item.quote_rate_24h,
    address: item.contract_address,
    liquidity: item.contract_name.includes('LP'),
    icon: `https://app.spiritswap.finance/images/tokens/${item.contract_ticker_symbol}.png`, // TODO: set creepyswap url
    staked: true,
    // decimals: item.contract_decimals,
  };

  return tdata;
};
//
