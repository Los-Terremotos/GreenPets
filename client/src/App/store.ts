import { configureStore } from '@reduxjs/toolkit';
import plantTypeReducer from '../Features/plantType/plantTypeSlice';
import userAuthReducer from '../Features/userAuth/authSlice';
import blahBlah from '../Features/playTime/playTestSlice';
import modalReducer from '../Features/modal/modalSlice';
import loginReducer from '../Features/userAuth/loginSlice';
import signUpReducer from '../Features/userAuth/signUpSlice';
import carouselReducer from '../Features/carousel/CarouselSlice';

const store = configureStore({
  reducer: {
    //add reducer information
    //plantType: plantTypeReducer incase we want to update the state of the plant type from indoor to outdoor
    plantType: plantTypeReducer,
    userAuth: userAuthReducer,
    testField: blahBlah,
    modalToggle: modalReducer,
    loginToggle: loginReducer,
    signUpToggle: signUpReducer,
    carousel: carouselReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {plantType: plantTypeState}
export type AppDispatch = typeof store.dispatch
export default store;