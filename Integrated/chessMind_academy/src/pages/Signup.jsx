import React, { useState } from 'react';
import '../assets/css/Signup.css';
import { Link } from 'react-router-dom';
import emailIcon from '../assets/images/email.png';
import userIcon from '../assets/images/person.png';
import passwordIcon from '../assets/images/password.png';
import phoneIcon from '../assets/images/phoneIcon.png';
import loginImg from '../assets/images/loginImg.jpg';
import signUpImg from '../assets/images/signUp.jpg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    role: 'user',
    email: '',
    name: '',
    mobileNumber: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    name: '',
    mobileNumber: '',
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
    if (!formData.name) {
      setErrors((prevErrors) => ({ ...prevErrors, name: 'This field is required' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, name: '' }));
    }
  };

  const validatePhoneNumber = () => {
    if (formData.mobileNumber.length !== 10 || !(/^\d+$/.test(formData.mobileNumber))) {
      setErrors((prevErrors) => ({ ...prevErrors, mobileNumber: 'Invalid phone number' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, mobileNumber: '' }));
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
    } else if (field === 'name') {
      validateUsername();
    } else if (field === 'mobileNumber') {
      validatePhoneNumber();
    } else if (field === 'password') {
      validatePassword();
      // Validate confirm password whenever password changes
      validateConfirmPassword();
    } else if (field === 'confirmPassword') {
      validateConfirmPassword();
    }
  };

  const handleSignUp = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/register', formData);
  
      if (response.status === 201) {
        // Registration successful, handle success scenario
        console.log('Registration successful');
        navigate('/login');
      } else {
        // Handle registration error
        console.error('Registration failed with status:', response.status);
        console.error('Error message:', response.data);
  
        if (response.status === 400 && response.data === 'User already exists') {
          // Display a user-friendly error message for duplicate registration
          setErrors((prevErrors) => ({ ...prevErrors, email: 'This email is already registered.' }));
        } else {
          // Display a generic error message for other registration failures
          setErrors((prevErrors) => ({ ...prevErrors, general: 'Registration failed. Please try again.' }));
        }
      }
    } catch (error) {
      // Handle network error or other exceptions
      console.error('Error during registration:', error.message);
      // Display a generic error message for network errors
      setErrors((prevErrors) => ({ ...prevErrors, general: 'Network error. Please try again.' }));
    }
  };
  

  return (
    <div className='whole-signup-container'>
      <div className='signup-img-container'>
        <div className='signup-opacity-overlay'></div>
        <img src={signUpImg} alt="" width="100%" height="100%" />
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
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              onBlur={validateUsername}
            />
            <div className={`error-message ${errors.name === '' ? 'valid' : 'invalid'}`}>{errors.name}</div>
          </div>
          <div className='signup-inputs'>
            <img src={phoneIcon} alt='' width="10%" height="20%" />
            <input
              type='tel'
              placeholder='Mobile Number'
              value={formData.mobileNumber}
              onChange={(e) => handleInputChange('mobileNumber', e.target.value)}
              onBlur={validatePhoneNumber}
            />
            <div className={`error-message ${errors.mobileNumber === '' ? 'valid' : 'invalid'}`}>{errors.mobileNumber}</div>
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
        </div>
        <p>Already a user/ADMIN <Link to='/login'>Login</Link></p>
      </div>
    </div>
  );
}

export default Signup;
