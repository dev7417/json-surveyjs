import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { BsGrid3X2Gap } from 'react-icons/bs'
import { AiOutlineEllipsis } from 'react-icons/ai'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { MdArrowDropDown } from 'react-icons/md'
import Overlay from "react-bootstrap/Overlay";
import SingleInput from './SigleInput'
import Radiogroup from './Radiogroup'
import Boolean from "./Boolean";
import Dropdown from "./Dropdown";
import File from "./File";
import ImagePicker from './ImagePicker'
import Ranking from './Ranking'
import Popover from "react-bootstrap/Popover";
import { survey } from "./Survey";
import "./header.css";
import { pages } from "./Page";
import Pagesdata from "./Pagesdata";
import { Questions, deleteBox, duplicatePage, titledata, deleteMainBox, sideActionButtons, changeType, pagesIndex } from "../Redux-ToolKit/Pageslice";
import { HiOutlineDuplicate } from 'react-icons/hi'
import { useDispatch } from "react-redux";
import Sidebar from "./Sidebar";
import Rating from './Rating'
import { designerData, indextype } from "../Redux-ToolKit/Surveyslice";
import Checkbox from "./Checkbox";
import Radio from './Radio'
import Panel from "./Panel"
import Html from './Html'
import Comment from './Comment'
export default function Questioncomponents(props) {
  // console.log(props);
  const dispatch = useDispatch()
  const defaultdata = useSelector((state) => state.pagesdataReducer);
  const sideData = useSelector((state) => state.surveyDataReducer.renderComponents);
  console.log(sideData)

  // const sidebuttons = useSelector((state) => state.pagesdataReducer.sideActionButtons)
  // console.log(sidebuttons)
  const titButtons = useSelector((state) => state.pagesdataReducer[0].pages[0])
  console.log(titButtons)
  const surveyData = survey[0].content[0].forms
  console.log(surveyData)
  // console.log(defaultdata)
  const innerQues = defaultdata[0].pages;
  console.log(innerQues)
  const elements = defaultdata[0].pages[0].elements;
  // console.log(elements)
  const [increment, setIncrement] = useState(2)
  const [show, setShow] = useState('hidden')
  const [pageIncrement, setPageIncrement] = useState(1)
  const [target, setTarget] = useState(null);
  // console.log(pageIncrement, "=============================================>")
  // console.log(show)
  let count = useRef(1);
  const ref = useRef(null);

  // console.log(count)
  const cloned = structuredClone(innerQues)
  // console.log(cloned)
  const handleAdd = (index, dex, sideData) => {
    console.log(index)
    count.current = count.current + 1;
    setIncrement(increment + 1)
    console.log(sideData)
    dispatch(Questions({ index, increment, count, sideData }))
    dispatch(indextype({ index}))
    // dispatch(sideActionButtons(increment)) 

  }
  const mainPagesIndex = (index) =>{
    console.log(index)
    dispatch(indextype(index))

  }

  // useEffect(()=>{
  //   switch(sideData){
  //     case "Radiogroup":
  //       handleAdd( dex,sideData)
  //       break;
  //       default: {handleAdd( dex,sideData)}
  //   }
  // },[ dex,sideData])
  // useEffect(() => {
  //   switch (sideData) {
  //     case "Radiogroup":
  //       setComponent(<Radiogroup />)
  //       break;
  //     case "Rating":
  //       setComponent(<Rating />)
  //       break;
  //     case "Checkbox":
  //       setComponent(<Checkbox />)
  //     default: (
  //       setComponent(<Radiogroup />)
  //     )
  //   }
  // }, [sideData])
  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };
  // const handleSwitch = (e, items) => {
  //   console.log(items.data)
  //   switch (items.title) {
  //     case "Radiogroup":
  //       setTitle(e.target)
  //       setComponent(<Radiogroup />)

  //   }
  // }
  const handleDelete = (e, index, ind) => {

    dispatch(deleteBox({ index, ind }))
  }
  const handleMouseEnter = (e) => {
    setShow('visible')
    // e.target.style.visibility = 'visible';

  }
  const handleMouseLeave = (e) => {
    // e.target.style.visibility = 'hidden';

    setShow('hidden')
  }
  const handleMainDelete = (index) => {
    dispatch(deleteMainBox(index))
  }
  const handleDuplicate = (item) => {
    setPageIncrement(pageIncrement + 1)
    // console.log(item, "==============================handleDuplicate data")
    let temp = [];
    item.elements.map((data, i) => {
      count.current = count.current + 1;
      temp.push({ id: count.current, name: 'question', type: data.type })
    })
    const newItem = Object.assign({}, item, { elements: temp, id: item.id + 1 });
    dispatch(duplicatePage({ newItem }))
    // dispatch(titledata(pageIncrement))
  }

  console.log(Questions)
  return (
    <div>
      <>
        {innerQues.map((item, index) => {
          console.log(item);
          return (
            <>
              <div className="main_pages" tabIndex={12345} onClick={()=>mainPagesIndex(index)} key={index}>
                <div className="pages">
                  <div className="pages_data">
                    <div className="main_page_icons">
                      <div className="main_page_icons_1" onClick={() => handleDuplicate(item)}><HiOutlineDuplicate style={{ color: 'orange', fontSize: '25px' }} />
                        <span style={{ fontSize: '13px', fontWeight: 'bold' }}> Duplicate</span>
                      </div>
                      <div className="main_page_icons_2" onClick={() => handleMainDelete(index)}>
                        <RiDeleteBin5Line style={{ fontSize: '25px', color: 'orange' }} /> <span style={{ fontSize: '13px', fontWeight: 'bold' }}>Delete</span>
                      </div>
                    </div>
                    <div className="span-1">
                      <span className="span1" contentEditable="true">
                        {item.name}{item.id}
                      </span>
                    </div>
                    <div className="span-2 my-2">
                      <span className="span2" contentEditable="true">
                        description
                      </span>
                    </div>
                    {item.elements.map((data, ind) => (
                      //  console.log(data)
                      <>
                        <div className="question_div" tabIndex="1234" key={ind}>
                          <div className="question_box" tabIndex="1234">
                            <div className="drag_icon">
                              <BsGrid3X2Gap />
                            </div>
                            <div className="questions" >
                              <div className="span_questions">
                                {data.id} <span contentEditable="true"> {data.name}{data.id}  </span>
                              </div>

                              <div className="question_input my-2" style={{ height: '100%' }}>
                                {/* <input type={data.type} disabled style={{ width: '100%', height: '50px' }} /> */}
                                {/* {component} */}
                                {
                                  data.type === "Radiogroup" ? <Radiogroup /> : data.type === "Rating" ? <Rating /> : data.type === "Checkbox" ? <Checkbox /> : data.type === "Dropdown"?<Dropdown/>: data.type === "Boolean" ? <Boolean /> : data.type === "File" ? <File /> : data.type === "Image Picker" ? <ImagePicker /> : data.type === "ranking" ? <Ranking /> : data.type === "Single Input" ? <SingleInput /> : <SingleInput />
                                }

                                {/* {
                                  sideData === "Radiogroup" ? <Radiogroup/>:<SingleInput/>
                                } */}
                              </div>
                              <div className="action_icons" key={data.id}  >
                                <div className="Aicons">

                                  <div ref={ref}>
                                    <Overlay
                                      show={show}
                                      target={target}
                                      placement="top"
                                      container={ref}
                                    // containerPadding={20}
                                    >
                                      <Popover id="popover-contained">
                                        <div className="main-slider">
                                          <div className="slider">
                                            {surveyData.map((item1) => {
                                              const title = item1.title;
                                              return (
                                                <>
                                                  {/* <Popover.Body> */}
                                                  <div className="dropdown_data px-4" onClick={() => dispatch(changeType({ title, index, ind }, setShow(!show)))} key={index}>
                                                    <span className="dropdown_icons my-1">
                                                      {item1.icons}
                                                    </span>{" "}
                                                    <span className="dropdown_title my-1" >
                                                      {item1.title}
                                                    </span>
                                                  </div>
                                                  {/* </Popover.Body> */}
                                                </>
                                              );
                                            })}
                                          </div>
                                        </div>
                                      </Popover>
                                    </Overlay>
                                  </div>



                                  <div className="single_inputs">
                                    <button className="single_input_btn" data-toggle="tooltip" data-placement="top" onClick={handleClick}>{data.type} <MdArrowDropDown style={{ color: 'orange' }} /> </button>
                                  </div>
                                  <div className="crud_icons">
                                    <div onClick={() => handleAdd(index)} className='crud_icon_dup'><span style={{ fontSize: '12px', fontWeight: '500', cursor: 'pointer' }}><HiOutlineDuplicate style={{ color: '#FF9813', fontSize: '24px' }} /> Duplicate</span></div>
                                    <div className="crud_icon_req" style={{ cursor: 'pointer' }}><input type="checkbox" id={`${data.id}`} /><label for="switch">Toggle</label> </div><div style={{ paddingRight: '10px' }}> <span style={{ fontSize: '12px', fontWeight: '500' }}>Required</span></div>
                                    <div onClick={(e) => handleDelete(e, index, ind)} className="crud_icon_del"><span style={{ fontSize: '12px', fontWeight: '500', cursor: 'pointer' }}><RiDeleteBin5Line style={{ color: '#FF9813', fontSize: '20px' }} />Delete</span></div>
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
                    <div className="btn" onClick={() => handleAdd(index)}>
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
