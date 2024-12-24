import React from 'react';
import '../styles/Details.css';

const Details = ({setCurrentPage}) => {
  // Example details for a homestay (can be replaced with props or API data)
  const homestayDetails = {
    name: 'Peaceful Retreat',
    images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6PgG0BNeDxEYJsN3e6JOWtWvmnXLEx6gavw&s', 'https://content.jdmagicbox.com/comp/bastar/r8/9999p7782.7782.190804173037.n5r8/catalogue/dandami-luxury-resort-bastar-resorts-g6jemhu4qm.jpg'],
    description:
      'Enjoy a peaceful stay surrounded by lush greenery and serene landscapes. Perfect for a relaxing getaway.',
    pricing: '₹3,000 ',
    contact: '+91 9876543210',
  };

  return (
    <div className="details-container">
      <h1>{homestayDetails.name}</h1>
      <div className="details-images">
        {homestayDetails.images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} />
        ))}
      </div>
      <p className="details-description">{homestayDetails.description}</p>
      <p className="details-pricing">
        <strong>Pricing:</strong> {homestayDetails.pricing}
      </p>
      <p className="details-contact">
        <strong>Contact:</strong> {homestayDetails.contact}
      </p>
      <button className="book-now" onClick={() => setCurrentPage('booking')}>Book Now</button>
    </div>
  );
};

export default Details;
