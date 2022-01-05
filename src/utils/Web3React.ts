import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { WalletLinkConnector } from '@web3-react/walletlink-connector'
import { NetworkConnector } from '@web3-react/network-connector'
import { AbstractConnector } from '@web3-react/abstract-connector'
import Web3 from 'web3'
import { CHAIN_ID, ConnectorNames } from '../constants'
import getNodeUrl from './getRpcUrl'

const rpcUrl = getNodeUrl()
const RPC_URLS = {
  250: 'https://rpc.ftm.tools/',
  4002: 'https://rpc.testnet.fantom.network/',
}

const injected = new InjectedConnector({ supportedChainIds: [CHAIN_ID, 4002] })
export const network = new NetworkConnector({ urls: { 250: RPC_URLS[250] } })
const walletlink = new WalletLinkConnector({
  url: 'https://rpc.ftm.tools/',
  appName: 'creepy.swap',
  appLogoUrl: 'https://www.creepyswap.finance/assets/imgs/spiritswap_logo.png',
})

const walletconnect = new WalletConnectConnector({
  rpc: { [CHAIN_ID || 4002]: rpcUrl },
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
})

export const resetWalletConnector = (connector: AbstractConnector) => {
  if (
    connector &&
    connector instanceof WalletConnectConnector &&
    connector.walletConnectProvider?.wc?.uri
  ) {
    connector.walletConnectProvider = undefined // eslint-disable-line no-param-reassign
  }
}

export const connectorsByName: { [connectorName in ConnectorNames]: any } = {
  [ConnectorNames.Injected]: injected,
  [ConnectorNames.WalletLink]: walletlink,
  [ConnectorNames.WalletConnect]: walletconnect,
  [ConnectorNames.TrustWallet]: injected,
}

export const getLibrary = (provider: Web3): Web3 => provider

export const isMetamaskInstalled = () => !!window?.ethereum?.isMetaMask

export const isWalletLinkInstalled = () => !!window?.ethereum?.scanQRCode

export const getExtensionName = (connectorId: ConnectorNames) => {
  switch (connectorId) {
    case ConnectorNames.Injected:
      return 'MetaMask'
    case ConnectorNames.WalletLink:
      return 'CoinBase'
    case ConnectorNames.WalletConnect:
      return 'WalletConnect'
    case ConnectorNames.TrustWallet:
      return 'TrustWallet'
    default:
      return ''
  }
}
