// src/pages/BorrowerDashboard/BorrowerDashboard.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BorrowerDashboardHeader from '../../components/BorrowerDashboardHeader';
import LandingPageFooter from '../../components/LandingPageFooter';
import './BorrowerDashboard.css';

const BorrowerDashboard = () => {
  const { id } = useParams();
  const [borrowerData, setBorrowerData] = useState(null);

  useEffect(() => {
    // Fetch borrower data based on ID
    // Example API call (replace with your actual API)
    fetch(`/api/borrowers/${id}`)
      .then(response => response.json())
      .then(data => setBorrowerData(data))
      .catch(error => console.error('Error fetching borrower data:', error));
  }, [id]);

  return (
    <div className="borrower-dashboard">
      <BorrowerDashboardHeader />
      <div className="dashboard-content">
        {borrowerData ? (
          <div>
            {/* Display borrower-specific data here */}
            <h2>Welcome, {borrowerData.name}</h2>
            {/* Add more borrower-specific content */}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <LandingPageFooter />
    </div>
  );
};

export default BorrowerDashboard;
