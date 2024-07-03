import React, { useState } from 'react';
import './SignupPage.css';
import SignupPageHeader from '../../components/SignupPageHeader';
import LandingPageFooter from '../../components/LandingPageFooter';
import SignupFormStep1 from '../../components/SignupFormStep1';
import SignupFormStep2 from '../../components/SignupFormStep2';
import SignupFormStep3 from '../../components/SignupFormStep3';
import SignupFormLender from '../../components/SignupFormLender';
import SignupFormBorrower from '../../components/SignupFormBorrower';
import SignupFormProgress from '../../components/SignupFormProgress';

const SignupPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    dateOfBirth: '',
    streetAddress: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    govtIDNumber: '',
    govtIDUpload: null,
    selfieWithID: null,
    bankAccountDetails: '',
    creditScoreAuthorization: '',
    employmentStatus: '',
    annualIncome: '',
    userRole: '',
    // Additional fields for lender/borrower
    companyName: '',
    companyRegNumber: '',
    companyAddress: '',
    companyContactInfo: '',
    investmentAmountRange: '',
    preferredLoanTerms: '',
    riskTolerance: '',
    loanAmountRequested: '',
    loanPurpose: '',
    desiredLoanTerm: '',
    employerName: '',
    jobTitle: '',
    employmentDuration: '',
    monthlyExpenses: '',
    outstandingDebts: '',
    assetsAndLiabilities: ''
  });

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="signup-page">
      <SignupPageHeader />
      <SignupFormProgress step={step} />
      <div className="signup-content">
        <form onSubmit={handleSubmit}>
          {step === 1 && <SignupFormStep1 formData={formData} setFormData={setFormData} />}
          {step === 2 && <SignupFormStep2 formData={formData} setFormData={setFormData} />}
          {step === 3 && <SignupFormStep3 formData={formData} setFormData={setFormData} />}
          
          {step === 4 && formData.userRole === 'lender' && <SignupFormLender formData={formData} setFormData={setFormData} />}
          {step === 4 && formData.userRole === 'borrower' && <SignupFormBorrower formData={formData} setFormData={setFormData} />}
          
          <div className="button-container">
            {step > 1 && <button type="button" className="button-81" onClick={prevStep}>Back</button>}
            {step < 4 && <button type="button" className="button-81" onClick={nextStep}>Next</button>}
            {step === 4 && <button type="submit" className="button-81">Submit</button>}
          </div>
        </form>
      </div>
      <LandingPageFooter />
    </div>
  );
};

export default SignupPage;
