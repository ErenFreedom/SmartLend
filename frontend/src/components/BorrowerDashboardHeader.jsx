import React from 'react';
import { Link } from 'react-router-dom';
import { FaBell } from 'react-icons/fa';
import './BorrowerDashboardHeader.css';

const BorrowerDashboardHeader = () => {
  return (
    <header className="borrower-dashboard-header">
      <div className="logo">
        <Link to="/">SmartLend</Link>
      </div>
      <div className="header-buttons">
        <Link to="/current-loans" className="header-button">Current Loans</Link>
        
        <Link to="/help-support" className="header-button">Help/Support</Link>
        <FaBell className="bell-icon" />
        <div className="profile-pic">
          <Link to="/profile">
            <img src="/path-to-placeholder-image" alt="Profile" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default BorrowerDashboardHeader;
