import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import SideBar from './SideBar';
import MainContent from './MainContent';
import BasicInfo from './BasicInfo';
import EmailVerification from './EmailVerification';
import BankDetails from './BankDetails';
import AccountCreated from './AccountCreated';
import BuyerInfo from './BuyerInfo';
import ServiceProviderInfo from './ServiceProviderInfo';
import Home from './Home';
import AgreementPage from './Agreement'; // Import AgreementPage
import Dashboard from './Dashboard'; // Import Dashboard component
import SmartContract from './SmartContract'; // Import SmartContract component
import './App.css';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  // Check if the current path is home or dashboard
  const isHomeOrDashboardPage = location.pathname === '/' || location.pathname === '/dashboard';

  return (
    <div className={`container ${isHomeOrDashboardPage ? 'full-page' : ''}`}>
      {/* Conditionally render SideBar only if not on the home page or dashboard page */}
      {!isHomeOrDashboardPage && <SideBar />}

      {/* Render different layout for home, dashboard, and other pages */}
      <div className={isHomeOrDashboardPage ? 'full-content' : 'main-section'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/main-content" element={<MainContent />} />
          <Route path="/email-verification" element={<EmailVerification />} />
          <Route path="/basic-info" element={<BasicInfo />} />
          <Route path="/bank-details" element={<BankDetails />} />
          <Route path="/account-created" element={<AccountCreated />} />
          <Route path="/agreement" element={<AgreementPage />} /> {/* Route for AgreementPage */}
          <Route path="/buyer-info" element={<BuyerInfo />} />
          <Route path="/service-provider-info" element={<ServiceProviderInfo />} />
          <Route path="/smart-contract" element={<SmartContract />} /> {/* Route for SmartContract */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
