import React from 'react'
import "./component.css"
import gsap from 'gsap'
import {useGSAP} from "@gsap/react"
import { ScrollTrigger } from 'gsap/all'

function Main21() {
  
  gsap.registerPlugin(ScrollTrigger);
  let t=gsap.timeline();
  useGSAP(()=>{
    gsap.from(".img1",{
      xPercent:-12,
      duration:1,
      yoyo:true,
      scrollTrigger:{
        start:"5% 10%",
        end:"30% 50%",
        scrub:2,
      
       
      }
  })
  gsap.from(".img2",{
    xPercent:12,
    duration:2,
    yoyo:true,
    scrollTrigger:{
      start:"5% 10%",
      end:"30% 50%",
      scrub:2,
      
    }
    
    
})
gsap.from("p",{
  y:100,
  
  opacity:0,
  stagger:.2,
  delay:.5,
 
  yoyo:true,
  scrollTrigger:{
      start: "5% 10%", 
      end: "30% 50%",
      scrub:3,
  }
})

  
  })
  return (
  <>
  <div className='MAin_div  '>

    <div className='main2    '>
      <div className='photos'>
        <img className='img1' src="/assets/9lord-ram-ayodhya.jpg" alt="Ayodhya temple" />
        <img className='img2' src="/assets/202401241609363984ram-mandir.jpg" alt="Ram Mandir" />

      </div>
      <div className='mein'> 
      <div className='p'>
      <p>Many eminent kings such as Ikshvaku, Prithu, Mandhata, Harishchandra, Sagar, Bhagirath, Raghu, Dileep, Dashrath and Ram ruled the capital city of Kosaldesh. It was during their reign, that the grandeur of the kingdom reached its pinnacle and epitomized Ram Rajya.
        <br />
        <br />
      </p>
      <p>
                <br/>
                An episode of Ramayan, a page of ancient history and a cluster of tourist attractions, this town has been a major centre for pilgrims, historians, archaeologists and students alike.
                <br/>
                </p>
                <p>
                <br/>            
                Summer in Ayodhya between April and June is quite warm; sometimes the mercury rise up to 47°C. Winter from November to February experiences a plunge to 10°C. The best time to plan a visit would be between October to March.</p>
                </div>
                
      
        
      </div>
      </div>
  
  </div>
  </>
    
    
  )
}

export default Main21