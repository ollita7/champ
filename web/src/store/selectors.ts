import { createSelector } from '@reduxjs/toolkit';
import { IProfileState } from './reducers/profile';
import { IApplicationState } from './reducers/application';
import { RootState } from './store';

export const getApplication = createSelector([(store: RootState): IApplicationState => store.application], application => application);
export const getProfile = createSelector([(store: RootState): IProfileState => store.profile], profile => profile);