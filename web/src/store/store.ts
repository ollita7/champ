import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './reducers/profile';

const store = configureStore({
  reducer: {
    profile: profileReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>