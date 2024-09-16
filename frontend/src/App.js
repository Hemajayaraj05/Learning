import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideBar from './SideBar';
import MainContent from './MainContent';
import BasicInfo from './BasicInfo';
import EmailVerification from './EmailVerification';
import BankDetails from './BankDetails';
import AccountCreated from './AccountCreated';
import BuyerInfo from './BuyerInfo'; // Import BuyerInfo component
import ServiceProviderInfo from './ServiceProviderInfo'; // Import ServiceProviderInfo component
import LoginPage from './Login';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <SideBar /> {/* Sidebar stays common for all routes */}
        <div className="main-section">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/email-verification" element={<EmailVerification />} />
            <Route path="/basic-info" element={<BasicInfo />} />
            <Route path="/bank-details" element={<BankDetails />} />
            <Route path="/account-created" element={<AccountCreated />} />
            <Route path="/buyer-info" element={<BuyerInfo />} /> {/* Route for BuyerInfo */}
            <Route path="/service-provider-info" element={<ServiceProviderInfo />} /> {/* Route for ServiceProviderInfo */}
            <Route path="/login" element={<LoginPage />} /> {/* Route for the Login page */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
