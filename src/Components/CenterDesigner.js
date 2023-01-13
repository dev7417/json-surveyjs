import React, { useState } from "react";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { titledata, Questions } from "../Redux-ToolKit/Pageslice";
import { AiOutlineEllipsis } from "react-icons/ai";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Pagescomponent from "./Pagescomponent";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";

export default function CenterDesigner() {
  const dispatch = useDispatch();
  const pagessdata = useSelector((state) => state.pagesdataReducer[0]);
  console.log(pagessdata);
  const iconsData = useSelector((state) => state.surveyDataReducer.designer);
  console.log(iconsData);
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };
  return (
    <>
      <div className={!pagessdata ? "designer_main" : ""}>
        {!pagessdata ? (
          <>
            <div className="designer_content" trap icons>
              <p>
                The survey is empty. DrDynamic Panel ag an element from the
                toolbox or click the button below
              </p>
            </div>
            <div className="designer_addBtn">
              <div className="designer_addbtn-2 my-2">
                <span
                  className="des-btn"
                  style={{ fontWeight: "400", width: "100%" }}
                  onClick={() => dispatch(titledata())}
                >
                  Add Question
                </span>
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
                          {iconsData.slice(0, 9).map((items) => {
                            return (
                              <>
                                {/* <Popover.Body> */}
                                <div className="dropdown_data px-4">
                                  <span className="dropdown_icons my-1">
                                    {items.icons}
                                  </span>{" "}
                                  <span className="dropdown_title my-1">
                                    {items.title}
                                  </span>
                                </div>
                                {/* </Popover.Body> */}
                              </>
                            );
                          })}
                          <div className="border1"></div>
                          {iconsData.slice(9, 12).map((items) => {
                            return (
                              <>
                                {/* <Popover.Body> */}
                                <div className="dropdown_data px-4">
                                  <span className="dropdown_icons my-1">
                                    {items.icons}
                                  </span>{" "}
                                  <span className="dropdown_title my-1">
                                    {items.title}
                                  </span>
                                </div>
                                {/* </Popover.Body> */}
                              </>
                            );
                          })}
                          <div className="border1"></div>
                          {iconsData.slice(9, 14).map((items) => {
                            return (
                              <>
                                {/* <Popover.Body> */}
                                <div className="dropdown_data px-4">
                                  <span className="dropdown_icons my-1">
                                    {items.icons}
                                  </span>{" "}
                                  <span className="dropdown_title my-1">
                                    {items.title}
                                  </span>
                                </div>
                                {/* </Popover.Body> */}
                              </>
                            );
                          })}
                          <div className="border1"></div>
                          {iconsData.slice(14, 17).map((items) => {
                            return (
                              <>
                                {/* <Popover.Body> */}
                                <div className="dropdown_data px-4">
                                  <span className="dropdown_icons my-1">
                                    {items.icons}
                                  </span>{" "}
                                  <span className="dropdown_title my-1">
                                    {items.title}
                                  </span>
                                </div>
                                {/* </Popover.Body> */}
                              </>
                            );
                          })}
                          <div className="border1"></div>
                          {iconsData.slice(17, 21).map((items) => {
                            return (
                              <>
                                {/* <Popover.Body> */}
                                <div className="dropdown_data px-4">
                                  <span className="dropdown_icons my-1">
                                    {items.icons}
                                  </span>{" "}
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
                <button type="button" className="icons" onClick={handleClick}>
                  <AiOutlineEllipsis
                    data-toggle="tooltip"
                    data-placement="top"
                  />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="main_centerdata">
            <Pagescomponent data="hello" />
          </div>
        )}
      </div>
    </>
  );
}
