import { RootState } from "../store";

export const selectAddress = (state: RootState) => state.user.address;
export const selectChain = (state: RootState) => state.user.chain;
export const selectIsLoggedIn = (state: RootState) => !!state.user.address;
export const selectWalletProvider = (state: RootState) =>
  state.user.walletProvider;
