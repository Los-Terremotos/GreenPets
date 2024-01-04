import { configureStore } from '@reduxjs/toolkit';
import plantTypeReducer from '../Features/plantType/plantTypeSlice';
import blahBlah from '../Features/playTime/playTestSlice';


export const store = configureStore({
  reducer: {
    //add reducer information
    //plantType: plantTypeReducer incase we want to update the state of the plant type from indoor to outdoor
    plantType: plantTypeReducer,
    testField: blahBlah,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {plantType: plantTypeState}
export type AppDispatch = typeof store.dispatch