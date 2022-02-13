import { createSlice } from '@reduxjs/toolkit';

const initialState: {
  isOpen: boolean;
} = {
  isOpen: true,
};

export const sidebarReducer = createSlice({
  name: 'sidebarReducer',
  initialState,
  reducers: {
    setSidebarIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

// Actions
export const { setSidebarIsOpen } = sidebarReducer.actions;

export default sidebarReducer.reducer;
