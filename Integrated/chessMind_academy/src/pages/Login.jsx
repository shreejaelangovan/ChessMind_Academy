import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import email from '../assets/images/email.png';
import password from '../assets/images/password.png';
import loginImg from '../assets/images/loginImg.jpg';
import '../assets/css/Login.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';

function Login() {
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

    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/authenticate', {
        email,
        password
      });
      const token = response.data.authenticationResponse.token;
      console.log(response);
      console.log(response.data.message);
      localStorage.setItem('token', token); 
      navigate('/profile');
    } catch (error) {
      console.error(error);
      // if (error.response && error.response.status === 401) {
        // Display "Invalid credentials" message for 401 (Unauthorized)
        alert('User does not exists');
      // }
    }

    // try {
    //   const response = await axios.post('http://localhost:8080/api/v1/auth/authenticate', { email, password });
    //     if (response.data.token) {
    //       setErrorMessage('');
    //         localStorage.setItem('token', response.data.token); // Store the token in localStorage
    //         navigate('/profile');
    //     } else {
    //       setErrorMessage('Invalid email or password');
    //     }
    // } catch (error) {
    //   setErrorMessage('Error logging in. Please try again.');
    // }
  
  };

  return (
    <div className='whole-container'>
      <div className='img-container'>
        <div className='opacity-overlay'></div>
        <div className='welcome-text'>
          <h2>Welcome Back!</h2>
          <p>Sign in to continue your learning journey.</p>
        </div>
        <img src={loginImg} alt="" width="100%" height="100%" />
      </div>
      <div className='login-container'>
        <div className='login-header'>
          <div className='login-text'>Sign In</div>
          <div className='login-underline'></div>
          <p><b>USER</b></p>
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
          <p>If you are a new user? <Link to='/signup'>Register</Link></p>
          <center><p>ADMIN? <Link to='/adminLogin'>Login</Link></p></center>
        </form>
      </div>
    </div>
  );
}

export default Login;
