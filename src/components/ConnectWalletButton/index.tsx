import React from 'react'

import { useWeb3React } from '@web3-react/core'

import useAuth from '../../hooks/useAuth'
import { Button } from '../Button'
import { useWalletModal } from '../WalletModal'

const ConnectButton: React.FC = () => {
  const { login, logout } = useAuth()
  const { account } = useWeb3React()

  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(
    login,
    logout,
    account as string
  )

  const accountEllipsis = account
    ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}`
    : null

  return (
    <div>
      {account ? (
        <Button
          scale="sm"
          variant="tertiary"
          onClick={() => {
            onPresentAccountModal()
          }}
        >
          {accountEllipsis}
        </Button>
      ) : (
        <Button
          scale="sm"
          onClick={() => {
            onPresentConnectModal()
          }}
        >
          Connect
        </Button>
      )}
    </div>
  )
}

export default ConnectButton
