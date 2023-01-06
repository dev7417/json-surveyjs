import React from 'react'
import './header.css'

export default function DesignerSidebar({props}) {
  return (
   <div className='main-icons row'> 
    <div className="col-md-3">
    {
        props.map((data)=>{
            console.log(data)
            return(
                <>
               
                <div className='icons-div'>
                   <div className='icons my-1'>
                   <span className='des-icon' style={{width:'30px', height:'40px'}}>{data.icons}</span> <span className='title' style={{fontSize:'14px', paddingLeft:'7px'}}>{data.title}</span>
                   </div>

                    </div>
                   
                    
                   {/* {
                    data.forms.map((item)=>{
                        return (
                            <p>{item.title}</p>
                        )
                    })
                   } */}
                
                </>
            )
        })
    }
    </div>
    </div>
  )
}
