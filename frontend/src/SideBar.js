import React from 'react';
import './SideBar.css';
import { Link } from 'react-router-dom';

function SideBar() {
  return (
    <div className="sidebar">
       <img src="LOGO.png" alt="Logo" />
       <h2><span>Creating</span><span> an </span><span>Account</span></h2>

      <p>Already have an Account?<Link to="/login">Login</Link></p>
    </div>
  );
}

export default SideBar;