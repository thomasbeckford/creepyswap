import { createSlice } from '@reduxjs/toolkit';

const initialState: {
  address: string;
  chainId: number | string;
} = {
  address: '',
  chainId: '250', // By default, use the mainnet (Fantom)
};

export const userReducer = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setChainId: (state, action) => {
      state.chainId = action.payload;
    },
  },
});

// Actions
export const { setAddress, setChainId } = userReducer.actions;

export default userReducer.reducer;
