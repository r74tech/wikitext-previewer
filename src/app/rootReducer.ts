import { combineReducers } from '@reduxjs/toolkit';

import pageReducer from '@src/features/pages/pagesSlice';

const rootReducer = combineReducers({
  page: pageReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
