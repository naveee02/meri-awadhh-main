import React from 'react'
import "./component.css"
import gsap from 'gsap'
import {useGSAP} from "@gsap/react"

export default function Main_Content() {
  let t=gsap.timeline();

  useGSAP(()=>{
    gsap.from(".main",{
      opacity:0,
      delay:0.6
    })
    t.from(".float",{
      y:100,
      opacity:0,
  
  })
  t.from(".ayo",{
      opacity:.5,
      repeat:-1,
  })
  
  })
  return (
    <>
     <div className='full'>
      
     <div className="main">
            
            <div className='float  '><h1 className="ayo">Ayodhya</h1></div>
            
    
        </div>
     </div>
    </>
  )
}
