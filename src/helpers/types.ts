export interface IProviderInfo {
  name: string;
  type: string;
  logo: string;
  check: string;
  styled: {
    [prop: string]: any;
  };
}

export interface IProviderOptions {
  [selectedProvider: string]: {
    package: any;
    options: any;
  };
}

export interface IInjectedProvidersMap {
  injectedAvailable: boolean;
  [isselectedProvider: string]: boolean;
}

export interface IProviderCallback {
  name: string | null;
  onClick: () => Promise<void>;
}

export interface IWallet {
  name: string;
  type: string;
  alt: string;
  src: string;
}
