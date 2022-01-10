import React from 'react'

import { useWeb3React } from '@web3-react/core'

import useAuth from '../../hooks/useAuth'
// import { Button } from '../Button'
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
    <div style={{ display: 'flex', alignItems: 'center', height: 50 }}>
      <div
        style={{ height: 30, width: 30, borderRadius: 40, background: '#bbb' }}
      />{' '}
      <span style={{ marginLeft: 5 }}>$0.001</span>
      {account ? (
        <div style={{ marginLeft: 10 }}>
          <div
            style={{ cursor: 'pointer', marginLeft: 10 }}
            onClick={onPresentAccountModal}
          >
            {accountEllipsis}
          </div>
        </div>
      ) : (
        <div
          style={{ cursor: 'pointer', marginLeft: 10 }}
          onClick={onPresentConnectModal}
        >
          Connect Wallet
        </div>
      )}
    </div>
  )
}

export default ConnectButton
