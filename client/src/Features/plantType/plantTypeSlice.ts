import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../App/store';



interface plantTypeState {
  value: boolean
}

// Define the initial state using that type
const initialState: plantTypeState = {
  value: false,
}

export const plantTypeSlice = createSlice({
  name: 'plantType',
  // `createSlice` will infer the state type from the `initialState` argument
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


