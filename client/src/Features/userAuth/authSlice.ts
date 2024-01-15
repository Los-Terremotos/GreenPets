import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'userAuth',
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    }
  }
});

export const { login, logout } = authSlice.actions;
export const selectIsAuthenticated = (state: { auth: { isAuthenticated: boolean; }; }) => state.auth.isAuthenticated;
export default authSlice.reducer;