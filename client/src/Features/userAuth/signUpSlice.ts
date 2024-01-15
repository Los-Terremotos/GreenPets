import { createSlice } from "@reduxjs/toolkit";

interface SignUpComponentState {
  signUpIsOpen: boolean;
}

const initialState: SignUpComponentState = {
  signUpIsOpen: false,
};

const signUpSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    openSignUp: (state) => {
      state.signUpIsOpen = true;
    },
    closeSignUp: (state) => {
      state.signUpIsOpen = false;
    }
  }
});

export const { openSignUp, closeSignUp } = signUpSlice.actions;
export default signUpSlice.reducer;