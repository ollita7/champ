import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IProfileState {
  email: string | null;
  picture: string | null;
  name: string;
  accounts: Array<any>;
}

const initialState: IProfileState = {
  email: null,
  picture: null,
  name: '',
  accounts: []
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<IProfileState>) => {
      const newState = {...state, ...action.payload };
      return newState;
    },
    clearProfile: state => initialState,
  },
});

export default profileSlice.reducer;
export const { setProfile, clearProfile} = profileSlice.actions;
