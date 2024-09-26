import React from 'react';
import { useNavigate } from 'react-router-dom'
import './Agreement.css';


const PaymentSection = ({ amount, setAmount, onPay, onDeploy }) => {
    const navigate = useNavigate();
  
    // Step 2: Define the `onDeploy` function to handle button click
    const onDep = () => {
      // Step 3: Navigate to the desired route
      navigate('/smart-contract');
    };
  return (
    <div className="payment-section">
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
        className="amount-input"
      />
      <ul>
        <li>The contract covers the supply of agricultural produce as described by the farmer. You agree to the type, quantity, and quality of the produce as specified by the farmer before the contract is made.</li>
        <li>You agree to pay the agreed-upon price for the produce, including any additional charges for delivery if applicable. Payment will be made through the specified method, and any delay in payment may incur penalties or interest, as outlined in the contract.</li>
        <li>The farmer will deliver the produce to the location you specify within the agreed timeframe. Any delay or failure to deliver must be reported to the platform immediately. You understand that failure to accept delivery or delays caused by you may result in penalties or cancellation of the contract.</li>
      </ul>
      <button
        className="pay-now-button"
        onClick={onPay}
      >
        Pay Now
      </button>
      <button
        className="deploy-button"
        onClick={onDep}
      >
        Deploy
      </button>
    </div>
  );
};

export default PaymentSection;
