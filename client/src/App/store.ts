import { configureStore } from '@reduxjs/toolkit';
//import plantTypeReducer from '../Features/plantType/plantTypeSlice';
import questionsSliceReducer from '../Features/Questions/questionsSlice';
import responseSliceReducer from '../Features/Response/responseSlice';
import setQueryResReducer from '../Features/QueryResult/queryResultSlice';
import userAuthReducer from '../Features/userAuth/authSlice';
import blahBlah from '../Features/playTime/playTestSlice';
import modalReducer from '../Features/modal/modalSlice';
import loginReducer from '../Features/userAuth/loginSlice';
import signUpReducer from '../Features/userAuth/signUpSlice';
import carouselReducer from '../Features/slider/sliderSlice';
import navbarReducer from '../Features/Navbar/navbarSlice';
import lightModeReducer from '../Features/Navbar/lightModeSlice';

export const store = configureStore({
  reducer: {
    //add reducer information
    //plantType: plantTypeReducer incase we want to update the state of the plant type from indoor to outdoor
    questions: questionsSliceReducer,
    response: responseSliceReducer,
    queryResult: setQueryResReducer,
    userAuth: userAuthReducer,
    testField: blahBlah,
    modalToggle: modalReducer,
    loginToggle: loginReducer,
    signUpToggle: signUpReducer,
    carousel: carouselReducer,
    isNavbarVisible: navbarReducer,
    lightModeToggle: lightModeReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {plantType: plantTypeState}
export type AppDispatch = typeof store.dispatch
export default store;