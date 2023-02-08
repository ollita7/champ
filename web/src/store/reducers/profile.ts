import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useGetUser } from '../../network/services/user.service';

export interface IProfileState {
  country: string | null;
  email: string | null;
  name: string | null;
  role: string | null;
  status: string | null;
  token: string | null;
  _id: string | null;
}

const user = useGetUser();
const initialState: IProfileState = {
  country: user?.country,
  email: user?.email,
  name: user?.name,
  role: user?.role,
  status: user?.status,
  token: user?.token,
  _id: user?._id,
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<IProfileState>) => {
      const newState = {...state, ...action.payload };
      return newState;
    },
    clearProfile: state => useGetUser(),
  },
});

export default profileSlice.reducer;
export const { setProfile, clearProfile} = profileSlice.actions;
