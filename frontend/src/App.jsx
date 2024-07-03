import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/landing';
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/Login';
import OtpPage from './pages/OtpPage/OtpPage';
import BorrowerDashboard from './pages/BorrowerDashboard/BorrowerDashboard';
import LenderDashboard from './pages/LenderDashboard/LenderDashboard'; // Import the LenderDashboard component

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/otp" element={<OtpPage />} />
          <Route path="/borrower/:borrowerId" element={<BorrowerDashboard />} />
          <Route path="/lender/:lenderId" element={<LenderDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
