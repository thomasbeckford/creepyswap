import { TokenData } from "@/types";
import { wcProvider } from "@/utils/connectors";
import { networks } from "@/utils/networks";
import { BigNumber, ethers } from "ethers";
import { formatUnits } from "ethers/lib/utils";

export const connectWallet = async (chainId: number, walletName: string) => {
  const { ethereum } = window;
  const name =
    networks.find((network) => network.chainId === chainId)?.network ||
    "Unknown";

  if (!ethereum) return console.log("Ethereum unavailable"); // TODO: Set a toast

  if (walletName === "metamask") {
    const provider = new ethers.providers.Web3Provider(ethereum, {
      name,
      chainId,
    });

    const accounts = await provider?.listAccounts();
    if (accounts.length) return accounts[0];

    const address = await provider.send("eth_requestAccounts", []);
    if (address) return address[0];
  }

  try {
    if (walletName === "wallet_connect") {
      const address = await wcProvider.enable();
      return address;
    }
  } catch (e) {
    console.log("error", e);
  }
};

// Formats ether amounts into readible format
export const formatFrom = (_amount: BigNumber, _decimals: number = 18) =>
  formatUnits(_amount, _decimals);

// Format return token data
export const formatReturnData = (item: any) => {
  const tdata: TokenData = {
    name: item.contract_ticker_symbol.replace("-", "/"),
    full_name: item.contract_name,
    amount: formatFrom(item.balance || 0, item.contract_decimals),
    symbol: item.contract_ticker_symbol,
    usd: item.quote?.toFixed(2) || 0,
    usd_24: item.quote_24h?.toFixed(2) || 0,
    rate: item.quote_rate,
    rate_24: item.quote_rate_24h,
    address: item.contract_address,
    liquidity: item.contract_name.includes("LP"),
    icon: `https://app.spiritswap.finance/images/tokens/${item.contract_ticker_symbol}.png`, // TODO: set creepyswap url
    staked: true,
    // decimals: item.contract_decimals,
  };

  return tdata;
};
