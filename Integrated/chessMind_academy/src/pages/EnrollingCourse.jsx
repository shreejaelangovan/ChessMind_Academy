// EnrollingCourseForm.jsx
import React, { useState } from 'react';
import "../assets/css/EnrollingCourse.css";

const EnrollingCourse = () => {
  const [formData, setFormData] = useState({
    name: '',
    fatherName: '',
    motherName: '',
    gender: '',
    age: '',
    contact: '',
    alcontact: '',
    email: '',
    houseNo: '',
    streetName: '',
    areaName: '',
    pincode: '', // Updated field name to match backend
    state: '',
    nationality: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch('http://localhost:8080/api/enrollments', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (response.ok) {
  //       console.log('Enrollment successful');
  //       alert("User Enrolled Successfully");
  //       // You can handle success here (e.g., show a success message, redirect)
  //     } else {
  //       console.error('Failed to enroll');
  //       // You can handle failure here (e.g., show an error message)
  //     }
  //   } catch (error) {
  //     console.error('Error during enrollment:', error);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Extract academyId and courseId from the URL path
    const pathSegments = window.location.pathname.split('/');
    const acadIdIndex = pathSegments.indexOf('academies') + 1;
    const courseIdIndex = pathSegments.indexOf('courses') + 1;
  
    if (acadIdIndex === 0 || courseIdIndex === 0 || acadIdIndex >= pathSegments.length || courseIdIndex >= pathSegments.length) {
      console.error('Error: AcademyId or CourseId not found in the URL path.');
      return;
    }
  
    const acadId = pathSegments[acadIdIndex];
    const courseId = pathSegments[courseIdIndex];
  
    try {
      const response = await fetch(`http://localhost:8080/api/enrollments/${acadId}/${courseId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        console.log('Enrollment successful');
        alert("User Enrolled Successfully");
        // You can handle success here (e.g., show a success message, redirect)
      } else {
        console.error('Failed to enroll');
        // You can handle failure here (e.g., show an error message)
      }
    } catch (error) {
      console.error('Error during enrollment:', error);
    }
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
              <label htmlFor='name'>Name:</label>
              <input type='text' id='name' name='name' value={formData.name} onChange={handleChange} required />
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
              <label htmlFor='contact'>Phone Number:</label>
              <input type='tel' id='contact' name='contact' value={formData.contact} onChange={handleChange} required />
            </div>
            <div className='enroll-form-group'>
              <label htmlFor='alcontact'>Alternate Phone Number:</label>
              <input type='tel' id='alcontact' name='alcontact' value={formData.alcontact} onChange={handleChange} />
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
              <input type='text' id='areaName' name='areaName' value={formData.areaName} onChange={handleChange} required />
            </div>
            <div className='enroll-form-group'>
              <label htmlFor='pincode'>Pin Code:</label>
              <input type='text' id='pincode' name='pincode' value={formData.pincode} onChange={handleChange} required />
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
