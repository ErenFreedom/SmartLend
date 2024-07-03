import React from 'react';
import './SignupFormSteps.css';

const SignupFormStep2 = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-step">
      <h2>Address Information</h2>
      <input
        type="text"
        name="streetAddress"
        placeholder="Street Address"
        value={formData.streetAddress}
        onChange={handleChange}
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        value={formData.city}
        onChange={handleChange}
      />
      <input
        type="text"
        name="state"
        placeholder="State/Province/Region"
        value={formData.state}
        onChange={handleChange}
      />
      <input
        type="text"
        name="postalCode"
        placeholder="Postal/ZIP Code"
        value={formData.postalCode}
        onChange={handleChange}
      />
      <input
        type="text"
        name="country"
        placeholder="Country"
        value={formData.country}
        onChange={handleChange}
      />

      <h2>Verification Information</h2>
      <input
        type="text"
        name="govtIDNumber"
        placeholder="Government ID Number"
        value={formData.govtIDNumber}
        onChange={handleChange}
      />
      <input
        type="file"
        name="govtIDUpload"
        placeholder="Upload Government ID"
        onChange={(e) => setFormData({ ...formData, govtIDUpload: e.target.files[0] })}
      />
      <input
        type="file"
        name="selfieWithID"
        placeholder="Selfie with ID"
        onChange={(e) => setFormData({ ...formData, selfieWithID: e.target.files[0] })}
      />
    </div>
  );
};

export default SignupFormStep2;
