import React from 'react'
import { survey } from './Survey'
import { useSelector, useDispatch } from 'react-redux'

export default function JsonEditor() {
  const jsonEditor = useSelector((state) => state.pagesdataReducer)
  console.log(jsonEditor)
  return (
    <>
      <pre contentEditable style={{ fontSize: '10px' }}>
        {
          JSON.stringify(jsonEditor, null, 1)
        }

      </pre>

    </>
  )
}
