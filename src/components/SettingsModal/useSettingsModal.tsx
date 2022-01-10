import React from 'react'

import { useModal } from '../Modal'
import SettingsModal from './SettingsModal'

interface ReturnType {
  onPresentSettingsModal: () => void
}

const useSettingsModal = (): ReturnType => {
  const [onPresentSettingsModal] = useModal(<SettingsModal />)

  return { onPresentSettingsModal }
}

export default useSettingsModal
