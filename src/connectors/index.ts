import ConnectToBinance from "./binance";
import ConnectToInjected from "./injected";
import ConnectToWalletConnect from "./walletconnect";

const connectors = {
  ConnectToInjected,
  ConnectToWalletConnect,
  ConnectToBinance,
};

export default connectors;
