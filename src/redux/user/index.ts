import { NetworkInterface } from "@/types";
import { networks } from "@/utils/networks";
import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  address: string | null;
  network: NetworkInterface;
} = {
  address: null,
  network: networks[0],
};

export const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setNetwork: (state, action) => {
      state.network = action.payload;
    },
  },
});

// Actions
export const { setAddress, setNetwork } = userReducer.actions;

export default userReducer.reducer;
