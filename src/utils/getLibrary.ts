import { Web3Provider } from '@ethersproject/providers'
import { POLLING_INTERVAL } from '../constants'

export default function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider)
  library.pollingInterval = POLLING_INTERVAL
  return library
}
