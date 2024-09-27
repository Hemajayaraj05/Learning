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
import AgreementPage from './Agreement'; 
import Dashboard from './Dashboard'; 
import SmartContract from './SmartContract';
import PaymentSection from './PaymentSection'; 
import SignAgreement from './SignAgreement';
import LoginPage from './Login';  // Import the Login page
import './styles/App.css';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  // Conditionally hide the sidebar on the home, login, and dashboard pages
  const hideSidebarRoutes = ['/', '/login', '/dashboard'];
  const shouldHideSidebar = hideSidebarRoutes.includes(location.pathname);

  return (
    <div className="container">
      {/* Render sidebar only if not on home, login, or dashboard pages */}
      {!shouldHideSidebar && <SideBar />}
      <div className="main-section">
        <Routes>
          <Route path="/" element={<Home />} />  {/* Home page without sidebar */}
        </Routes>
        <div class="main-sec">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />  {/* Dashboard page without sidebar */}
          <Route path="/login" element={<LoginPage />} />  {/* Login page without sidebar */}
          <Route path="/main-content" element={<MainContent />} />
          <Route path="/email-verification" element={<EmailVerification />} />
          <Route path="/basic-info" element={<BasicInfo />} />
          <Route path="/bank-details" element={<BankDetails />} />
          <Route path="/account-created" element={<AccountCreated />} />
          <Route path="/agreement" element={<AgreementPage />} />
          <Route path="/buyer-info" element={<BuyerInfo />} />
          <Route path="payment-section" element={<PaymentSection/>} />
          <Route path="sign-agreement" element={<SignAgreement/>} />
          <Route path="/service-provider-info" element={<ServiceProviderInfo />} />
          <Route path="/smart-contract" element={<SmartContract />} />

        </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
