import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BsGrid3X2Gap } from 'react-icons/bs'
import { AiOutlineEllipsis } from 'react-icons/ai'
import "./header.css";
import { pages } from "./Page";
import Pagesdata from "./Pagesdata";
import { Questions } from "../Redux-ToolKit/Pageslice";
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


  const handleAdd = () => {
    setIncrement(increment + 1)
    dispatch(Questions(increment))

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

                    {items.elements.map((data) => (
                      // console.log(data)
                      <div className="question_div">
                        <div className="question_box" tabIndex={12345}>
                          <div className="drag_icon">
                            <BsGrid3X2Gap />
                          </div>
                          <div className="questions">
                            <p>{data.name1} </p>
                            <input type={data.type1} disabled />
                          </div>
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
                    ))}

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
