import { createSlice } from '@reduxjs/toolkit';

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
    setNavbarVisibility: (state) => {
      state.isNavbarVisible = !state.isNavbarVisible
    },
  },
});

export const { setNavbarVisibility } = navbarSlice.actions;
export default navbarSlice.reducer;