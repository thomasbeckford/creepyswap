import { RootState } from '../store';

export const selectAddress = (state: RootState) => state.user.address;
export const selectChainId = (state: RootState) => state.user.chainId;
export const selectIsLoggedIn = (state: RootState) => !!state.user.address;
