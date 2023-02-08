import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IApplicationState {
  tournament: string | null;
  category: string | null;
  
}

const initialState: IApplicationState = {
  tournament: '63e22e9be767643a2f1869cd',
  category: 'MA'
}

const applicationSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {
    setApplication: (state, action: PayloadAction<IApplicationState>) => {
      const newState = {...state, ...action.payload };
      return newState;
    },
    clearApplication: state => initialState,
  },
});

export default applicationSlice.reducer;
export const { setApplication, clearApplication} = applicationSlice.actions;
