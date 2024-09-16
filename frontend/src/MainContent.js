import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MainContent.css';

function MainContent() {
  const [selectedAccountType, setSelectedAccountType] = useState('');
  const navigate = useNavigate();

  const handleAccountTypeChange = (e) => {
    setSelectedAccountType(e.target.value);
  };

  const handleNext = () => {
    if (selectedAccountType) {
      // Store selected account type in local storage
      localStorage.setItem('accountType', selectedAccountType);

      // Navigate to email verification page
      navigate('/email-verification');
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
        
        <div className="select">
          <label>
            <input
              type="radio"
              name="account"
              value="farmer"
              checked={selectedAccountType === 'farmer'}
              onChange={handleAccountTypeChange}
            />
            Farmer
            <div className="selectbar">Sell produce directly, create contracts, and access buyers.</div>
          </label>
        </div>

        <div className="select">
          <label>
            <input
              type="radio"
              name="account"
              value="buyer"
              checked={selectedAccountType === 'buyer'}
              onChange={handleAccountTypeChange}
            />
            Buyer
            <div className="selectbar">Purchase produce, create contracts, and connect with farmers.</div>
          </label>
        </div>

        <div className="select">
          <label>
            <input
              type="radio"
              name="account"
              value="service-provider"
              checked={selectedAccountType === 'service-provider'}
              onChange={handleAccountTypeChange}
            />
            Service Provider
            <div className="selectbar">Offer services to support farmers and buyers.</div>
          </label>
        </div>

        <button type="button" onClick={handleNext} className="continue-btn">Continue</button>
      </form>
    </div>
  );
}

export default MainContent;
