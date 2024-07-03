import React from 'react';
import { Link } from 'react-router-dom';
import './SignupPageHeader.css';

const SignupPageHeader = () => {
  return (
    <header className="signup-header">
      <div className="logo">
        <Link to="/">SmartLend</Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/" className="button-81">Home</Link></li>
          <li><Link to="/login" className="button-81">Login</Link></li>
          <li><Link to="/contact" className="button-81">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default SignupPageHeader;
