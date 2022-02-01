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
}

export const networks: NetworkInterface[] = [
  {
    chainId: 1,
    network: "Ethereum",
    hex: "1",
    rpc: "homestead",
    name: "Ethereum",
    symbol: "ETH",
    blockExp: "Ethereum",
    decimals: 18,
  },
  {
    chainId: 56,
    network: "Binance Smart Chain Mainnet",
    hex: "38",
    rpc: ["https://bsc-dataseed.binance.org/"],
    name: "Binance Coin",
    symbol: "BNB",
    blockExp: ["https://bscscan.com"],
    decimals: 18,
  },
  {
    chainId: 137,
    network: "Polygon",
    hex: "89",
    rpc: ["https://polygon-rpc.com"],
    name: "MATIC",
    symbol: "MATIC",
    blockExp: ["https://polygonscan.com/"],
    decimals: 18,
  },
  {
    chainId: 250,
    network: "Fantom Opera",
    hex: "fa",
    rpc: ["https://rpc.ankr.com/fantom", "https://rpc.ftm.tools/"],
    name: "Fantom",
    symbol: "FTM",
    blockExp: ["https://ftmscan.com/"],
    decimals: 18,
  },
  {
    chainId: 43114,
    network: "Avalanche",
    hex: "A86A",
    rpc: ["https://api.avax.network/ext/bc/C/rpc"],
    name: "AVAX",
    symbol: "AVAX",
    blockExp: ["https://cchain.explorer.avax.network/"],
    decimals: 18,
  },
  {
    chainId: 42161,
    network: "Arbitrum",
    hex: "A4B1",
    rpc: ["https://arb1.arbitrum.io/rpc"],
    name: "AETH",
    symbol: "AETH",
    blockExp: ["https://arbiscan.io"],
    decimals: 18,
  },
  {
    chainId: 100,
    network: "xDai",
    hex: "64",
    rpc: ["https://rpc.xdaichain.com/"],
    name: "xDai",
    symbol: "xDai",
    blockExp: ["https://blockscout.com/xdai/mainnet/"],
    decimals: 18,
  },
];
