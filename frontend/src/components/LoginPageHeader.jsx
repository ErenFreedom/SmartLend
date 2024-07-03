import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPageHeader.css';

const LoginPageHeader = () => {
  return (
    <header className="login-page-header">
      <div className="logo">
        <Link to="/">SmartLend</Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/" className="button-81">Home</Link></li>
          <li><Link to="/signup" className="button-81">Signup</Link></li>
          <li><Link to="/contact" className="button-81">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default LoginPageHeader;
