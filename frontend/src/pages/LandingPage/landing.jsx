import React, { useState, useEffect } from 'react';
import './landing.css';
import LandingPageHeader from '../../components/LandingPageHeader';
import LandingPageFooter from '../../components/LandingPageFooter';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
  {
    original: '/landing4.png',
    thumbnail: '/landing4.png',
  },
  {
    original: '/landing5.png',
    thumbnail: '/landing5.png',
  },
  {
    original: '/landing6.png',
    thumbnail: '/landing6.png',
  },
  {
    original: '/landing7.png',
    thumbnail: '/landing7.png',
  },
];

const descriptions = [
  'Trust and Secure Deals',
  'Innovative Blockchain Solutions',
  'Efficient and Transparent Transactions',
  'Seamless Money Lending and Borrowing',
];

const LandingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="landing-page">
      <LandingPageHeader />
      <div className="content">
        <div className="left-half">
          <img src="/logo.png" alt="Logo" className="floating-logo" />
        </div>
        <div className="right-half">
          <div className="image-slideshow">
            <ImageGallery 
              items={images} 
              showThumbnails={false} 
              showFullscreenButton={false} 
              showPlayButton={false} 
              autoPlay 
              slideInterval={3000} 
              showNav={false}
              onSlide={handleSlideChange}
            />
          </div>
          <div className="text-slideshow">
            <div className="text-slide">
              {descriptions[currentSlide]}
            </div>
          </div>
        </div>
      </div>
      <LandingPageFooter />
    </div>
  );
};

export default LandingPage;
