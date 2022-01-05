import { CHAIN_ID } from '../constants'
import { nodes } from './getRpcUrl'

export const setupNetwork = async () => {
  const provider = window.ethereum
  if (provider) {
    try {
      await provider.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: `0x${CHAIN_ID.toString(16)}`,
            chainName: 'Fantom Opera Mainnet',
            nativeCurrency: {
              name: 'FTM',
              symbol: 'ftm',
              decimals: 18,
            },
            rpcUrls: nodes,
            blockExplorerUrls: ['https://ftmscan.com/'],
          },
        ],
      })
      return true
    } catch (error) {
      console.error(error)
      return false
    }
  } else {
    console.error(
      "Can't setup the FTM network on metaMask because window.ethereum is undefined"
    )
    return false
  }
}

export default null
