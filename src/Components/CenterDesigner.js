import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { pagesdata } from '../Redux-ToolKit/Pageslice'
import {AiOutlineEllipsis} from 'react-icons/ai'

export default function CenterDesigner() {
    const dispatch = useDispatch()
    const pagessdata = useSelector((state) => state.pagesdataReducer[0])
    console.log(pagessdata)
    return (



        <>



            {
                (!pagessdata) ?

                    <>
                        <div className="designer_main">
                            <div className="designer_content">
                                <p>The survey is empty. Drag an element from the toolbox or click the button below</p>
                                <div className="designer_addBtn">
                                    <div className="designer_addbtn-2 my-2">
                                <span className='des-btn' style={{fontWeight:'400'}} onClick={() => dispatch(pagesdata())}>Add Question</span>
                                <button className="icons"><AiOutlineEllipsis/></button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </>

                    :


                    <div className="designer_button">

                    </div>

            }


        </>

    )
}
