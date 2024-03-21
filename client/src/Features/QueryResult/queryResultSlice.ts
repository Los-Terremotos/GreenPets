import { createSlice } from "@reduxjs/toolkit";
import { plant } from "../../../types";

const queryResultSlice = createSlice({
    name: "queryResult",
    initialState: [],
    reducers:{
        setQueryRes: (state, action) =>{
            const plantArr = action.payload;
           
            console.log(plantArr);
            // action.payload.filter((plant: plant)=> plant.default_image?.thumbnail && plant.default_image.thumbnail !== "https://perenual.com/storage/image/upgrade_access.jpg");
            state = action.payload;
            return state;
        }
    }
});

export const {setQueryRes} = queryResultSlice.actions;
export default queryResultSlice.reducer;