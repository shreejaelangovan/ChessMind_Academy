// TournamentPage.jsx

import React, { useState } from 'react';
import '../assets/css/Tournament.css';

const TournamentPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    gender: '',
  });

  const handleInputChange = (field, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: value,
    }));
  };

  const handleRegistration = () => {
    // Implement registration logic here
    console.log('Registration data:', formData);
    // You can send this data to your server or perform any other actions
  };

  return (
    <div className="tournament-container">
      <div className="tournament-info">
        <h1>Tournament Name</h1>
        <p>Date: June 1-3, 2024</p>
        <p>Venue: Sports Arena, City</p>
        <p>Who Can Participate: Open to all chess enthusiasts</p>
        <p>
          Tournament Details: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed euismod, turpis ac ultricies faucibus, justo erat bibendum nisi, nec
          iaculis arcu metus sed nulla.
        </p>
      </div>

      <div className="registration-form">
        <h2>Register for the Tournament</h2>
        <form>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Phone Number:</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Age:</label>
            <input
              type="number"
              value={formData.age}
              onChange={(e) => handleInputChange('age', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Gender:</label>
            <select
              value={formData.gender}
              onChange={(e) => handleInputChange('gender', e.target.value)}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <button type="button" onClick={handleRegistration}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default TournamentPage;
