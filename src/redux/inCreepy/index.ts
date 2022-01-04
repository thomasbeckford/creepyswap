/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import fetchInspirit from './fetchInCreepy';

const initialState = { data: [] };
export const InSpiritSlice = createSlice({
	name: 'InSpirit',
	initialState,
	reducers: {
		setInspiritData: (state, action) => {
			const inCreepyData = action.payload;
			state.data = inCreepyData;
		},
	},
});

// Actions
export const { setInspiritData } = InSpiritSlice.actions;

// Thunks
export const fetchInSpiritDataAsync =
	(account: string) => async (dispatch: any) => {
		const inCreepyData = await fetchInspirit(account);
		dispatch(setInspiritData(inCreepyData));
	};

export default InSpiritSlice.reducer;
