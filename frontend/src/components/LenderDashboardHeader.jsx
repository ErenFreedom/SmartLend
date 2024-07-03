import React from 'react';
import { Link } from 'react-router-dom';
import { FaBell } from 'react-icons/fa';
import './LenderDashboardHeader.css';

const LenderDashboardHeader = ({ lenderId }) => {
  return (
    <header className="lender-dashboard-header">
      <div className="logo">
        <Link to="/">SmartLend</Link>
      </div>
      <div className="header-buttons">
        <Link to={`/lender/${lenderId}/loan-status`} className="header-button">Loan Status</Link>
       
        <Link to={`/lender/${lenderId}/help-support`} className="header-button">Help/Support</Link>
        <FaBell className="bell-icon" />
        <div className="profile-pic">
          <Link to={`/lender/${lenderId}/profile`}>
            <img src="/path-to-placeholder-image" alt="Profile" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default LenderDashboardHeader;
