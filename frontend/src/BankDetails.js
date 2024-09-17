import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BankDetails.css';

const BankDetails = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    accountHolderName: '',
    accountNumber: '',
    confirmAccountNumber: '',
    ifscCode: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBack = () => {
    navigate('/basic-info');
  };

  const handleNext = () => {
    // Add logic to handle form submission
    console.log(formData);
    navigate('/account-created'); // Navigate to the Account Created page
  };

  const handleSkip = () => {
    navigate('/account-created'); // Navigate to the Account Created page
  };

  return (
    <div className="bank-details-form">
      <div className="progress-bar">
        <div className="stage active">1</div>
        <div className="stage active">2</div>
        <div className="stage active">3</div>
        <div className="stage active">4</div>
        <div className="stage">5</div>
      </div>
      <h2>Enter Your Bank Details</h2>
      <form>
        <div className="form-group">
          <label>Account Holder Name</label>
          <input
            type="text"
            name="accountHolderName"
            placeholder="Enter account holder name"
            value={formData.accountHolderName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Account Number</label>
          <input
            type="text"
            name="accountNumber"
            placeholder="Enter account number"
            value={formData.accountNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Confirm Account Number</label>
          <input
            type="text"
            name="confirmAccountNumber"
            placeholder="Confirm account number"
            value={formData.confirmAccountNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>IFSC Code</label>
          <input
            type="text"
            name="ifscCode"
            placeholder="Enter IFSC code"
            value={formData.ifscCode}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-actions">
          <button type="button" className="back-btn" onClick={handleBack}>
            Back
          </button>
          <button type="button" className="skip-btn" onClick={handleSkip}>
            Skip for Now
          </button>
          <button type="button" className="next-btn" onClick={handleNext}>
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default BankDetails;
