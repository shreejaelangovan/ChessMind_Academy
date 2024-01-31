// EnrollingCourseForm.jsx
import React, { useState } from 'react';
import "../assets/css/EnrollingCourse.css"; // Add your CSS file path

const EnrollingCourse = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    fatherName: '',
    motherName: '',
    email: '',
    age: '',
    phoneNumber: '',
    alternatePhoneNumber: '',
    gender: '',
    houseNo: '',
    streetName: '',
    areaName: '',
    pinCode: '',
    state: '',
    nationality: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Submitted:', formData);
  };

  return (
    <div className='enrollingCourseForm'>
      <h2>Enrolling Course Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Personal Information */}
        <div className='enroll-form-box'>
          <h3>Personal Information</h3>
          <div className='enroll-form-row'>
            <div className='enroll-form-group'>
              <label htmlFor='firstName'>First Name:</label>
              <input type='text' id='firstName' name='firstName' value={formData.firstName} onChange={handleChange} required />
            </div>
            <div className='enroll-form-group'>
              <label htmlFor='lastName'>Last Name:</label>
              <input type='text' id='lastName' name='lastName' value={formData.lastName} onChange={handleChange} required />
            </div>
            <div className='enroll-form-group'>
              <label htmlFor='fatherName'>Father Name:</label>
              <input type='text' id='fatherName' name='fatherName' value={formData.fatherName} onChange={handleChange} required />
            </div>
            <div className='enroll-form-group'>
              <label htmlFor='motherName'>Mother Name:</label>
              <input type='text' id='motherName' name='motherName' value={formData.motherName} onChange={handleChange} required />
            </div>
            <div className='enroll-form-group'>
              <label htmlFor='email'>E-Mail Id:</label>
              <input type='email' id='email' name='email' value={formData.email} onChange={handleChange} required />
            </div>
            <div className='enroll-form-group'>
              <label htmlFor='age'>Age:</label>
              <input type='number' id='age' name='age' value={formData.age} onChange={handleChange} required />
            </div>
            <div className='enroll-form-group'>
              <label htmlFor='phoneNumber'>Phone Number:</label>
              <input type='tel' id='phoneNumber' name='phoneNumber' value={formData.phoneNumber} onChange={handleChange} required />
            </div>
            <div className='enroll-form-group'>
              <label htmlFor='alternatePhoneNumber'>Alternate Phone Number:</label>
              <input type='tel' id='alternatePhoneNumber' name='alternatePhoneNumber' value={formData.alternatePhoneNumber} onChange={handleChange} />
            </div>
            <div className='enroll-form-group'>
              <label htmlFor='gender'>Gender:</label>
              <select id='gender' name='gender' value={formData.gender} onChange={handleChange} required>
                <option value=''>Select Gender</option>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
                <option value='other'>Other</option>
              </select>
            </div>
          </div>
        </div>

        {/* Address Information */}
        <div className='enroll-form-box'>
          <h3>Address Information</h3>
          <div className='enroll-form-row'>
            <div className='enroll-form-group'>
              <label htmlFor='houseNo'>House No:</label>
              <input type='text' id='houseNo' name='houseNo' value={formData.houseNo} onChange={handleChange} required />
            </div>
            <div className='enroll-form-group'>
              <label htmlFor='streetName'>Street Name:</label>
              <input type='text' id='streetName' name='streetName' value={formData.streetName} onChange={handleChange} required />
            </div>
            <div className='enroll-form-group'>
              <label htmlFor='areaName'>Area Name:</label>
              <input type='enroll-text' id='areaName' name='areaName' value={formData.areaName} onChange={handleChange} required />
            </div>
            <div className='enroll-form-group'>
              <label htmlFor='pinCode'>Pin Code:</label>
              <input type='text' id='pinCode' name='pinCode' value={formData.pinCode} onChange={handleChange} required />
            </div>
            <div className='enroll-form-group'>
              <label htmlFor='state'>State:</label>
              <input type='text' id='state' name='state' value={formData.state} onChange={handleChange} required />
            </div>
            <div className='enroll-form-group'>
              <label htmlFor='nationality'>Nationality:</label>
              <input type='text' id='nationality' name='nationality' value={formData.nationality} onChange={handleChange} required />
            </div>
          </div>
        </div>

        {/* Enroll Now Button */}
        <center>

        <div className='enroll-form-box'>
          <button type='submit'>Enroll Now</button>
        </div>
        </center>
      </form>
    </div>
  );
};

export default EnrollingCourse;
