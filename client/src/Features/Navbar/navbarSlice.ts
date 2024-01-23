import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NavbarState {
  isNavbarVisible: boolean;
}

const initialState: NavbarState = {
  isNavbarVisible: false,
};

const navbarSlice = createSlice({
  name: 'navbarVisible',
  initialState,
  reducers: {
    setNavbarVisibility: (state, action: PayloadAction<boolean>) => {
      state.isNavbarVisible = action.payload;
    },
  },
});

export const { setNavbarVisibility } = navbarSlice.actions;
export default navbarSlice.reducer;