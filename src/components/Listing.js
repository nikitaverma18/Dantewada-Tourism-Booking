import React from 'react';
import '../styles/Listing.css'; // CSS for Listings

const Listings = ({ setCurrentPage }) => {
  return (
    <div className="listings-container">
      {/* Banner Section */}
      <div className="banner">
        <img src="https://dantewadatourism.in/img/slider/slider-004.jpg" alt="Homestays Banner" className="banner-image" />
        <h1 className="banner-title">Homestays Listing</h1>
      </div>

      {/* Homestays Section */}
      <section className="homestays-listing">
        <div className="homestay-cards">
          {/* Card 1 */}
          <div className="card">
            <div className="card-images">
              <div className="image-slider">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6PgG0BNeDxEYJsN3e6JOWtWvmnXLEx6gavw&s" alt="Homestay 1 - Slide 1" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrnja1HMC5hD8xrdugsadin3EaIxR2pPxkyA&s" alt="Homestay 1 - Slide 2" />
                <img src="https://content.jdmagicbox.com/comp/bastar/r8/9999p7782.7782.190804173037.n5r8/catalogue/dandami-luxury-resort-bastar-resorts-g6jemhu4qm.jpg" alt="Homestay 1 - Slide 3" />
              </div>
            </div>
            <div className="card-details">
              <h3>Peaceful Retreat</h3>
              <p>Experience tranquility and comfort in a serene environment.</p>
              <button className="view-details" onClick={() => setCurrentPage('details')}>
                View Details
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card">
            <div className="card-images">
              <div className="image-slider">
                <img src="https://travel-buddies.com/wp-content/uploads/2024/07/1_visit-dantewadaangel-land-blue-temple-and-sticky-waterfall.jpg" alt="Homestay 2 - Slide 1" />
                <img src="https://veronikasadventure.com/wp-content/uploads/2024/01/7_visit-dantewada-angel-land-blue-temple-sticky-waterfall.jpg" alt="Homestay 2 - Slide 2" />
                <img src="https://chhattisgarhpedia.com/upload/blog/discovering-the-hidden-gem-jharalawa-waterfall-dantewada-chhattisgarh-53.webp" alt="Homestay 2 - Slide 3" />
              </div>
            </div>
            <div className="card-details">
              <h3>Jungle Stay</h3>
              <p>Stay close to nature in a lush green environment.</p>
              <button className="view-details" onClick={() => setCurrentPage('details')}>
                View Details
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card">
            <div className="card-images">
              <div className="image-slider">
                <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEggyE8jXVad3oJ9DCb8ebd-NsvH1VRa92Z-rK13dLrPqPyA6gDw4tzHs4hOcd-FRvHVUcAHRRzO4vYbdUM8ME7v7g36q1fWNidBM4wcbaZaHk0_nRmaqD69vRsdATfOGgaQ3JYTobWANBs/s1600/2017-06-20.jpg" alt="Homestay 3 - Slide 1" />
                <img src="https://unexploredbastar.com/wp-content/uploads/2021/07/Tirathgarh-Waterfalls-1-410x250.jpg.webp" alt="Homestay 3 - Slide 2" />
                <img src="https://unexploredbastar.com/wp-content/uploads/2022/10/Mendri-Ghumar-Valley-1-410x250.jpg.webp" alt="Homestay 3 - Slide 3" />
              </div>
            </div>
            <div className="card-details">
              <h3>Hilltop Escape</h3>
              <p>Enjoy stunning mountain views and a refreshing atmosphere.</p>
              <button className="view-details" onClick={() => setCurrentPage('details')}>
                View Details
              </button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="card">
            <div className="card-images">
              <div className="image-slider">
                <img src="https://www.shutterstock.com/image-photo/river-trail-muchnar-district-dantewada-260nw-1141787540.jpg" alt="Homestay 4 - Slide 1" />
                <img src="https://www.shutterstock.com/image-photo/river-trail-muchnar-district-dantewada-260nw-1141787543.jpg" alt="Homestay 4 - Slide 2" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUHpsCli41MlT31qiqSDEfMFw_ZGen2yHqPQ&s" alt="Homestay 4 - Slide 3" />
              </div>
            </div>
            <div className="card-details">
              <h3>Lakeview Paradise</h3>
              <p>Relax by the serene lake and enjoy peaceful sunsets.</p>
              <button className="view-details" onClick={() => setCurrentPage('details')}>
                View Details
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Listings;
