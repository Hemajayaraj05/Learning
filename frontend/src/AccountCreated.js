import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AccountCreated.css';

const AccountCreated = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    // Navigate to the Dashboard page
    navigate('/dashboard');
  };

  return (
    <div className="account-created">
      <h2>Account Created Successfully</h2>
      <button className="next-btn" onClick={handleNext}>
        Go to Dashboard
      </button>
    </div>
  );
};

export default AccountCreated;
