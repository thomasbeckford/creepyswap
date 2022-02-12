const Web3 = require("web3");

export interface IWalletConnectConnectorOptions {
  infuraId: string;
  bridge?: string;
  qrcode?: boolean;
  network?: number;
}

const ConnectToBinance = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const provider = new Web3("https://bsc-dataseed1.binance.org:443");

      console.log("aa", provider);

      resolve(provider);
    } catch (error) {
      reject(error);
    }
  });
};

export default ConnectToBinance;
