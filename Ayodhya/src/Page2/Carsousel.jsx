import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function Carsousel() {
  return (<>
    <div>
         <Carousel>
      <Carousel.Item>
        <img className='d-block   w-100'
        src="public\assets\Ram-temple.jpg" alt="" />
        
        <Carousel.Caption  >
          <h3 className='  text-3xl text-black font-extrabold  '></h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img  className='d-block  w-100' src="public\assets\Suraj.jpg" alt="" />
        <Carousel.Caption>
          <h3 className='  text-3xl text-white font-extrabold  '>Suraj-Kund</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block  w-100' src="public\assets\ghats.jpg" alt="" />
        <Carousel.Caption>
          <h3 className='  text-3xl text-white font-extrabold  '>Ghats</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    
    </>
  )
}

export default Carsousel