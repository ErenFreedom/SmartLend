import React from 'react';
import './SignupFormProgress.css';

const SignupFormProgress = ({ step }) => {
  const getProgressWidth = (step) => {
    switch (step) {
      case 1:
        return '0%';
      case 2:
        return '33.33%';
      case 3:
        return '66.66%';
      case 4:
        return '100%';
      default:
        return '0%';
    }
  };

  return (
    <div className="progress-container">
      <div className="progress-bar-wrapper">
        <div className="progress-bar" style={{ width: getProgressWidth(step) }}></div>
      </div>
      <div className="step-labels">
        <div className={`step-label ${step >= 1 ? 'active' : ''}`}>Step 1</div>
        <div className={`step-label ${step >= 2 ? 'active' : ''}`}>Step 2</div>
        <div className={`step-label ${step >= 3 ? 'active' : ''}`}>Step 3</div>
        <div className={`step-label ${step >= 4 ? 'active' : ''}`}>Almost There</div>
      </div>
    </div>
  );
};

export default SignupFormProgress;
