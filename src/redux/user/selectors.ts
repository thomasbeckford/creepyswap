import { RootState } from '../store';

export const selectAddress = (state: RootState) => state.user.address;
export const selectNetwork = (state: RootState) => state.user.network;
export const selectIsLoggedIn = (state: RootState) => !!state.user.address;
export const selectAcceptTerms = (state: RootState) => state.user.acceptTerms;
