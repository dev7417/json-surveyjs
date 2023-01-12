import React from 'react'

export default function Pagesdata(props) {
  return (
    <>
    <div>
        <p>hdjhdj</p>
      {props.map((items)=>{
        console.log(items)
        return(
            <>
                <p>{items.type}</p>
            </>
        )
      })}
    </div>
  </>
  )
}
