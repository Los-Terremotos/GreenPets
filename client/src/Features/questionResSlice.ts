import { createSlice } from "@reduxjs/toolkit";

const questionResSlice = createSlice({
    name: "questionRes",
    initialState: {},
    reducers:{
        setQuestionRes: (state, action) =>{
            state = action.payload;
            return state;
        }
    }
});

export const {setQuestionRes} = questionResSlice.actions;
export default questionResSlice.reducer;