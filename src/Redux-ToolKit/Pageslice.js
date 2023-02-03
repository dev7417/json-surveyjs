import { createSlice } from "@reduxjs/toolkit";
import { survey } from "../Components/Survey";
import { pages } from "../Components/Page"
import { useState } from "react";


const id = 1;
const initialState = [
    // components:"hello"

    {
        pages: [
            {
                name: "page",
                id: 1,
                elements: [
                    {
                        id: 1,
                        type: "text",
                        name: 'question',

                    },

                ]
            },
        ]
    }
]





export const pageSlice = createSlice({
    name: "pagesdata",
    initialState,
    reducers: {
        titledata(state = initialState, action) {
            console.log(action.payload, "====================================================================>")
            // const page = action.payload.pageIncrement

            //   state.push({  pages: [
            //         {
            //             name:`page${id}`,
            //             // id: 1,
            //             elements: [
            //                 {
            //                     id: 1,
            //                     type: "text",
            //                     name: "question",

            //                 },

            //             ]

            //         }]
            //     })

        },
        // Questions(state = initialState, action, titledata) {
        Questions(state = initialState, action) {
            console.log(action.payload)
            const index = action.payload.index;
            const increment = action.payload.increment;
            // const count = action.payload.count;

            // const sideData = action.payload.sideData;
            // const mainElem = action.payload.sideData;


            state[0].pages[index].elements.push({
                id: increment,
                type: action.payload.Data || "text",
                name: 'question'

            })


        },

        deleteBox(state = initialState, action) {
            console.log(action.payload)

            state[0].pages[action.payload.index].elements.splice(action.payload.ind, 1)


        },
        duplicatePage(state = initialState, action) {

            const newpage = structuredClone(action.payload.newItem);
            console.log(newpage)
            state[0].pages.push(newpage)
            console.log({ ...newpage })
        },
        changeType(state = initialState, action) {
            state[0].pages[action.payload.index].elements[action.payload.ind].type = action.payload.title
        },

        deleteMainBox(state = initialState, action) {
            state[0].pages.splice(action.payload, 1)
        },
        sideActionButtons(state = initialState, action) {
            console.log(action.payload)
            // state[0].pages[0].elements
            // state[0].pages[0].elements.type.push(action.payload)
            // console.log(action.payload)
            // const increment = action.payload.increment;
            // console.log(increment)
            // const data = action.payload.Data
            // console.log({data})
            // switch(action.payload){
            //     case "Radiogroup":
            //         state[0].pages[0].elements.push({
            //             id: 1,
            //             type: 'radio',
            //             name: 'question'
            //         })
            //         break;
            // }
        },
        pagesIndex(state = initialState, action) {

        }
    }
})
export const { titledata, Questions, deleteBox, duplicatePage, deleteMainBox, sideActionButtons, changeType, pagesIndex } = pageSlice.actions
export default pageSlice.reducer