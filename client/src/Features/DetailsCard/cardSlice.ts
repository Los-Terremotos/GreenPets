import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlantInfo } from "../../../types";

interface DetailCardState {
  detailCardIsActive: boolean;
  data?: PlantInfo | null;
  careGuides?: Record<string, string> | null;
}

const initialState: DetailCardState = {
  detailCardIsActive: false,
  data: null,
  careGuides: null,
}

const detailCardSlice = createSlice({
  name: 'detailCard',
  initialState,
  reducers: {
    openDetailCard: (state, action: PayloadAction<PlantInfo | null>) => {
      state.detailCardIsActive = true;
      state.data = action.payload;
    },
    closeDetailCard: (state) => {
      state.detailCardIsActive = false;
      state.data = null;
    },
    setCareGuides: (state, action: PayloadAction<Record<string, string>>) => {
      state.careGuides = action.payload;
    },
  }
});

export const {openDetailCard, closeDetailCard, setCareGuides } = detailCardSlice.actions;
export const selectDetailCardState = (state: { detailCard: DetailCardState }) => state.detailCard;
export default detailCardSlice.reducer;