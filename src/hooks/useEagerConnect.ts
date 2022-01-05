import { useEffect } from 'react'
import { CONNECTOR_LOCAL_STORAGE_KEY, ConnectorNames } from '../constants'
import useAuth from './useAuth'

const useEagerConnect = () => {
  const { login } = useAuth()

  useEffect(() => {
    const walletConnectors = ['walletconnect', 'trustwallet']
    const connectorId = window.localStorage.getItem(
      CONNECTOR_LOCAL_STORAGE_KEY
    ) as ConnectorNames

    console.log('ConnectorID', connectorId)

    if (!walletConnectors.includes(connectorId)) {
      login(connectorId)
    }
  }, [login])
}

export default useEagerConnect
