import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Questioncomponents from './Questioncomponents'
import { BiImageAlt } from "react-icons/bi";
import "./header.css";
export default function Pagescomponent() {
  const nPages = useSelector((state) => state.pagesdataReducer[0].pagesData);
  console.log(nPages);
  return (
    <>
      <div className="main_page_container">
        <div className="page_survey_data">
          <div className="page_survey_title">
            <div className="survey_title">
              <h3 className="survey_tit_desc">
                <span contentEditable className="span1">Survey Title</span>
                <span contentEditable className="span2 my-2">Description</span>
              </h3>
              <div className="survey_tit_img">
                <label for="inputTag">
                  <BiImageAlt className="icons" />
                  <input id="inputTag" type="file" />
                </label>
              </div>
            </div>
          </div>
        </div>
      <Questioncomponents/>
      </div>
      <div className="question-component">
      </div>
    </>
  );
}
