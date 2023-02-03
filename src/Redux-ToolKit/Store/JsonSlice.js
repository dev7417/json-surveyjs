import { createSlice } from "@reduxjs/toolkit";




const initialState = [
    
]






export const jsonSlice = createSlice({
    name: "jsonSliceData",
    initialState,
    reducers:{
        increaseData(state = initialState, action){

        }
    }
})

export const {increaseData} = jsonSlice.actions
export default jsonSlice.reducer