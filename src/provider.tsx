import React, { useEffect } from 'react';
import { useState } from 'react';

export const WalletContext = React.createContext<any>({});

export const WalletProvider = ({ children, value }: any) => {
  const [provider, setProvider] = useState({});

  useEffect(() => {
    setProvider(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const values = {
    provider,
    setProvider,
  };

  return (
    <WalletContext.Provider value={values}>{children}</WalletContext.Provider>
  );
};
