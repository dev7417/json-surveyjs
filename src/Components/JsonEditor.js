import React from 'react'
import { survey } from './Survey'

export default function JsonEditor() {
  return (
    <>
       <pre>
       {
            JSON.stringify(survey, null, 1)
        }

       </pre>
       
    </>
  )
}
