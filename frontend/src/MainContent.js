import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MainContent.css';

function MainContent() {
  const [selectedAccount, setSelectedAccount] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSelectedAccount(e.target.value);
  };

  const handleNext = () => {
    switch (selectedAccount) {
      case 'farmer':
        navigate('/basic-info');
        break;
      case 'buyer':
        navigate('/buyer-info');
        break;
      case 'service-provider':
        navigate('/service-provider-info');
        break;
      default:
        // Optional: Handle case where no option is selected
        alert('Please select an account type.');
    }
  };

  return (
    <div className="main-content">
      <div className="progress-bar">
        <div className="stage active">1</div>
        <div className="stage">2</div>
        <div className="stage">3</div>
        <div className="stage">4</div>
        <div className="stage">5</div>
      </div>
      <h3>Choose Your Account Type:</h3>
      <p>Select the role that best describes your activity on the platform.</p>
      <form className="account-form">
        <label>
          <input 
            type="radio" 
            name="account" 
            value="farmer" 
            checked={selectedAccount === 'farmer'}
            onChange={handleChange} 
          />
          Farmer - Sell produce directly, create contracts, and access buyers.
        </label>
        <label>
          <input 
            type="radio" 
            name="account" 
            value="buyer" 
            checked={selectedAccount === 'buyer'}
            onChange={handleChange} 
          />
          Buyer - Purchase produce, create contracts, and connect with farmers.
        </label>
        <label>
          <input 
            type="radio" 
            name="account" 
            value="service-provider" 
            checked={selectedAccount === 'service-provider'}
            onChange={handleChange} 
          />
          Service Provider - Offer services to support farmers and buyers.
        </label>
        <button type="button" onClick={handleNext}>Continue</button>
      </form>
    </div>
  );
}

export default MainContent;
