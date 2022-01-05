import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import creepy from './creepy'

export const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {
    creepy,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
