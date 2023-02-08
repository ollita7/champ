import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './reducers/profile';
import applicationReducer from './reducers/application';

const store = configureStore({
  reducer: {
    profile: profileReducer,
    application: applicationReducer
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>