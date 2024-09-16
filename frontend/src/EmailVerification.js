import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EmailVerification.css';

const EmailVerification = () => {
  const [formData, setFormData] = useState({
    email: '',
    otp: '',
    password: '',
    confirmPassword: ''
  });

  const [otpSent, setOtpSent] = useState(false);
  const navigate = useNavigate();
  
  // Retrieve the selected account type from localStorage or context
  const accountType = localStorage.getItem('accountType') || ''; 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendOtp = () => {
    // Logic to send OTP
    setOtpSent(true);
    alert('OTP has been sent to your email');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for form submission like verifying OTP, checking passwords
    console.log(formData);
    alert('Form Submitted Successfully');
  };

  const handleBack = () => {
    navigate('/');
  };

  const handleNext = () => {
    if (accountType === 'farmer') {
      navigate('/basic-info');
    } else if (accountType === 'buyer') {
      navigate('/buyer-info');
    } else if (accountType === 'service-provider') {
      navigate('/service-provider-info');
    }
  };

  return (
    <div className="email-verification-form">
      <div className="progress-bar">
        <div className="stage active">1</div>
        <div className="stage active">2</div>
        <div className="stage">3</div>
        <div className="stage">4</div>
        <div className="stage">5</div>
      </div>
      <h2>Email Verification</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <div className="email-container">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <button type="button" className="send-otp-btn" onClick={sendOtp}>
              Send OTP
            </button>
          </div>
        </div>

        {otpSent && (
          <div className="form-group">
            <label>OTP</label>
            <input
              type="text"
              name="otp"
              placeholder="Enter OTP"
              value={formData.otp}
              onChange={handleChange}
              required
            />
          </div>
        )}

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-actions">
          <button type="button" className="back-btn" onClick={handleBack}>
            Back
          </button>
          <button type="button" className="verify-btn" onClick={handleNext}>
            Verify & Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmailVerification;
