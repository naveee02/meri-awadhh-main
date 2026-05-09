import React from 'react';
import "./BookingCard.css"
import { Link } from 'react-router-dom';

const Bookingcard = ({ accommodation }) => {
  
  return (
    <div className="booking-card">
      <div className='Hotel_imgc'>
        <img className='img' src={accommodation.image} alt={accommodation.name} />
      </div>
      
      <div className="booking-details">
        <h2 className='Hotel_name'>{accommodation.name}</h2>
        <p className='descri'>{accommodation.description}</p>
     
        <p className='para-div'>Amenities: {accommodation.amenities.join(", ")}</p>
        <p className='para-div'>Facilities:{accommodation.facilities}</p>
        <p className='para-div'>Games:{accommodation.Games}</p>
        
        <button className='buttonz' ><Link to="/BookingForm">Book Now In: {accommodation.price}</Link></button>
      </div>
    </div>
  );
};

export default Bookingcard;
