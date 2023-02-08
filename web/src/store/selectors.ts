import { createSelector } from '@reduxjs/toolkit';
import { IContextApplication } from './reducers/contextApplication';
import { IProfileState } from './reducers/profile';
import { RootState } from './store';


export const getProfile = createSelector([(store: RootState): IProfileState => store.profile], profile => profile);
export const contextApplicationStatus = createSelector([(store: RootState): IContextApplication => store.contextApplication], application => application);