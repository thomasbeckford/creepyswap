import { NetworkInterface } from '@/types';
import { networks } from '@/utils/networks';
import { createSlice } from '@reduxjs/toolkit';

const initialState: {
  address: string | null;
  network: NetworkInterface;
  acceptTerms: boolean;
} = {
  address: null,
  network: networks[0],
  acceptTerms: false,
};

export const userReducer = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setNetwork: (state, action) => {
      state.network = action.payload;
    },
    setAcceptTerms: (state, action) => {
      state.acceptTerms = action.payload;
    },
  },
});

// Actions
export const { setAddress, setNetwork, setAcceptTerms } = userReducer.actions;

export default userReducer.reducer;
