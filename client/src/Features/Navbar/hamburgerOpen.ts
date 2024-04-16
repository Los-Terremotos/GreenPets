import { createSlice } from "@reduxjs/toolkit";


const hamburgerOpen = createSlice({
    name: "hamburgerOpen",
    initialState: false,
    reducers: {
        toggleHamburger: (state, action) =>{
            state = action.payload;
            return state;
        }
    }
});

export const { toggleHamburger } = hamburgerOpen.actions;
export default hamburgerOpen.reducer;