import WalletConnectProvider from "@walletconnect/web3-provider";

const RPC_URLS: { [chainId: number]: string[] } = {
  250: ["https://rpc.ankr.com/fantom", "https://rpc.ftm.tools/"],
};

//  Create WalletConnect Provider
export const wcProvider = new WalletConnectProvider({
  rpc: RPC_URLS[250],
  qrcode: true,
});

export const enabledConnectors = [
  {
    name: "Metamask",
    src: "/assets/images/metamask.png",
    alt: "Metamask",
  },
  {
    name: "Wallet Connect",
    src: "/assets/images/walletconnect.ico",
    alt: "walletconnect",
  },
];
