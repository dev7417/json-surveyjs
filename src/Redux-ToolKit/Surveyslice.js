import { createSlice } from "@reduxjs/toolkit";
import { survey } from "../Components/Survey";


const initialState = {
    survey: survey,
    designer: survey[0].content[0].forms,
    preview: survey[0].content[0]
}
console.log(initialState.designer)
export const surveyslice = createSlice({
    name: "surveyData",
    initialState,
    reducers: {
        designerData(state = initialState, action) {
            //  state.designer.push(survey[0].content[0].forms)
        }

    }
})
export const { designerData } = surveyslice.actions
export default surveyslice.reducer