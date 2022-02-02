import { defaultChainId } from "@/helpers/chain";
import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  address: string | null;
  chain: {
    label: string;
    value: number;
  };
} = {
  address: null,
  chain: {
    value: defaultChainId as number,
    label: "FTM",
  },
};

export const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setChain: (state, action) => {
      state.chain = action.payload;
    },
  },
});

// Actions
export const { setAddress, setChain } = userReducer.actions;

export default userReducer.reducer;
