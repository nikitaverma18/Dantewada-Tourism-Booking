import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [userQuery, setUserQuery] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserQuery({ ...userQuery, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, log the form data
    console.log('User Query:', userQuery);
    // In a real app, you would send this data to an API or store it in a database
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>

      {/* Contact Details Section */}
      <div className="contact-details">
        <h3>Support Contact Details:</h3>
        <p>If you have any questions or need assistance, feel free to reach out to us.</p>
        <ul>
          <li><strong>Email:</strong> support@dantewadahomestays.com</li>
          <li><strong>Phone:</strong> +91-XXXXXXXXXX</li>
          <li><strong>Address:</strong> Dantewada, Chhattisgarh, India</li>
        </ul>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="contact-form">
        <h3>Send Us a Message</h3>
        
        <div className="input-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={userQuery.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userQuery.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            value={userQuery.message}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
