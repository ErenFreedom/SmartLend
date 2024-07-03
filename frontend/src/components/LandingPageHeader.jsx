import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPageHeader.css';

const LandingPageHeader = () => {
  return (
    <header className="landing-page-header">
      <h1>SmartLend</h1>
      <nav>
        <ul>
          <li><Link to="/signup" className="button-81">Signup</Link></li>
          <li><Link to="/login" className="button-81">Login</Link></li>
          <li><Link to="/contact" className="button-81">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default LandingPageHeader;
