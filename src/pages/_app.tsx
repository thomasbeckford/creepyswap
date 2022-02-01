import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { store } from "../redux/store";

import theme from "../theme";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

declare global {
  export interface Window {
    ethereum?: any;
  }
}

let persistor = persistStore(store);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <PersistGate
          loading={<div style={{ color: "#fff" }}>Loading</div>}
          persistor={persistor}
        >
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;
