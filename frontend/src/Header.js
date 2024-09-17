import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
      <img src="LOGO.png" alt="Logo" />
      </div>
      <nav>
        <ul>
          <li><a href="#how-it-works">How it works?</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#about-us">About Us</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
      </nav>
      <div className="login">
        <button className="login-button">LOG IN</button>
      </div>
    </header>
  );
};

export default Header;