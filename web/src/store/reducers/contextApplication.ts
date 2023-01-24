import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IContextApplication {
  isNeededUpdateProjects?: boolean,
  isNeededUpdateApplications?: boolean,
  isNeededUpdateComponents?: boolean,
}

const initialState: IContextApplication = {
  isNeededUpdateProjects: false,
  isNeededUpdateApplications: false,
  isNeededUpdateComponents: false
}

const contextApplicationSlice = createSlice({
  name: 'application',
  initialState,
  reducers:
  {
    setContextApplicationStatus: (state, action: PayloadAction<IContextApplication>) => {
      const newState = { ...state, ...action.payload };
      return newState;
    }
  }
});

export default contextApplicationSlice.reducer;
export const { setContextApplicationStatus } = contextApplicationSlice.actions;
