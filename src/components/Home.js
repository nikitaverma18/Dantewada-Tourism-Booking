import React from 'react';
import Slider from 'react-slick';
import '../styles/Home.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true,
  };

  return (
    <div className="home-container">
      {/* Banner Section with Slider */}
      <div className="banner">
        <Slider {...settings}>
          <div>
            <img src="\assets\dnt-mandir.jpeg" alt="Landscape 1" />
          </div>
          <div>
            <img src="\assets\mandir.jpeg" alt="Landscape 2" />
          </div>
          <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/0011122_Dantewada_Danteswari_Mata_Mandir_Chattisgarh_007.jpg/640px-0011122_Dantewada_Danteswari_Mata_Mandir_Chattisgarh_007.jpg" alt="Landscape 3" />
          </div>
        </Slider>
      </div>

      {/* Destinations Section */}
      <section className="destinations">
        <h2>All Destinations</h2>
        <div className="destination-cards">
          <div className="card-1">
            <img src="\assets\mama-bhanjaa.jpg" alt="Destination 1" />
            <span className="tag adventure">Adventure</span>
            <h3>First Destination place to visit by hiking</h3>
          </div>
          <div className="card-2">
            <img src="\assets\jhrna-IMG.jpeg" alt="Destination 2" />
            <span className="tag luxury">Luxury</span>
            <h3>Second Destination place to visit by cruise</h3>
          </div>
          <div className="card-3">
            <img src="\assets\Danteswari_Mata_Mandir.webp" alt="Destination 3" />
            <span className="tag adventure">Adventure</span>
            <h3>Third Destination place to visit</h3>
          </div>
          <div className="card-4">
            <img src="\assets\ganesh.jpg" alt="Destination 4" />
            <span className="tag luxury">Luxury</span>
            <h3>A great stadium in a remote place</h3>
          </div>
          <div className="card-5">
            <img src="\assets\crf-IMG.jpeg" alt="Destination 5" />
            <span className="tag thrilling">Thrilling</span>
            <h3>Brutal Desert of Sahara</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;


