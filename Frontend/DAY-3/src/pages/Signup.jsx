// Signup.jsx

import React, { useState } from 'react';
import '../assets/css/Signup.css';
import { Link } from 'react-router-dom';
import emailIcon from '../assets/images/email.png';
import userIcon from '../assets/images/person.png';
import passwordIcon from '../assets/images/password.png';
import phoneIcon from '../assets/images/phoneIcon.png';
import loginImg from '../assets/images/loginImg.jpg';
import signUp from '../assets/images/signUp.jpg'
function Signup() {
  const [formData, setFormData] = useState({
    role: 'user',
    email: '',
    username: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    username: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });

  const validateEmail = () => {
    if (!formData.email.includes('@')) {
      setErrors((prevErrors) => ({ ...prevErrors, email: 'Invalid email format' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
    }
  };

  const validateUsername = () => {
    if (!formData.username) {
      setErrors((prevErrors) => ({ ...prevErrors, username: 'This field is required' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, username: '' }));
    }
  };

  const validatePhoneNumber = () => {
    if (formData.phoneNumber.length !== 10 || !(/^\d+$/.test(formData.phoneNumber))) {
      setErrors((prevErrors) => ({ ...prevErrors, phoneNumber: 'Invalid phone number' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, phoneNumber: '' }));
    }
  };

  const validatePassword = () => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;

    if (!passwordRegex.test(formData.password)) {
      setErrors((prevErrors) => ({ ...prevErrors, password: 'Invalid password format' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, password: '' }));
    }
  };

  const validateConfirmPassword = () => {
    if (formData.password !== formData.confirmPassword) {
      setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: 'Passwords do not match' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: '' }));
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: value,
    }));

    if (field === 'email') {
      validateEmail();
    } else if (field === 'username') {
      validateUsername();
    } else if (field === 'phoneNumber') {
      validatePhoneNumber();
    } else if (field === 'password') {
      validatePassword();
      // Validate confirm password whenever password changes
      validateConfirmPassword();
    } else if (field === 'confirmPassword') {
      validateConfirmPassword();
    }
  };

  const handleSignUp = () => {
    const requiredFields = ['email', 'username', 'phoneNumber', 'password', 'confirmPassword'];
    const emptyFields = requiredFields.filter((field) => !formData[field]);

    if (emptyFields.length > 0) {
      setErrors((prevErrors) => ({ ...prevErrors, ...Object.fromEntries(emptyFields.map((field) => [field, 'This field is required'])) }));
    } else {
      // Implement your sign-up logic here
      // Check if there are no errors
      const errorValues = Object.values(errors);
      if (errorValues.every((error) => error === '')) {
        // Your sign-up logic goes here
        // If successful, you can show a success message or navigate to another page
      }
    }
  };

  return (
    <div className='whole-signup-container'>

    <div className='signup-img-container'>
      <div className='signup-opacity-overlay'></div>
        <img src={signUp} alt="" width="100%" height="100%" />
      <div className='signup-welcome-text'>
      <h2>Join Our Learning Community!</h2>
          <p>Unlock a world of knowledge and skills by signing up for an account. Start your learning journey today!</p>
        </div>
      </div>
    <div className='signup-container'>
      <div className='signup-header'>
        <div className='signup-text'>Sign Up</div>
        <div className='signup-underline'></div>
      </div>

      <div className='signup-input'>
        <div className='signup-inputs'>
          <img src={userIcon} alt='' />
          <select
            value={formData.role}
            onChange={(e) => handleInputChange('role', e.target.value)}
            >
            <option value='user'>User</option>
            <option value='admin'>Admin</option>
          </select>
        </div>
        <div className='signup-inputs'>
          <img src={emailIcon} alt='' />
          <input
            type='email'
            placeholder='Email id'
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            onBlur={validateEmail}
            />
          <div className={`error-message ${errors.email === '' ? 'valid' : 'invalid'}`}>{errors.email}</div>
        </div>
        <div className='signup-inputs'>
          <img src={userIcon} alt='' />
          <input
            type='text'
            placeholder='Username'
            value={formData.username}
            onChange={(e) => handleInputChange('username', e.target.value)}
            onBlur={validateUsername}
            />
          <div className={`error-message ${errors.username === '' ? 'valid' : 'invalid'}`}>{errors.username}</div>
        </div>
        <div className='signup-inputs'>
          <img src={phoneIcon} alt='' width="10%" height="20%" />
          <input
            type='tel'
            placeholder='Phone Number'
            value={formData.phoneNumber}
            onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
            onBlur={validatePhoneNumber}
            />
          <div className={`error-message ${errors.phoneNumber === '' ? 'valid' : 'invalid'}`}>{errors.phoneNumber}</div>
        </div>
        <div className='signup-inputs'>
          <img src={passwordIcon} alt='' />
          <input
            type='password'
            placeholder='Password'
            value={formData.password}
            onChange={(e) => handleInputChange('password', e.target.value)}
            onBlur={validatePassword}
            />
          <div className={`error-message ${errors.password === '' ? 'valid' : 'invalid'}`}>{errors.password}</div>
        </div>
        <div className='signup-inputs'>
          <img src={passwordIcon} alt='' />
          <input
            type='password'
            placeholder='Confirm Password'
            value={formData.confirmPassword}
            onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
            onBlur={validateConfirmPassword}
            />
          <div className={`error-message ${errors.confirmPassword === '' ? 'valid' : 'invalid'}`}>{errors.confirmPassword}</div>
        </div>
      </div>

      <div className='signup-submit-container'>
        <div className='signup-submit' onClick={handleSignUp}>Sign Up</div>
        {/* <a href='/login' className='signup-submit'>Login</a> */}
        {/* <div className='signup-submit'>Login</div> */}
      </div>
        <p>Already a user/ADMIN <Link to='/login'>Login</Link></p>
    </div>
    </div>
  );
}

export default Signup;
