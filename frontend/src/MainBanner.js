import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./styles/MainBanner.css";

const MainBanner = () => {
  return (
    <div className="main-banner">
      <div className="banner-text">
        <h1>
          Secure Contracts for Farmers
          and Guaranteed Produce for Buyers.
        </h1>
        <p>Connect farmers and buyers with transparent, secure contract farming agreements.</p>
        <Link to="/main-content"> {/* Link to navigate to the MainContent page */}
          <button className="cta-button">Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default MainBanner;
