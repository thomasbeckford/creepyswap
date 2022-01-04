import { Web3ReactProvider } from '@web3-react/core';
import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { ThemeProvider } from '../providers/theme';
import { ModalProvider } from '../providers/modal';

import { getLibrary } from '../utils/Web3React';
import { GlobalStyle } from '../styles/globalStyles';
import { store } from '../redux/store';
import { Provider } from 'react-redux';

declare global {
	interface Window {
		ethereum: any;
	}
}

const Web3ReactProviderDefault = dynamic(() => import('../providers/network'), {
	ssr: false,
});

const MyApp = ({ Component, pageProps }: AppProps) => (
	<>
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
	</>
);

export default MyApp;
