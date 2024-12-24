import React, { useState } from 'react';
import '../styles/BookingForm.css';

const BookingForm = () => {
  // State to hold form data
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    contactNumber: '',
  });
  const [bookingDetails, setBookingDetails] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1,
  });

  // Handle changes in input fields
  const handleUserInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleBookingInputChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails({ ...bookingDetails, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, log the form data
    console.log('User Details:', userDetails);
    console.log('Booking Details:', bookingDetails);
    // In a real app, you would handle form submission (e.g., sending to an API)
  };

  return (
    <div className="booking-form-container">
      <h2>Book Your Stay</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        {/* User Details Section */}
        <div className="form-section">
          <h3>User Details</h3>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={userDetails.name}
              onChange={handleUserInputChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={userDetails.email}
              onChange={handleUserInputChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="contactNumber">Contact Number</label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              value={userDetails.contactNumber}
              onChange={handleUserInputChange}
              required
            />
          </div>
        </div>

        {/* Booking Details Section */}
        <div className="form-section">
          <h3>Booking Details</h3>
          <div className="input-group">
            <label htmlFor="checkIn">Check-in Date</label>
            <input
              type="date"
              id="checkIn"
              name="checkIn"
              value={bookingDetails.checkIn}
              onChange={handleBookingInputChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="checkOut">Check-out Date</label>
            <input
              type="date"
              id="checkOut"
              name="checkOut"
              value={bookingDetails.checkOut}
              onChange={handleBookingInputChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="guests">Number of Guests</label>
            <input
              type="number"
              id="guests"
              name="guests"
              value={bookingDetails.guests}
              onChange={handleBookingInputChange}
              min="1"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-button">Submit Booking</button>
      </form>
    </div>
  );
};

export default BookingForm;
