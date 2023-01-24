import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './header.css'

export default function Preview() {
  const previewdata = useSelector((state) => state.pagesdataReducer);
  const boxData = previewdata[0].pages[0].elements;
  console.log(boxData);
  console.log(previewdata, "========================>previewData")
  return (
    <div className='main_preview'>
      <div className='preview_box'>
        {boxData.map((item) => {
          return (
            <div className='question_div'>
              <div className='question_box'>
                <div className='questions'>
                  <span>{item.id} <span style={{ fontWeight: 'bold' }}> {item.name}</span> </span>
                </div>
                <div className='question_input' style={{ height: '100%' }}>
                  <input type='text' style={{ width: '100%', height: '45px' }} />
                </div>
              </div>
            </div>
          )
        })}

      </div>
    </div>
  )
}
