import { createSlice } from "@reduxjs/toolkit";

const queryResultSlice = createSlice({
    name: "queryResult",
    initialState: [],
    reducers:{
        setQueryRes: (state, action) =>{
            state = action.payload;
            return state;
        }
    }
});

export const {setQueryRes} = queryResultSlice.actions;
export default queryResultSlice.reducer;