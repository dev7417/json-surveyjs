import { createSlice } from "@reduxjs/toolkit";
import { pages } from "../Components/Page"
import { useState } from "react";
// console.log(pages)

// const deepClone = JSON.parse(JSON.stringify(pages))
// const Clone = structuredClone(pages[0].elements);
// console.log(Clone)

const id = 1;
const initialState = [
    // "pages": [
    //     {
    //         "name": "page1",
    //         "elements": [
    //             {
    //                 id: `${id}`,
    //                 "type": "text",
    //                 "name": `question${id}`,

    //             },

    //         ]
    //     },
    // ]
]


// let pgesData = [{
//     "pages": [
//         {
//             "name": "page1",
//             "elements": [
//                 {
//                     "type1": "text",
//                     "name1": `question${id}`,

//                 },

//             ]
//         },
//     ]
// }]


export const pageSlice = createSlice({
    name: "pagesdata",
    initialState,
    reducers: {
        titledata(state = initialState, action) {
            state.push({

                pages: [
                    {
                        name: "page1",
                        elements: [
                            {
                                id: `${id}`,
                                type: "text",
                                name: `question${id}`,

                            },

                        ]

                    }]
            })
        },
        // Questions(state = initialState, action, titledata) {
        Questions(state = initialState, action) {

            // const nestedData = state.pages.elements;
            // console.log("======================= "type1": "text",
            // "name1": `question${id}`,
            // description: 'description',
            //     type: 'radio',
            //     name: 'question'
            // })  

            // console.log("=======================================>", deepClone[p]
            // state.push(...pages, [{ elements: [{ "type1": "text", "name1": `question${action.payload}`}] }]) 
            // state.push(...state, state.pages.push({ "type1": "text", "name1": `question${action.payload}`}))
            // state.push(...initialState)
            // state.push(pages[0].elements[0].push({"type1":"text", "name1":`question${action.payload}`}))
            // state.push([pages.elements.push({"type":"text","name":"question"})])
            // state.push(objectements,{name:'new page'}]}]}])
            state[0].pages[0].elements.push({
                id: `${action.payload}`,
                type: "text",
                name: `question${action.payload}`,
            })
        },

        deleteBox(state = initialState, action) {
            console.log(action.payload)
            const newData = state[0].pages[0].elements.filter((item, id) => {
                console.log({ item, id })
                return (
                   id !== action.payload
                )
            })
            console.log("===============================>", newData)
            state[0].pages[0].elements.push(newData)
        }
        // duplicatePage(state = initialState, action){

        // }
    }
})
export const { titledata, Questions, deleteBox } = pageSlice.actions
export default pageSlice.reducer