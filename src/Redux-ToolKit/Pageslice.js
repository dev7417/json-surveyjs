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
                "pages": [
                    {
                        "name": "page1",
                        "elements": [
                            {
                                "type1": "text",
                                "name1": "question1"
                            },
                            {
                                "type1": "text",
                                "name1": "question2"
                            },
                        ]
                    },
                ]
            })
        },
        Questions(state = initialState, action) {
            state.push({
                "elements": [
                    {
                        "type1": "text",
                        "name1": "question3"
                    },
                    {
                        "type1": "text",
                        "name1": "question4"
                    },
                ]
            })
        }

    }
})
export const { titledata, Questions } = pageSlice.actions
export default pageSlice.reducer