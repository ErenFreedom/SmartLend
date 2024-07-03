import React from 'react';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import './SignupFormSteps.css';

const SignupFormStep1 = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (value, country) => {
    setFormData({ ...formData, phoneNumber: value, countryCode: country.dialCode });
  };

  return (
    <div className="form-step">
      <h2>Personal Information</h2>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={handleChange}
      />
      <PhoneInput
        country={'us'}
        value={formData.phoneNumber}
        onChange={handlePhoneChange}
        containerStyle={{ width: '100%', maxWidth: '600px', margin: '10px 0' }}
        inputStyle={{
          width: '100%',
          maxWidth: '600px',
          height: '50px',
          borderRadius: '25px',
          backgroundColor: '#000',
          color: '#fff',
          border: '1px solid #fff',
        }}
        buttonStyle={{ backgroundColor: '#000', border: '1px solid #fff' }}
        dropdownStyle={{ backgroundColor: '#000', color: '#fff' }}
      />
      <input
        type="date"
        name="dateOfBirth"
        placeholder="Date of Birth"
        value={formData.dateOfBirth}
        onChange={handleChange}
      />

      <h2>User Role Selection</h2>
      <select name="userRole" value={formData.userRole} onChange={handleChange}>
        <option value="" disabled>Select Role</option>
        <option value="lender">Register as Lender</option>
        <option value="borrower">Register as Borrower</option>
      </select>
    </div>
  );
};

export default SignupFormStep1;
