import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlantInfo } from "../../../types";

interface DetailCardState {
  detailCardIsActive: boolean;
  data?: PlantInfo | null;
}

const initialState: DetailCardState = {
  detailCardIsActive: false,
  data: null,
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
  }
});

export const {openDetailCard, closeDetailCard } = detailCardSlice.actions;
export const selectDetailCardState = (state: { detailCard: DetailCardState }) => state.detailCard;
export default detailCardSlice.reducer;