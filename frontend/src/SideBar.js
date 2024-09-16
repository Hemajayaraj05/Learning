import React from 'react';
import './SideBar.css';

function SideBar() {
  return (
    <div className="sidebar">
      <h2>Creating an Account</h2>
      <p>Already have an Account? <a href="/login">Log In</a></p>
    </div>
  );
}

export default SideBar;
