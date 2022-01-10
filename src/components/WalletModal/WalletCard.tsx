import React from 'react'
import { CONNECTOR_LOCAL_STORAGE_KEY } from '../../constants'
import { ConnectorWrapper } from './styled'
import { Login, Config } from './types'

interface Props {
  walletConfig: Config
  login: Login
  onDismiss: () => void
  mb: string
}

const WalletCard: React.FC<Props> = ({ login, walletConfig, onDismiss }) => {
  const { title, icon: Icon } = walletConfig
  return (
    <ConnectorWrapper
      onClick={() => {
        login(walletConfig.connectorId)
        window.localStorage.setItem(
          CONNECTOR_LOCAL_STORAGE_KEY,
          walletConfig.connectorId
        )
        onDismiss()
      }}
      id={`wallet-connect-${title.toLocaleLowerCase()}`}
    >
      {title}
      <Icon width="32px" />
    </ConnectorWrapper>
  )
}

export default WalletCard
