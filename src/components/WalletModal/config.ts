// import BinanceChain from './icons/BinanceChain'
// import MathWallet from './icons/MathWallet'
import Metamask from './icons/Metamask'
// import SafePalWallet from './icons/SafePalWallet'
// import TokenPocket from './icons/TokenPocket'
// import TrustWallet from './icons/TrustWallet'
// import WalletConnect from './icons/WalletConnect'
import { Config, ConnectorNames } from './types'

const connectors: Config[] = [
  {
    title: 'Metamask',
    icon: Metamask,
    connectorId: ConnectorNames.Injected,
  },
  // {
  //   title: 'MathWallet',
  //   icon: MathWallet,
  //   connectorId: ConnectorNames.Injected,
  // },
  // {
  //   title: 'TokenPocket',
  //   icon: TokenPocket,
  //   connectorId: ConnectorNames.Injected,
  // },
  // {
  //   title: 'TrustWallet',
  //   icon: TrustWallet,
  //   connectorId: ConnectorNames.Injected,
  // },
  // {
  //   title: 'WalletConnect',
  //   icon: WalletConnect,
  //   connectorId: ConnectorNames.WalletConnect,
  // },
  // {
  //   title: 'BinanceChain',
  //   icon: BinanceChain,
  //   connectorId: ConnectorNames.Injected,
  // },
  // {
  //   title: 'SafePal Wallet',
  //   icon: SafePalWallet,
  //   connectorId: ConnectorNames.Injected,
  // },
]

export default connectors
export const connectorLocalStorageKey = 'connectorId'
