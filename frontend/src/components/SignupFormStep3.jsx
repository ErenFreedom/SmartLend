import React from 'react';
import './SignupFormSteps.css';

const SignupFormStep3 = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-step">
      <h2>Financial Information</h2>
      <input
        type="text"
        name="bankAccountDetails"
        placeholder="Bank Account Details"
        value={formData.bankAccountDetails}
        onChange={handleChange}
      />
      <input
        type="text"
        name="creditScoreAuthorization"
        placeholder="Credit Score Check Authorization"
        value={formData.creditScoreAuthorization}
        onChange={handleChange}
      />
      <input
        type="text"
        name="employmentStatus"
        placeholder="Employment Status"
        value={formData.employmentStatus}
        onChange={handleChange}
      />
      <input
        type="text"
        name="annualIncome"
        placeholder="Annual Income"
        value={formData.annualIncome}
        onChange={handleChange}
      />
    </div>
  );
};

export default SignupFormStep3;
