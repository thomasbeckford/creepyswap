import React from 'react'

import { Modal } from '../Modal'
import { Toggle } from '../Toggle'

interface Props {
  onDismiss?: () => void
}

const SettingsModal: React.FC<Props> = ({ onDismiss = () => null }) => (
  <Modal title="Settings Modal" onDismiss={onDismiss}>
    <Toggle />
  </Modal>
)

export default SettingsModal
