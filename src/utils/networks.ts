export interface NetworkInterface {
  chainId: number;
  network: string;
  hex: string;
  rpc: string | string[];
  name: string;
  symbol: string;
  blockExp: string | string[];
  decimals: number;
  // wss: string[];
  activeLogo?: string;
  inactiveLogo?: string;
}

export const networks: NetworkInterface[] = [
  {
    chainId: 250,
    network: "Fantom Opera",
    hex: "fa",
    rpc: ["https://rpc.ankr.com/fantom", "https://rpc.ftm.tools/"],
    name: "Fantom",
    symbol: "FTM",
    blockExp: ["https://ftmscan.com/"],
    decimals: 18,
    activeLogo: "https://app.1inch.io/assets/images/network-logos/ethereum.svg",
    inactiveLogo:
      "https://app.1inch.io/assets/images/network-logos/ethereum-disabled.svg",
  },
  {
    chainId: 1,
    network: "Ethereum",
    hex: "1",
    rpc: "homestead",
    name: "Ethereum",
    symbol: "ETH",
    blockExp: "Ethereum",
    decimals: 18,
    activeLogo: "https://app.1inch.io/assets/images/network-logos/ethereum.svg",
    inactiveLogo:
      "https://app.1inch.io/assets/images/network-logos/ethereum-disabled.svg",
  },
  {
    chainId: 56,
    network: "Binance Smart Chain Mainnet",
    hex: "38",
    rpc: ["https://bsc-dataseed.binance.org/"],
    name: "Binance",
    symbol: "BNB",
    blockExp: ["https://bscscan.com"],
    decimals: 18,
    activeLogo: "https://app.1inch.io/assets/images/network-logos/ethereum.svg",
    inactiveLogo:
      "https://app.1inch.io/assets/images/network-logos/ethereum-disabled.svg",
  },
  {
    chainId: 137,
    network: "Polygon",
    hex: "89",
    rpc: ["https://polygon-rpc.com"],
    name: "Polygon",
    symbol: "MATIC",
    blockExp: ["https://polygonscan.com/"],
    decimals: 18,
    activeLogo: "https://app.1inch.io/assets/images/network-logos/ethereum.svg",
    inactiveLogo:
      "https://app.1inch.io/assets/images/network-logos/ethereum-disabled.svg",
  },
];
