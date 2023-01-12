import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./header.css";
import Pagesdata from "./Pagesdata";
export default function Questioncomponents() {
  const defaultdata = useSelector((state) => state.pagesdataReducer);
  const innerQues = defaultdata[0].pagesData[0].elements;
  console.log(innerQues)
  console.log(defaultdata[0].pagesData);
  console.log(defaultdata[0].pagesData[0].elements);
  return (
    <>
      {defaultdata[0].pagesData.map((pages, index) => {
        <>
          <div className="main_pages" tabIndex={12345} key={index}>
            <div className="pages">
              <div className="pages_data">
                <div className="span-1">
                  <span className="span1" contentEditable>
                    {pages.name}
                  </span>
                </div>
                <div className="span-2 my-2">
                  <span className="span2" contentEditable>
                    {pages.description}
                  </span>
                </div>
                  <Pagesdata props={pages.elements}/>
                <div>
                {/* {pages.elements.map((item) => {
                  console.log(item.type);
                })} */}
                </div>
              </div>
            </div>
          </div>
        </>
      })}
    </>
  );
}
