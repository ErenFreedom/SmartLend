import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Add this import
import './LoginPage.css';
import LoginPageHeader from '../../components/LoginPageHeader';
import LandingPageFooter from '../../components/LandingPageFooter';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
  {
    original: '/Login1.png',
    thumbnail: '/Login1.png',
  },
  {
    original: '/Login2.png',
    thumbnail: '/Login2.png',
  },
  {
    original: '/Login3.png',
    thumbnail: '/Login3.png',
  },
];

const descriptions = [
  'Effortless transactions and hassle-free deals.',
  'Robust security measures to protect against cyber threats.',
  'Complete transparency in every transaction.',
];

const LoginPage = () => {
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
    <div className="login-page">
      <LoginPageHeader />
      <div className="login-content">
        <div className="left-half">
          <h2>Login</h2>
          <form>
            <input type="text" name="identifier" placeholder="Email or Phone Number" className="input-field" />
            <input type="password" name="password" placeholder="Password" className="input-field" />
            <div className="forgot-password">
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
            <button type="submit" className="button-81">Login</button>
          </form>
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

export default LoginPage;
