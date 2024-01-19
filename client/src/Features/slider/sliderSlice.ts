import { createSlice } from "@reduxjs/toolkit";

interface SliderState {
  currentIndex: number;
}

const initialState: SliderState = {
  currentIndex: 0,
};

const SliderSlice = createSlice({
  name: 'carousel',
  initialState,
  reducers: {
    nextSlide: (state, action) => {
      state.currentIndex = (state.currentIndex + 1) % action.payload;
    },
  },
});

export const { nextSlide } = SliderSlice.actions;
export default SliderSlice.reducer;