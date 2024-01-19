import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../App/store';



interface plantTypeState {
  value: boolean
}

const initialState: plantTypeState = {
  value: false,
}
//START ON THE MORE INFO BUTTON WHERE I CAN MAKE A GRAPH QL QUERIE TO OUR BACKEND

export const plantTypeSlice = createSlice({
  name: 'plantType',
  initialState,
  reducers: {
    indoor: (state) => {
      state.value = true;
    },
    // outdoor: (state) => {
    //   state.value = false;
    // },
    // Use the PayloadAction type to declare the contents of `action.payload`
    changePlantType: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload
    },
  },
})

export const { indoor, changePlantType } = plantTypeSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.plantType.value

export default plantTypeSlice.reducer


