import { configureStore } from "@reduxjs/toolkit";
import surveyDataReducer from '../Surveyslice'
import pagesdataReducer from '../Pageslice'
import jsonSliceReducer from './JsonSlice'

export const store = configureStore({
    reducer: {
     surveyDataReducer,
     pagesdataReducer,
     jsonSliceReducer
    }
}) 