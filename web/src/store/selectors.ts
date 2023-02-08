import { createSelector } from '@reduxjs/toolkit';
import { IProfileState } from './reducers/profile';
import { RootState } from './store';


export const getProfile = createSelector([(store: RootState): IProfileState => store.profile], profile => profile);