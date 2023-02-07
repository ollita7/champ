import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IProfileState {
  country: string | null;
  email: string | null;
  name: string | null;
  role: string | null;
  status: string | null;
  token: string | null;
  _id: string | null;
}

const initialState: IProfileState = {
  country: null,
  email: null,
  name: null,
  role: null,
  status: null,
  token: null,
  _id: null,
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
