import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import email from '../assets/images/email.png';
import password from '../assets/images/password.png';
import loginImg from '../assets/images/loginImg.jpg';
import '../assets/css/Login.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';

function AdminLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
  
    // Fetch email and password values from the form
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!emailRegex.test(email)) {
      alert('Invalid email format. Please enter a valid email address.');
      return;
    }
  
    // Password validation
    if (password.length < 8) {
      alert('Invalid password. Password must be at least 8 characters long.');
      return;
    }
  
    // Check if the user is an admin based on the provided admin credentials
    if (email === 'admin@gmail.com' && password === 'Admin@123') {
      // Perform admin-specific actions or navigation
      alert('Admin login successful!');
      // Navigate to admin dashboard or perform other actions
      navigate('/admin/academy');
    } else {
      // For regular users, you might want to add backend authentication in a real-world scenario
      // For now, perform regular user login actions or navigation
      alert('Invalid email or password for admin.');
      // Navigate to user profile or perform other actions
    }
  };
  
  return (
    <div className='whole-container'>
      <div className='img-container'>
        <div className='opacity-overlay'></div>
        <div className='welcome-text'>
          <h2>Welcome, Administrator!</h2>
          <p>Thank you for your continued commitment to excellence.</p>
        </div>
        <img src={loginImg} alt="" width="100%" height="100%" />
      </div>
      <div className='login-container'>
        <div className='login-header'>
          <div className='login-text'>Sign In</div>
          <div className='login-underline'></div>
        <p><b>ADMIN</b></p>
        </div>
        <form onSubmit={handleLogin}>
          <div className='login-input'>
            <div className='login-inputs'>
              <img src={email} alt='' />
              <input type='email' placeholder='Email id' name='email' required />
            </div>
            <div className='login-inputs'>
              <img src={password} alt='' />
              <input type='password' placeholder='Password' name='password' required />
            </div>
          </div>
          {/* <div className='login-forgot-password'>
            Forgot password? <span>Click Here!!!</span>
          </div> */}
          <div className='login-submit-container'>
            <input type='submit' value='Login' className='login-submit' />
          </div>
          {/* <p>New User <Link to='/signup'>Sign up</Link></p>
          <p>ADMIN <Link to=''></Link></p> */}
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
