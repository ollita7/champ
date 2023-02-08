import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './reducers/profile';
import contextApplicationReducer from './reducers/contextApplication';

const store = configureStore({
  reducer: {
    profile: profileReducer,
    contextApplication: contextApplicationReducer
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>