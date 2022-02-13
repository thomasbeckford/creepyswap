export const RPC_URLS: { [chainId: number]: string[] } = {
  1: ['https://mainnet.infura.io/v3/b9c9c8f8b9f24c8c8d9c8d9c8d9c8d9'],
  250: ['https://rpc.ftm.tools/', 'https://rpc.ankr.com/fantom'],
};

export const wallets = [
  {
    name: 'Metamask',
    src: '/assets/logos/metamask.png',
    alt: 'Metamask',
    type: 'injected',
  },
  {
    name: 'Wallet Connect',
    src: '/assets/logos/walletconnect.ico',
    alt: 'walletconnect',
    type: 'walletconnect',
  },
];
