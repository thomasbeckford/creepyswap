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
