/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */
import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '..';

// Define a type for the slice state
export interface AuthState {
  token: null | string;
  refresh_token: null | string;
}

// Define the initial state using that type
const initialState: AuthState = {
  token: '',
  refresh_token: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetState: () => initialState,
    setCredentials: (state, action) => {
      const { token, refresh_token } = action.payload;
      state.token = token;
      state.refresh_token = refresh_token;
    },
  },
});

export const { setCredentials, resetState } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentToken = (state: RootState) => state.auth.token;
export const selectCurrentRefreshToken = (state: RootState) => state.auth.refresh_token;
