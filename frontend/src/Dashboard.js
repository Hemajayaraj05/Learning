import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; // Import the combined CSS file

const Dashboard = () => {
  // Example data for crops
  const crops = [
    {
      id: 1,
      name: 'Wheat',
      size: '15 acres',
      img: 'wheat.jpeg',
      farmName: 'Green Farm',
      farmerName: 'John Doe', // Farmer's name
      farmerProfile: 'farmer1.jpg', // Example profile picture for farmer
      demand: '1000 kg',
      expectedHarvestDate: 'October 2024',
      offeringPrice: '$2.50 per kg'
    },
    {
      id: 2,
      name: 'Rice',
      size: '10 acres',
      img: 'paddy.jpeg',
      farmName: 'Riverdale Farm',
      farmerName: 'Jane Smith', // Farmer's name
      farmerProfile: 'farmer2.jpg',
      demand: '800 kg',
      expectedHarvestDate: 'September 2024',
      offeringPrice: '$3.00 per kg'
    },
    {
      id: 3,
      name: 'Corn',
      size: '20 acres',
      img: 'corn.jpeg',
      farmName: 'Sunny Acres',
      farmerName: 'Michael Johnson', // Farmer's name
      farmerProfile: 'farmer3.jpg',
      demand: '1500 kg',
      expectedHarvestDate: 'November 2024',
      offeringPrice: '$1.80 per kg'
    }
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
            <div key={crop.id} className="card">
              <img src={crop.img} alt={crop.name} className="crop-image" />
              <div className="card-content">
                <img src={crop.farmerProfile} alt="Farmer" className="farmer-profile" />
                <h3>{crop.name}</h3>
                <p>Farm: {crop.farmName}</p>
                <p>Farmer: {crop.farmerName}</p> {/* Farmer's Name */}
                <p>Size: {crop.size}</p>
                <p>Demand: {crop.demand}</p>
                <p>Expected Harvest: {crop.expectedHarvestDate}</p>
                <p>Offering Price: {crop.offeringPrice}</p>
                <Link to="/agreement" className="proceed-btn">
                  Proceed to Agreement
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
