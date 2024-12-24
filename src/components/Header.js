import React, { useState } from 'react';
import '../styles/Header.css';

const Header = ({ setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState('home'); // Track active page

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handlePageChange = (page) => {
    setActivePage(page); // Set the active page
    setCurrentPage(page); // Notify parent component
    setIsMenuOpen(false); // Close menu on mobile after selection
  };

  return (
    <header>
      <div className="header-container">
        <h1>HOMESTAYS BOOKING 🏣​​</h1>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <button
          className={activePage === 'home' ? 'active' : ''}
          onClick={() => handlePageChange('home')}
        >
          Home
        </button>
        <button
          className={activePage === 'listings' ? 'active' : ''}
          onClick={() => handlePageChange('listings')}
        >
          Listings
        </button>
        <button
          className={activePage === 'details' ? 'active' : ''}
          onClick={() => handlePageChange('details')}
        >
          Details
        </button>
        <button
          className={activePage === 'booking' ? 'active' : ''}
          onClick={() => handlePageChange('booking')}
        >
          Booking
        </button>
        <button
          className={activePage === 'contact' ? 'active' : ''}
          onClick={() => handlePageChange('contact')}
        >
          Contact
        </button>
      </nav>
    </header>
  );
};

export default Header;
