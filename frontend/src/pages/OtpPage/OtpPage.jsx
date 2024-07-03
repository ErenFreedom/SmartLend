import React, { useState, useEffect } from 'react';
import './OtpPage.css';

const OtpPage = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [counter, setCounter] = useState(120);
  const [isResendVisible, setIsResendVisible] = useState(false);

  useEffect(() => {
    if (counter > 0) {
      const timer = setTimeout(() => setCounter(counter - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setIsResendVisible(true);
    }
  }, [counter]);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleResend = () => {
    setCounter(120);
    setIsResendVisible(false);
    // Add logic to resend OTP here
  };

  return (
    <div className="otp-page">
      <div className="otp-container">
        <h2>OTP Verification</h2>
        <p>One Time Password (OTP) has been sent via Email to ******@gmail.com.</p>
        <p>Enter the OTP below to verify it.</p>
        <div className="otp-inputs">
          {otp.map((data, index) => {
            return (
              <input
                className="otp-field"
                type="text"
                name="otp"
                maxLength="1"
                key={index}
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select()}
              />
            );
          })}
        </div>
        <div className="resend-container">
          {!isResendVisible ? (
            <span>Resend OTP in {`${counter} seconds`}</span>
          ) : null}
        </div>
        <button className="verify-button" onClick={handleResend}>
          {isResendVisible ? 'Resend OTP' : 'Verify OTP'}
        </button>
      </div>
    </div>
  );
};

export default OtpPage;
