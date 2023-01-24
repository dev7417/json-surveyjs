import { createSlice } from "@reduxjs/toolkit";
import { pages } from "../Components/Page"
import { useState } from "react";
// console.log(pages)

// const deepClone = JSON.parse(JSON.stringify(pages))
// const Clone = structuredClone(pages[0].elements);
// console.log(Clone)


const id = 1;
const initialState = [
    // {
    //     "pages": [
    //         {
    //             "name": "page1",
    //             id:1,
    //             "elements": [
    //                 {
    //                     id: `${id}`,
    //                     "type": "text",
    //                     "name": `question${id}`,

    //                 },

    //             ]
    //         },
    //     ]
    // }
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
                        name: "page",
                        // id: 1,
                        elements: [
                            {
                                id: 1,
                                type: "text",
                                name: "question",

                            },

                        ]

                    }]
            })
        },
        // Questions(state = initialState, action, titledata) {
        Questions(state = initialState, action) {
            const index = action.payload.index;
            const increment = action.payload.increment;
            const counting = action.payload.count.current;

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
            state[0].pages[index].elements.push({
                id: increment,
                type: 'text',
                name: 'question'

            })
        },

        deleteBox(state = initialState, action) {
            console.log(action.payload)

            state[0].pages[action.payload.index].elements.splice(action.payload.ind, 1)


        },
        duplicatePage(state = initialState, action) {

            const newpage = structuredClone(action.payload);
            console.log(newpage)
            state[0].pages.push(newpage)
            console.log(newpage)
        },
        deleteMainBox(state = initialState, action) {
            state[0].pages.splice(action.payload, 1)
        }
    }
})
export const { titledata, Questions, deleteBox, duplicatePage, deleteMainBox } = pageSlice.actions
export default pageSlice.reducer