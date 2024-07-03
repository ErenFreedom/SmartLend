import React from 'react';
import './SignupFormSteps.css';

const SignupFormBorrower = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-step">
      <h2>Loan Request Information</h2>
      <input
        type="text"
        name="loanAmountRequested"
        placeholder="Loan Amount Requested"
        value={formData.loanAmountRequested}
        onChange={handleChange}
      />
      <input
        type="text"
        name="loanPurpose"
        placeholder="Loan Purpose"
        value={formData.loanPurpose}
        onChange={handleChange}
      />
      <input
        type="text"
        name="desiredLoanTerm"
        placeholder="Desired Loan Term"
        value={formData.desiredLoanTerm}
        onChange={handleChange}
      />

      <h2>Employment Information</h2>
      <input
        type="text"
        name="employerName"
        placeholder="Employer Name"
        value={formData.employerName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="jobTitle"
        placeholder="Job Title"
        value={formData.jobTitle}
        onChange={handleChange}
      />
      <input
        type="text"
        name="employmentDuration"
        placeholder="Employment Duration"
        value={formData.employmentDuration}
        onChange={handleChange}
      />

      <h2>Financial Statements</h2>
      <input
        type="text"
        name="monthlyExpenses"
        placeholder="Monthly Expenses"
        value={formData.monthlyExpenses}
        onChange={handleChange}
      />
      <input
        type="text"
        name="outstandingDebts"
        placeholder="Outstanding Debts"
        value={formData.outstandingDebts}
        onChange={handleChange}
      />
      <input
        type="text"
        name="assetsAndLiabilities"
        placeholder="Assets and Liabilities"
        value={formData.assetsAndLiabilities}
        onChange={handleChange}
      />
    </div>
  );
};

export default SignupFormBorrower;
