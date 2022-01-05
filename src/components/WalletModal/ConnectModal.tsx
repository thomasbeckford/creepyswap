import React from 'react'

import styled from 'styled-components'

import { HelpIcon } from '../../../public/svg'
import { Link } from '../Link'
import { Modal } from '../Modal'
import config from './config'
import { Login } from './types'
import WalletCard from './WalletCard'

interface Props {
  login: Login
  onDismiss?: () => void
}

const HelpLink = styled(Link)`
  display: flex;
  align-self: center;
  align-items: center;
  margin-top: 24px;
  font-size: ${({ theme }) => theme.fontSize.sm};
  text-decoration: none;
`

const ConnectModal: React.FC<Props> = ({ login, onDismiss = () => null }) => (
  <Modal title="Connect to a wallet" onDismiss={onDismiss}>
    {config.map((entry, index) => (
      <WalletCard
        key={entry.title}
        login={login}
        walletConfig={entry}
        onDismiss={onDismiss}
        mb={index < config.length - 1 ? '8px' : '0'}
      />
    ))}
    <HelpLink
      href="https://app.gitbook.com/@layer3/s/creepy-swap/howto/connect-metamask"
      external
    >
      <HelpIcon style={{ marginRight: '10px' }} />
      Learn how to connect
    </HelpLink>
  </Modal>
)

export default ConnectModal
