import React, { useEffect } from 'react'
import { useState } from 'react'
import { survey } from './Survey'
import './header.css'
import DesignerSidebar from './DesignerSidebar'
import Logic from './Logic'
import JsonEditor from './JsonEditor'
import Preview from './Preview'


export default function Header() {


    const [component, setComponent] = useState(<DesignerSidebar props={survey[0].content[0].forms} />)
    const handleClick = (e, data) => {
        console.log(data.id)
        switch (data.title) {
            case "Designer":
                // setItem(data.content[0].forms)
                setComponent(<DesignerSidebar />)
                // console.log(data.title)state
                break;
            case "Preview":
                console.log(data.title)
                // setItem(data.content);
                setComponent(<Preview />)
                break;
            case "Logic":
                setComponent(<Logic />)
                break;
            case "JSON Editor":
                setComponent(<JsonEditor props={survey[0].content[0].forms} />)
                break;
            default: (
                // setItem(data[0].title[0])
                setComponent(<DesignerSidebar />)
            );
        }

    }
    return (
        <>
            <div className="main">
                <div className="data">

                    {survey.map((item, id) => {
                        return (
                            <>
                                <div className="data-items" tabIndex={12345} onClick={(e) => handleClick(e, item)} key={id}>
                                    <h6>
                                        {item.title}

                                    </h6>
                                </div>
                                <div>

                                </div>

                            </>
                        )
                    })}

                </div>
            </div>
            <div>
                {component}
            </div>
            {/* <div><button onClick={()=>dispatch(designerData())}>click here</button></div> */}
        </>
    )
}
