import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/Users/UserSlice';

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});
