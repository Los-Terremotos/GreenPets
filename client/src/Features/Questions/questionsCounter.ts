import { createSlice } from "@reduxjs/toolkit";

const questionsCounter = createSlice({
    name: "questionsCounter",
    initialState: 0,
    reducers: {
        setCounter: (state, action) =>{
            state = action.payload;
            return state;
        }
    }

});
export const {setCounter} = questionsCounter.actions;
export default questionsCounter.reducer;