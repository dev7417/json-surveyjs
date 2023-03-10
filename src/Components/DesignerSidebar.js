import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { designerData } from "../Redux-ToolKit/Surveyslice";
import { sideActionButtons } from "../Redux-ToolKit/Pageslice";
import { AiOutlineEllipsis } from "react-icons/ai";
import CenterDesigner from "./CenterDesigner";
import Radio from "./Radio";
import { Questions, titledata } from "../Redux-ToolKit/Pageslice";
// import { designerData } from "../Redux-ToolKit/Surveyslice";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";
import "./header.css";
import Sidebar from "./Sidebar";

export default function DesignerSidebar() {
  const reduxData = useSelector((state) => state.surveyDataReducer.designer);
  console.log(reduxData);
  const index = useSelector((state) => state.surveyDataReducer.index);
  console.log(index)
  // const el = useSelector((state) => state.pagesdataReducer[0].pages[index].elements)
  // console.log(el)
  // const length = el.length;
  // console.log(length)
  const val = useSelector((state) => state.surveyDataReducer.value)
  console.log(val)
  // console.log(indexData)
  // const backdata = useSelector((state)=> state.pagesdataReducer)
  // const dataReducer = backdata[0].pages[0].elements[0].id
  // console.log(dataReducer)
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const [element, setElement] = useState([])
  const ref = useRef(null);

  // useEffect(() => {
  //   dispatch(() => designerData());
  // }, []);
  const dispatch = useDispatch();
  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };
  const handleSideIcons = (e, index) =>{
    e.preventDefault()
  
      const Data = e.target.innerText
    dispatch(Questions({Data, index}))
    console.log(Data)
  }
  return (
    <div className="main-icons row">
      <div className="col-md-3">
        <div className="main-icons-data">
          {reduxData.slice(0, 14).map((data, id) => {
            console.log(data);
            return (
              <>
                <div className="icons-div" key={data.index}>
                  <div className="icons my-1" >
                    <span
                      className="des-icon"
                      style={{ width: "30px", height: "40px" }}
                    >
                      {data.icons}
                    </span>
                    <span
                      className="title"
                      style={{ fontSize: "14px", paddingLeft: "7px" }}
                      onClick={(e)=>handleSideIcons(e,  index, id)} >
                      {data.title}
                    </span>
                  </div>
                </div>
              </>
            );
          })}
          <div className="further_icons d-flex">
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
                    <div className="slider2">
                      {reduxData.slice(14, 17).map((items) => {
                        return (
                          <>
                            {/* <Popover.Body> */}
                            <div className="dropdown_data px-4" >
                              <span className="dropdown_icons my-1">
                                {items.icons}
                              </span>
                              <span className="dropdown_title my-1">
                                {items.title}
                              </span>
                            </div>
                            {/* </Popover.Body> */}
                          </>
                        );
                      })}
                      <div className="border1"></div>
                      {reduxData.slice(17, 21).map((items) => {
                        return (
                          <>
                            {/* <Popover.Body> */}
                            <div className="dropdown_data px-4">
                              <span className="dropdown_icons my-1">
                                {items.icons}
                              </span>
                              <span className="dropdown_title my-1">
                                {items.title}
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
            <span className="nxt_icons" onClick={handleClick}>
              <AiOutlineEllipsis />
            </span>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <CenterDesigner />
      </div>
      <div className="col-md-3">
        <Sidebar />
      </div>
    </div>
  );
}
