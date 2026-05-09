import React from 'react'
import "./Destination.css"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

function Destinaton() {
let ti=gsap.timeline();
useGSAP(()=>{
    ti.from(".di1",{
        y:100,
        opacity:0,
    })
    ti.from(".Dest",{
        opacity:0.5,
        repeat:-1,
    })
    
})

  return (<>
  <div className='di11'>
    <div className='di1'>
        <h1 className='Dest'> Destination</h1>

    </div>

  </div>
  </>
    
  
  )
}

export default Destinaton