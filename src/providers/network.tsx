import { createWeb3ReactRoot } from '@web3-react/core'
import { DEFAULT_PROVIDER_NAME } from '../constants'

const Web3ReactProviderDefault = createWeb3ReactRoot(DEFAULT_PROVIDER_NAME)

const Web3ReactProviderDefaultSSR = ({ children, getLibrary }: any) => (
  <Web3ReactProviderDefault getLibrary={getLibrary}>
    {children}
  </Web3ReactProviderDefault>
)

export default Web3ReactProviderDefaultSSR
