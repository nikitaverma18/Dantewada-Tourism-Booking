import React, { useState } from 'react';
import '../styles/Header.css';

const Header = ({ setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="header-container">
        <h1>HOMESTAYS BOOKING</h1>
        <div className="hamburger" onClick={toggleMenu}>
          {/* Hamburger Icon */}
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <button onClick={() => setCurrentPage('home')}>Home</button>
        <button onClick={() => setCurrentPage('listings')}>Listings</button>
        <button onClick={() => setCurrentPage('details')}>Details</button>
        <button onClick={() => setCurrentPage('booking')}>Booking</button>
        <button onClick={() => setCurrentPage('contact')}>Contact</button>
      </nav>
    </header>
  );
};

export default Header;
