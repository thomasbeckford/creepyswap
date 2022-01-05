import React from 'react'

import { CONNECTOR_LOCAL_STORAGE_KEY } from '../../constants'
import Flex from '../Box/Flex'
import Button from '../Button/Button'
import LinkExternal from '../Link/LinkExternal'
import { Modal } from '../Modal'
import Text from '../Text/Text'
import CopyToClipboard from './CopyToClipboard'

interface Props {
  account: string
  logout: () => void
  onDismiss?: () => void
}

const AccountModal: React.FC<Props> = ({
  account,
  logout,
  onDismiss = () => null,
}) => (
  <Modal title="Your wallet" onDismiss={onDismiss}>
    <Text
      fontSize="20px"
      bold
      style={{
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        marginBottom: '8px',
      }}
    >
      {account}
    </Text>
    <Flex mb="32px">
      <LinkExternal
        small
        href={`https://ftmscan.com/address/${account}`}
        mr="16px"
      >
        View on FtmScan
      </LinkExternal>
      <CopyToClipboard toCopy={account}>Copy Address</CopyToClipboard>
    </Flex>
    <Flex justifyContent="center">
      <Button
        scale="sm"
        variant="secondary"
        onClick={() => {
          logout()
          window.localStorage.removeItem(CONNECTOR_LOCAL_STORAGE_KEY)
          onDismiss()
        }}
      >
        Logout
      </Button>
    </Flex>
  </Modal>
)

export default AccountModal
