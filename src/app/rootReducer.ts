import { combineReducers } from '@reduxjs/toolkit';

import pageReducer from '@src/features/pages/pagesSlice';
import userReducer from '@src/features/user/userSlice';

const rootReducer = combineReducers({
  page: pageReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
