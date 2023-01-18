import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BsGrid3X2Gap } from 'react-icons/bs'
import { AiOutlineEllipsis } from 'react-icons/ai'
import { RiDeleteBin5Line } from 'react-icons/ri'
import "./header.css";
import { pages } from "./Page";
import Pagesdata from "./Pagesdata";
import { Questions, deleteBox } from "../Redux-ToolKit/Pageslice";
import { HiOutlineDuplicate } from 'react-icons/hi'
import { useDispatch } from "react-redux";
export default function Questioncomponents(props) {
  console.log(props);
  const dispatch = useDispatch()
  const defaultdata = useSelector((state) => state.pagesdataReducer);
  console.log(defaultdata)
  const innerQues = defaultdata[0].pages;
  console.log(innerQues);
  console.log(defaultdata[0].pages);
  console.log(defaultdata[0].pages[0].elements);
  const elements = defaultdata[0].pages[0].elements;
  console.log(elements)
  const [increment, setIncrement] = useState(2)
  const [show, setShow] = useState('hidden')
  console.log(show)


  const handleAdd = () => {
    setIncrement(increment + 1)
    dispatch(Questions(increment))

  }
  const handleDelete = (index)=>{
    console.log(index)
    dispatch(deleteBox(index))
  }
  const handleMouseEnter = () => {
    setShow('visible')
  }
  const handleMouseLeave = () => {
    setShow('hidden')
  }


  console.log(Questions)
  return (
    <div>
      <>
        {innerQues.map((items, index) => {
          console.log(items);

          return (
            <>
              <div className="main_pages" tabIndex={12345} key={index}>
                <div className="pages">
                  <div className="pages_data">
                    <div className="span-1">
                      <span className="span1" contentEditable="true">
                        {items.name}
                      </span>
                    </div>
                    <div className="span-2 my-2">
                      <span className="span2" contentEditable="true">
                        description
                      </span>
                    </div>

                    {items.elements.map((data, index) => (
                      // console.log(data)
                      
                      <>
                        <div className="question_div" key={index}>
                          <div className="question_box" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} tabIndex={12345}>
                            <div className="drag_icon">
                              <BsGrid3X2Gap />
                            </div>
                            <div className="questions">
                              <div className="span_questions">
                                <span contentEditable="true"> {data.name}  </span>
                              </div>
                              <div className="question_input my-2" style={{ height: '100%' }}>
                                <input type={data.type} disabled style={{ width: '100%', height: '50px' }} />
                              </div>
                              <div className="action_icons" style={{ visibility: `${show}` }} >
                                <div className="Aicons">
                                  <div className="single_inputs">
                                    single input
                                  </div>
                                  <div className="crud_icons">
                                    <div onClick={handleAdd}><span><HiOutlineDuplicate /> Duplicate</span></div>
                                    <div><input type="checkbox" id="switch" /><label for="switch">Toggle</label> <span>Required</span> </div>
                                    <div onClick={()=>handleDelete(index)}><span><RiDeleteBin5Line />Delete</span></div>
                                  </div>
                                </div>

                              </div>

                            </div>

                          </div>
                        </div>

                      </>
                      
                    ))}

                  </div>

                  <div className="add_question_btn my-2">
                    <div className="btn" onClick={handleAdd}>
                      {/* <div className="btn" onClick={handleAdd}> */}
                      <button>Add Questions</button>
                    </div>
                    <div className="add_icons" >
                      <AiOutlineEllipsis />
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    </div>
  );
}
