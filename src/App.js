import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Listings from './components/Listing';
import Details from './components/Details';
import BookingForm from './components/BookingForm';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = React.useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'listings':
        return <Listings setCurrentPage={setCurrentPage} />;;
      case 'details':
        return <Details setCurrentPage={setCurrentPage} />;; 
      case 'booking':
        return <BookingForm />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app-container">
    <Header setCurrentPage={setCurrentPage} />
    <div className="content-container">{renderPage()}</div>
    <Footer />
  </div>
  );
}

export default App;
