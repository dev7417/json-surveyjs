import { createSlice } from "@reduxjs/toolkit";
import { pages } from "../Components/Page"


const initialState = []
console.log(initialState)

export const pageSlice = createSlice({
    name: "pagesdata",
    initialState,
    reducers: {
        pagesdata(state = initialState, action) {
            state.push({

                name: "page 1",
                elements: [{
                    type: "text",
                    name: "question 1"
                }]

            })
        }
    }
})
export const { pagesdata } = pageSlice.actions
export default pageSlice.reducer