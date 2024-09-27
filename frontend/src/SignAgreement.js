import React from 'react';
import './styles/Agreement.css';

const SignAgreement = ({ onSignAgreement }) => {
  return (
    <div className="sign-agreement-container">
      <button
        className="sign-agreement-button"
        onClick={onSignAgreement}
      >
        Sign Agreement
      </button>
    </div>
  );
};

export default SignAgreement;
