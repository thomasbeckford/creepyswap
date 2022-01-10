import { useCallback } from 'react'
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
import { ConnectorNames } from '../constants'
// import { useToast } from 'state/hooks'
import {
  resetWalletConnector,
  connectorsByName,
  isMetamaskInstalled,
  isWalletLinkInstalled,
  getExtensionName,
} from '../utils/Web3React'
import { setupNetwork } from '../utils/Wallet'
// import IsMobile from 'utils/IsMobile';

const IsMobile = () => false

const useAuth = () => {
  const { activate, deactivate } = useWeb3React()
  // const { toastError } = useToast();

  const login = useCallback(
    (connectorID: ConnectorNames) => {
      const connector = connectorsByName[connectorID]
      if (connector) {
        if (
          (connectorID === ConnectorNames.WalletLink &&
            isWalletLinkInstalled()) ||
          (connectorID === ConnectorNames.Injected && isMetamaskInstalled()) ||
          connectorID === ConnectorNames.WalletConnect ||
          (connectorID === ConnectorNames.TrustWallet && IsMobile())
        ) {
          activate(connector, async (error: Error) => {
            if (error instanceof UnsupportedChainIdError) {
              const hasSetup = await setupNetwork()
              if (hasSetup) {
                activate(connector)
              }
            } else {
              resetWalletConnector(connector)
              alert(`Error: ${error.message}`)
              console.log(error.name, error.message)
            }
          })
        } else {
          if (IsMobile()) return

          alert(
            `Install or turn on ${getExtensionName(
              connectorID
            )} extension only!`
          )
        }
      }
    },
    [activate]
  )

  return { login, logout: deactivate }
}

export default useAuth
