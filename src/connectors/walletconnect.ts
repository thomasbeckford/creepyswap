import { RPC_URLS } from '@/utils/connectors';
import WalletConnectProvider from '@walletconnect/web3-provider';

export interface IWalletConnectConnectorOptions {
  infuraId: string;
  bridge?: string;
  qrcode?: boolean;
  network?: number;
}

const ConnectToWalletConnect = (opts: IWalletConnectConnectorOptions) => {
  return new Promise(async (resolve, reject) => {
    try {
      let bridge = 'https://bridge.walletconnect.org';
      let qrcode = true;
      let chainId = 250;

      if (opts) {
        bridge = opts.bridge || bridge;
        qrcode = typeof opts.qrcode !== 'undefined' ? opts.qrcode : qrcode;
        chainId = opts.network ? opts.network : chainId;
      }
      const provider = new WalletConnectProvider({
        bridge,
        qrcode,
        chainId,
        rpc: { [chainId]: RPC_URLS[chainId][0] },
      });

      await provider.enable();

      resolve(provider);
    } catch (error) {
      reject(error);
    }
  });
};

export default ConnectToWalletConnect;
