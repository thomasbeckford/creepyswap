import { Web3ReactProvider } from '@web3-react/core'
import { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { Provider } from 'react-redux'

import { ModalProvider } from '../providers/modal'
import { ThemeProvider } from '../providers/theme'
import { store } from '../redux/store'
import { GlobalStyle } from '../styles/globalStyles'
import { getLibrary } from '../utils/Web3React'

declare global {
  interface Window {
    ethereum: any
  }
}

const Web3ReactProviderDefault = dynamic(() => import('../providers/network'), {
  ssr: false,
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Web3ReactProvider getLibrary={getLibrary}>
        <Web3ReactProviderDefault getLibrary={getLibrary}>
          <ModalProvider>
            <Provider store={store}>
              <Component {...pageProps} />
            </Provider>
          </ModalProvider>
        </Web3ReactProviderDefault>
      </Web3ReactProvider>
    </ThemeProvider>
  )
}

export default MyApp
