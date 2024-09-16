import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './BasicInfo.css'; // Importing the CSS file

const BuyerInfo = () => {
  const [formData, setFormData] = useState({
    buyerType: '',
    category: '',
    registrationLevel: '',
    registeredWithState: '',
    registeredWithMandi: '',
    registrationStatus: '',
    gst: '',
    companyName: '',
    iecNo: '',
    location: '',
    address1: '',
    address2: '',
    aadhaarNumber: '',
    otp: ''
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for form submission
    console.log(formData);
    // Navigate to the next page (e.g., another page)
    navigate('/next-page'); // Change '/next-page' to your actual next route
  };

  const handleSkip = () => {
    navigate('/bank-details'); // Navigate to BankDetails page on skip
  };

  const sendOtp = () => {
    // Logic to send OTP
    console.log('Sending OTP to:', formData.aadhaarNumber);
  };

  return (
    <div className="buyer-info-form">
      <div className="progress-bar">
        <div className="stage active">1</div>
        <div className="stage active">2</div>
        <div className="stage active">3</div>
        <div className="stage">4</div>
        <div className="stage">5</div>
      </div>
      <h2>Enter Your Buyer Details</h2>
      <p>Provide details about your company as a buyer.</p>
      <form onSubmit={handleSubmit}>
        {/* Buyer Type */}
        <div className="form-group">
          <label>Buyer Type</label>
          <select name="buyerType" value={formData.buyerType} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Indian">Indian</option>
            <option value="International">International</option>
          </select>
        </div>

        {/* Category */}
        <div className="form-group">
          <label>Category</label>
          <select name="category" value={formData.category} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Exporter">Exporter</option>
            <option value="Importer">Importer</option>
            <option value="Distributor">Distributor</option>
          </select>
        </div>

        {/* Registration Level */}
        <div className="form-group">
          <label>Registration Level</label>
          <select name="registrationLevel" value={formData.registrationLevel} onChange={handleChange}>
            <option value="">Select</option>
            <option value="State Level">State Level</option>
            <option value="Mandi Level">Mandi Level</option>
          </select>
        </div>

        {/* Registered with State */}
        <div className="form-group">
          <label>Registered with State</label>
          <input
            type="text"
            name="registeredWithState"
            placeholder="Enter Registered State"
            value={formData.registeredWithState}
            onChange={handleChange}
            required
          />
        </div>

        {/* Registered with Mandi */}
        <div className="form-group">
          <label>Registered with Mandi</label>
          <input
            type="text"
            name="registeredWithMandi"
            placeholder="Enter Registered Mandi"
            value={formData.registeredWithMandi}
            onChange={handleChange}
            required
          />
        </div>

        {/* Registration Status */}
        <div className="form-group">
          <label>Registration Status</label>
          <select name="registrationStatus" value={formData.registrationStatus} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Notified">Notified</option>
            <option value="Denotified">Denotified</option>
            <option value="Both">Both</option>
          </select>
        </div>

        {/* GST */}
        <div className="form-group">
          <label>GST</label>
          <input
            type="text"
            name="gst"
            placeholder="Enter GST Number"
            value={formData.gst}
            onChange={handleChange}
            required
          />
        </div>

        {/* Company Name */}
        <div className="form-group">
          <label>Company Name</label>
          <input
            type="text"
            name="companyName"
            placeholder="Enter Company Name"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </div>

        {/* IEC No */}
        <div className="form-group">
          <label>IEC No</label>
          <input
            type="text"
            name="iecNo"
            placeholder="Enter IEC Number"
            value={formData.iecNo}
            onChange={handleChange}
            required
          />
        </div>

        {/* Location */}
        <div className="form-group">
          <label>Location</label>
          <div className="map-placeholder">
            {/* Placeholder for Google Maps component */}
            <img src="https://via.placeholder.com/600x300?text=Map+Placeholder" alt="Map Placeholder" />
          </div>
          <input
            type="text"
            name="location"
            placeholder="Enter Location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>

        {/* Address Line 1 */}
        <div className="form-group">
          <label>Address Line 1</label>
          <input
            type="text"
            name="address1"
            placeholder="Enter Address Line 1"
            value={formData.address1}
            onChange={handleChange}
            required
          />
        </div>

        {/* Address Line 2 */}
        <div className="form-group">
          <label>Address Line 2</label>
          <input
            type="text"
            name="address2"
            placeholder="Enter Address Line 2"
            value={formData.address2}
            onChange={handleChange}
          />
        </div>

        {/* Aadhaar Number */}
        <div className="form-group">
          <label>Aadhaar Number</label>
          <input
            type="text"
            name="aadhaarNumber"
            placeholder="Enter Aadhaar Number"
            value={formData.aadhaarNumber}
            onChange={handleChange}
            required
          />
          <button type="button" className="send-otp" onClick={sendOtp}>Send OTP</button>
        </div>

        {/* OTP Verification */}
        <div className="form-group">
          <label>OTP (One Time Password)</label>
          <input
            type="text"
            name="otp"
            placeholder="Enter OTP"
            value={formData.otp}
            onChange={handleChange}
          />
        </div>

        {/* Submit Button */}
        <div className="form-actions">
          <button type="submit" className="next-btn">Next</button>
          <button type="button" className="skip-btn" onClick={handleSkip}>Skip for Now</button>
        </div>
      </form>
    </div>
  );
};

export default BuyerInfo;
