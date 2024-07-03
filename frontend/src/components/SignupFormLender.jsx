import React from 'react';
import './SignupFormSteps.css';

const SignupFormLender = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-step">
      <h2>Company Information</h2>
      <input
        type="text"
        name="companyName"
        placeholder="Company Name"
        value={formData.companyName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="companyRegNumber"
        placeholder="Company Registration Number"
        value={formData.companyRegNumber}
        onChange={handleChange}
      />
      <input
        type="text"
        name="companyAddress"
        placeholder="Company Address"
        value={formData.companyAddress}
        onChange={handleChange}
      />
      <input
        type="text"
        name="companyContactInfo"
        placeholder="Company Contact Information"
        value={formData.companyContactInfo}
        onChange={handleChange}
      />
      
      <h2>Investment Preferences</h2>
      <input
        type="text"
        name="investmentAmountRange"
        placeholder="Investment Amount Range"
        value={formData.investmentAmountRange}
        onChange={handleChange}
      />
      <input
        type="text"
        name="preferredLoanTerms"
        placeholder="Preferred Loan Terms"
        value={formData.preferredLoanTerms}
        onChange={handleChange}
      />
      <input
        type="text"
        name="riskTolerance"
        placeholder="Risk Tolerance Level"
        value={formData.riskTolerance}
        onChange={handleChange}
      />
    </div>
  );
};

export default SignupFormLender;
