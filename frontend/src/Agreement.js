import React, { useState, useEffect } from 'react';
import './Agreement.css';
import { useNavigate } from 'react-router-dom';

const AgreementPage = () => {
  const [showPayment, setShowPayment] = useState(false);
  const [amount, setAmount] = useState('');
  const navigate = useNavigate(); // Hook to programmatically navigate

  // Check URL parameters for PDF generation status
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('pdfGenerated') === 'true') {
      setShowPayment(true); // Show payment section if PDF is generated
    }
  }, []);

  const handleSignAgreement = () => {
    // Redirect to the contract page
    window.location.href = 'http://localhost:3000/contract.html'; // Update this path if needed
  };

  const handlePayment = () => {
    // Handle payment processing
    console.log(`Payment amount: ${amount}`);
    // Add logic to process payment here
  };

  const handleDeploy = () => {
    // Navigate to the SmartContract page
    navigate('/smart-contract');
  };

  return (
    <div className="agreement-page">
      <h2>Agreement Page</h2>
      {!showPayment ? (
        <button
          className="sign-agreement-button"
          onClick={handleSignAgreement}
        >
          Sign Agreement
        </button>
      ) : (
        <div className="payment-section">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="amount-input"
          />
          <button
            className="pay-now-button"
            onClick={handlePayment}
          >
            Pay Now
          </button>
          <button
            className="deploy-button"
            onClick={handleDeploy}
          >
            Deploy
          </button>
        </div>
      )}
    </div>
  );
};

export default AgreementPage;
