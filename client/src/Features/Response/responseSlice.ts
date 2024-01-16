import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {Response} from '../../../types.ts';

const questionResponse: Response = {
    indoor: '',
    watering: 1
  } 


const responseSlice = createSlice({
    name: "response",
    initialState: questionResponse,
    reducers:{
        setResponse: (state, action: PayloadAction<Response>) =>{
            state = action.payload;
            return state;
        }
    }
});

export const {setResponse} = responseSlice.actions;
export default responseSlice.reducer;