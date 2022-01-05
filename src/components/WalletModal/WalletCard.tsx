import React from 'react'

import { CONNECTOR_LOCAL_STORAGE_KEY } from '../../constants'
import Button from '../Button/Button'
import Text from '../Text/Text'
import { Login, Config } from './types'

interface Props {
  walletConfig: Config
  login: Login
  onDismiss: () => void
  mb: string
}

const WalletCard: React.FC<Props> = ({
  login,
  walletConfig,
  onDismiss,
  mb,
}) => {
  const { title, icon: Icon } = walletConfig
  return (
    <Button
      width="100%"
      variant="tertiary"
      onClick={() => {
        login(walletConfig.connectorId)
        window.localStorage.setItem(
          CONNECTOR_LOCAL_STORAGE_KEY,
          walletConfig.connectorId
        )
        onDismiss()
      }}
      style={{ justifyContent: 'space-between' }}
      mb={mb}
      id={`wallet-connect-${title.toLocaleLowerCase()}`}
    >
      <Text bold color="primary" mr="16px">
        {title}
      </Text>
      <Icon width="32px" />
    </Button>
  )
}

export default WalletCard
