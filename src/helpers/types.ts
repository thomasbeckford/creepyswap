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
  [providerName: string]: {
    package: any;
    options: any;
  };
}

export interface IInjectedProvidersMap {
  injectedAvailable: boolean;
  [isProviderName: string]: boolean;
}

export interface IProviderCallback {
  name: string | null;
  onClick: () => Promise<void>;
}
