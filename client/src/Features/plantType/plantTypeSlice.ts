import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../App/store';



interface plantTypeState {
  value: boolean
}

// Define the initial state using that type
const initialState: plantTypeState = {
  value: true,
}



