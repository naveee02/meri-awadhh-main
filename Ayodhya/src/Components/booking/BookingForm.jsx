import React, { useState } from 'react';
import './BookingForm.css'; // Importing the CSS file for styling

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkInDate: '',
    checkOutDate: '',
    numGuests: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Booking submitted successfully!'); // Alert message
    setFormData({ // Resetting the form
      name: '',
      email: '',
      checkInDate: '',
      checkOutDate: '',
      numGuests: 1,
    });
  };

  return (
    
    <div className="booking-form-container">
      <h2>Hotel Booking Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />

        <label htmlFor="checkInDate">Check-in Date:</label>
        <input type="date" id="checkInDate" name="checkInDate" placeholder="Select check-in date" value={formData.checkInDate} onChange={handleChange} required />

        <label htmlFor="checkOutDate">Check-out Date:</label>
        <input type="date" id="checkOutDate" name="checkOutDate" placeholder="Select check-out date" value={formData.checkOutDate} onChange={handleChange} required />

        <label htmlFor="numGuests">Number of Guests:</label>
        <input type="number" id="numGuests" name="numGuests" placeholder="Enter number of guests" min="1" value={formData.numGuests} onChange={handleChange} required />

        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default BookingForm;
