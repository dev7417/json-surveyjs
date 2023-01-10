import { configureStore } from "@reduxjs/toolkit";
import surveyDataReducer from '../Surveyslice'
import pagesdataReducer from '../Pageslice'

export const store = configureStore({
    reducer: {
     surveyDataReducer,
     pagesdataReducer
    }
})