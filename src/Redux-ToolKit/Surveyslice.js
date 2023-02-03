import { createSlice } from "@reduxjs/toolkit";
import { survey } from "../Components/Survey";


const initialState = {
    survey: survey,
    designer: survey[0].content[0].forms,
    preview: survey[0].content[0],
    renderComponents: 'single input',
    index: 0,
    value: 1
  
}
console.log(initialState.designer)
export const surveyslice = createSlice({
    
    name: "surveyData",
    initialState,
    reducers: {
        designerData(state = initialState, action) {
            //  state.designer.push(survey[0].content[0].forms)
            console.log(action.payload)
            state.renderComponents = action.payload;
            
        },
        indextype(state = initialState, action){
            state.index = action.payload.index
           state.value =state.value+ action.payload.cnt

        }

    }
})
export const { designerData, indextype } = surveyslice.actions
export default surveyslice.reducer