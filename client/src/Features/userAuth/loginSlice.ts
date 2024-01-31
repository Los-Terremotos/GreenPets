import { createSlice } from "@reduxjs/toolkit";

interface LoginComponentState {
  loginIsOpen: boolean;
}

const initialState: LoginComponentState = {
  loginIsOpen: false,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    openLogin: (state) => {
      state.loginIsOpen = true;
    },
    closeLogin: (state) => {
      state.loginIsOpen = false;
    }
  }
});

export const { openLogin, closeLogin } = loginSlice.actions;
export default loginSlice.reducer;