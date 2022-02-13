export interface TokenData {
  name: string;
  full_name: string;
  amount: string;
  symbol: string;
  usd: number;
  usd_24: number;
  address: string;
  rate: number;
  rate_24: number;
  liquidity?: boolean;
  farm?: boolean;
  staked?: boolean;
  icon?: string;
}

export interface NetworkInterface {
  id: number;
  network: string;
  hex: string;
  rpc: string | string[];
  name: string;
  symbol: string;
  blockExp: string | string[];
  decimals: number;
  // wss: string[];
  logo?: string;
}
