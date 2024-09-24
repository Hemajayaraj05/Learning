import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './BasicInfo.css'; // Importing the CSS file

const ServiceProviderInfo = () => {
  const [formData, setFormData] = useState({
    category: '',
    registrationLevel: '',
    registeredWithState: '',
    registeredWithMandi: '',
    companyName: '',
    dateOfEstablishment: '',
    companyRegNumber: '',
    licenceNumber: '',
    gst: '',
    fullName: '',
    gender: '',
    fatherName: '',
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
    alert("OTP has been sent to your aadhar number");
    // Logic to send OTP
    // console.log('Sending OTP to:', formData.aadhaarNumber);
  };

  return (
    <div className="service-provider-info-form">
      <div className="progress-bar">
        <div className="stage active">1</div>
        <div className="stage active">2</div>
        <div className="stage active">3</div>
        <div className="stage">4</div>
        <div className="stage">5</div>
      </div>
      <h2>Enter Your Service Provider Details</h2>
      <p>Provide details about your service provider company.</p>
      <form onSubmit={handleSubmit}>
        {/* Category */}
        <div className="form-group">
          <label>Category</label>
          <select name="category" value={formData.category} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Logistic Provider">Logistic Provider</option>
            <option value="Consultant">Consultant</option>
            <option value="Equipment Supplier">Equipment Supplier</option>
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

        {/* Date of Establishment */}
        <div className="form-group">
          <label>Date of Establishment</label>
          <input
            type="date"
            name="dateOfEstablishment"
            value={formData.dateOfEstablishment}
            onChange={handleChange}
            required
          />
        </div>

        {/* Company Registration Number */}
        <div className="form-group">
          <label>Company Registration Number</label>
          <input
            type="text"
            name="companyRegNumber"
            placeholder="Enter Company Registration Number"
            value={formData.companyRegNumber}
            onChange={handleChange}
            required
          />
        </div>

        {/* Licence Number */}
        <div className="form-group">
          <label>Licence Number</label>
          <input
            type="text"
            name="licenceNumber"
            placeholder="Enter Licence Number"
            value={formData.licenceNumber}
            onChange={handleChange}
            required
          />
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

        {/* Full Name */}
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Gender */}
        <div className="form-group">
          <label>Gender</label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        {/* Father's Name */}
        <div className="form-group">
          <label>Father's Name</label>
          <input
            type="text"
            name="fatherName"
            placeholder="Enter Father's Name"
            value={formData.fatherName}
            onChange={handleChange}
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

export default ServiceProviderInfo;
