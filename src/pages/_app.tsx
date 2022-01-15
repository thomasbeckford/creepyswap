import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { ThemeProvider } from '../providers/theme';
import { store, persistor } from '../redux/store';
import { GlobalStyle } from '../styles/globalStyles';

import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider>
    <GlobalStyle />
    <Provider store={store}>
      <PersistGate
        loading={<div style={{ color: '#fff' }}>Loading</div>}
        persistor={persistor}
      >
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  </ThemeProvider>
);

export default MyApp;
