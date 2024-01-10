import { configureStore } from '@reduxjs/toolkit';
import plantTypeReducer from '../Features/plantType/plantTypeSlice';
import questionsSliceReducer from '../Features/Questions/questionsSlice';
import responseSliceReducer from '../Features/Response/responseSlice';
import setQuestionResReducer from '../Features/QuestionResponse/questionResSlice';

export const store = configureStore({
  reducer: {
    //add reducer information
    //plantType: plantTypeReducer incase we want to update the state of the plant type from indoor to outdoor
    plantType: plantTypeReducer,
    questions: questionsSliceReducer,
    response: responseSliceReducer,
    questionRes: setQuestionResReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {plantType: plantTypeState}
export type AppDispatch = typeof store.dispatch