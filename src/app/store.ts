import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import rootReducer, { RootState } from './rootReducer';

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;

export function useAppDispatch(): AppDispatch {
  return useDispatch<AppDispatch>();
}

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default store;
