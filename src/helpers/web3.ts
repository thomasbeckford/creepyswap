import { wcProvider } from "@/utils/connectors";
import { networks } from "@/utils/networks";
import { ethers } from "ethers";

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
