import { createSlice } from '@reduxjs/toolkit';

interface LightModeState {
  lightMode: boolean;
}

const initialState: LightModeState = {
  lightMode: false,
};

const lightModeSlice = createSlice({
  name: 'lightModeTheme',
  initialState,
  reducers: {
    setLightMode: (state) => {
      state.lightMode = !state.lightMode;
    },
  },
});

export const { setLightMode } = lightModeSlice.actions;
export default lightModeSlice.reducer;