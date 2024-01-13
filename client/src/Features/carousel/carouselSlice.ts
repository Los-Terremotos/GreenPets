import { createSlice } from "@reduxjs/toolkit";

interface CarouselState {
  currentIndex: number;
}

const initialState: CarouselState = {
  currentIndex: 0,
};

const carouselSlice = createSlice({
  name: 'carousel',
  initialState,
  reducers: {
    nextSlide: (state, action) => {
      state.currentIndex = state.currentIndex === action.payload - 1 ? 0 : state.currentIndex + 1;
    }
  }
});

export const { nextSlide } = carouselSlice.actions;
export default carouselSlice.reducer;