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
          <li>The contract covers the supply of agricultural produce as described by the farmer. You agree to the type, quantity, and quality of the produce as specified by the farmer before the contract is made.</li>
          <li>You agree to pay the agreed-upon price for the produce, including any additional charges for delivery if applicable. Payment will be made through the specified method, and any delay in payment may incur penalties or interest, as outlined in the contract.</li>
          <li>The farmer will deliver the produce to the location you specify within the agreed timeframe. Any delay or failure to deliver must be reported to the platform immediately. You understand that failure to accept delivery or delays caused by you may result in penalties or cancellation of the contract.</li>
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
