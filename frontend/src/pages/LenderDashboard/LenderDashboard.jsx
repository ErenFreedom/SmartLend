import React from 'react';
import { useParams } from 'react-router-dom';
import LenderDashboardHeader from '../../components/LenderDashboardHeader';
import LandingPageFooter from '../../components/LandingPageFooter';
import './LenderDashboard.css';

const LenderDashboard = () => {
  const { lenderId } = useParams();

  return (
    <div className="lender-dashboard">
      <LenderDashboardHeader lenderId={lenderId} />
      <main className="dashboard-main">
        <h2>Loan Applications</h2>
        <p>No loan applications available at the moment.</p>
      </main>
      <LandingPageFooter />
    </div>
  );
};

export default LenderDashboard;
