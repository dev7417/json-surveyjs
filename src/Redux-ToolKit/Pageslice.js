import { createSlice } from "@reduxjs/toolkit";
import { pages } from "../Components/Page"


const initialState = []
console.log(initialState)

export const pageSlice = createSlice({
    name: "pagesdata",
    initialState,
    reducers: {
        titledata(state = initialState, action) {
            state.push({
                surveytitle: 'title',
                description: 'description',
                pagesData: [
                    {
                        name: 'page 1',
                        description: 'description',
                        elements: [{
                            type: "text",
                            questions: "question 1"
                        }],
                    },
                    {
                        name: 'page 2',
                        description: 'description'
                    }
                ]
            })
        },
        Questions(state = initialState, action) {
            state.push({

            })
        }

    }
})
export const { titledata, Questions } = pageSlice.actions
export default pageSlice.reducer