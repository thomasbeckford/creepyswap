import { defaultChainId } from "@/helpers/chain";
import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  address: string | null;
  chainId: number;
} = {
  address: null,
  chainId: defaultChainId, // Default chainId
};

export const userReducer = createSlice({
  name: "userReducer",
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
