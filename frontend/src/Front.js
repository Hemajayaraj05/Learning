import React, { useState } from 'react';
import './styles/Front.css'; // Import the updated CSS file
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa'; // Import FontAwesome icons

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    userType: '', // "farmer" or "buyer"
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    password: '',
    userType: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simple validation
    let errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.password.trim()) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }
    if (!formData.userType) {
      errors.userType = 'Please select a user type';
    }

    if (Object.keys(errors).length === 0) {
      // Handle form submission (e.g., send data to backend)
      console.log('Form data:', formData);
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        password: '',
        userType: '',
      });
      setFormErrors({
        name: '',
        email: '',
        password: '',
        userType: '',
      });
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div className="container">
      <h2>REGISTRATION PAGE</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <div className="input-container">
            <FaUser className="icon" />
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          {formErrors.name && <span>{formErrors.name}</span>}
        </div>
        <div>
          <label>Email:</label>
          <div className="input-container">
            <FaEnvelope className="icon" />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          {formErrors.email && <span>{formErrors.email}</span>}
        </div>
        <div>
          <label>Password:</label>
          <div className="input-container">
            <FaLock className="icon" />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          {formErrors.password && <span>{formErrors.password}</span>}
        </div>
        <div className="radio-group">
          <label>User Type:</label>
          <label>
            <input
              type="radio"
              name="userType"
              value="farmer"
              checked={formData.userType === 'farmer'}
              onChange={handleInputChange}
            />
            Farmer
          </label>
          <label>
            <input
              type="radio"
              name="userType"
              value="buyer"
              checked={formData.userType === 'buyer'}
              onChange={handleInputChange}
            />
            Buyer
          </label>
          {formErrors.userType && <span>{formErrors.userType}</span>}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationPage;
