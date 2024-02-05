/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */
import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '..';

interface ProfileImage {
  key?: string;
  name?: string;
  type?: string;
  url?: string;
}

// Define a type for the slice state
export interface ProfileState {
  userName: string;
  email: string;
  profileImage?: ProfileImage;
  _id?: string;
  createdAt?: Date;
  status?: boolean;
}

// Define the initial state using that type
const initialState: ProfileState = {
  userName: '',
  email: '',
  _id: '',
  createdAt: new Date(),
  status: false,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    resetState: () => initialState,
    setProfileData: (state, action) => {
      const { userName, email, profileImage, _id, createdAt, status } = action.payload;
      state.email = email;
      state.userName = userName;
      state.profileImage = profileImage;
      state._id = _id;
      state.createdAt = createdAt;
      state.status = status;
    },
  },
});

export const { setProfileData, resetState } = profileSlice.actions;

export default profileSlice.reducer;

export const selectCurrentProfile = (state: RootState) => state.profile;
