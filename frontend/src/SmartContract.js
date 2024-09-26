import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import AgreementContract from './Agreement.json'; // Ensure this path is correct
// import './smart.css';

const SmartContract = () => {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);
  const [contractAddress, setContractAddress] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const initializeWeb3 = async () => {
      if (window.ethereum) {
        try {
          const web3Instance = new Web3(window.ethereum);
          setWeb3(web3Instance);

          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
          setAccount(accounts[0]);
        } catch (error) {
          console.error('Error initializing Web3:', error);
        }
      } else {
        console.error('Ethereum browser extension not detected');
      }
    };
    initializeWeb3();
  }, []);

  const deployContract = async () => {
    if (!web3 || !account) return;

    const contract = new web3.eth.Contract(AgreementContract.abi);

    const farmerName = 'John Farmer';
    const buyerName = 'Alice Buyer';
    const agreementDetails = 'Agreement between Farmer and Buyer';

    setLoading(true);
    try {
      const deployedContract = await contract
        .deploy({
          data: AgreementContract.bytecode,
          arguments: [farmerName, buyerName, agreementDetails],
        })
        .send({ from: account });

      setContractAddress(deployedContract.options.address);
      alert('Contract deployed at: ' + deployedContract.options.address);
    } catch (error) {
      console.error('Error deploying contract:', error);
      alert('Deployment failed. Check the console for details.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='smar'>
      <h1>Farmer-Buyer Agreement</h1>
      <button onClick={deployContract} disabled={loading}>
        {loading ? 'Deploying...' : 'Deploy Contract'}
      </button>
      {contractAddress && <p>Contract deployed at: {contractAddress}</p>}
    </div>
  );
};

export default SmartContract;
