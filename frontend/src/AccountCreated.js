import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AccountCreated.css';

const AccountCreated = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    // Handle the final action or navigate to the next page
    console.log("Account Created Successfully");
    navigate('/final-page'); // Replace with your actual final page route
  };

  return (
    <div className="account-created">
      <h2>Account Created Successfully</h2>
      <button className="next-btn" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default AccountCreated;
