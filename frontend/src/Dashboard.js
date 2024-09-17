import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; // Import the combined CSS file

const Dashboard = () => {
  // Example data for crops
  const crops = [
    { id: 1, name: 'Wheat', size: '15 acres', img: 'wheat.jpeg', farmName: 'Green Farm' },
    { id: 2, name: 'Rice', size: '10 acres', img: 'paddy.jpeg', farmName: 'Riverdale Farm' },
    { id: 3, name: 'Corn', size: '20 acres', img: 'corn.jpeg', farmName: 'Sunny Acres' },
  ];

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <h2>RuralRoots</h2>
        </div>
        <ul className="sidebar-list">
          <li>
            <Link to="/dashboard" className="sidebar-link">
              <i className="fas fa-tachometer-alt"></i> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/assignment" className="sidebar-link">
              <i className="fas fa-tasks"></i> Farmer
            </Link>
          </li>
          <li>
            <Link to="/report" className="sidebar-link">
              <i className="fas fa-file-alt"></i> Buyer
            </Link>
          </li>
          <li>
            <Link to="/stats" className="sidebar-link">
              <i className="fas fa-chart-bar"></i> ServiceProvider
            </Link>
          </li>
          <li>
            <Link to="/message" className="sidebar-link">
              <i className="fas fa-comment"></i> Message
            </Link>
          </li>
          <li>
            <Link to="/help" className="sidebar-link">
              <i className="fas fa-question-circle"></i> Help
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="dashboard-main">
        <h1>Dashboard</h1>
        <div className="cards-container">
          {crops.map((crop) => (
            <Link key={crop.id} to="/agreement" className="card-link">
              <div className="card">
                <img src={crop.img} alt={crop.name} className="crop-image" />
                <div className="card-content">
                  <h3>{crop.name}</h3>
                  <p>Farm: {crop.farmName}</p>
                  <p>Size: {crop.size}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
