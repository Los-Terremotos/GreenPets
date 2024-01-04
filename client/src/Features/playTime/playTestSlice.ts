import { createSlice } from '@reduxjs/toolkit';
//import React from  'react';

// function to generate hex colors
const getRandomHexColor = () => {
  // Generate a random hex color
  return '#' + Math.floor(Math.random()*16777215).toString(16);
}


const testDisplaySlice = createSlice({
  name: 'testField',

  initialState: {
    testBoolean: false,
    testInputField: "",
    testBGColor: "#7FFF00",
  },

  reducers: {
    updateTestBoolean: (state) => {
    state.testBoolean = !state.testBoolean;

    
    },
    // updateInputField: (state, action) =>{
    //     state.testInputField = action;
    // },
    updateTestBGColor: (state) => {
      state.testBGColor = getRandomHexColor();
    }
  }
})

// const { actions, reducer } = testDisplaySlice;

export const {
//   insert reducer methods here:
  updateTestBoolean,
  //updateTestField,
  updateTestBGColor,
} = testDisplaySlice.actions;

export default testDisplaySlice.reducer;