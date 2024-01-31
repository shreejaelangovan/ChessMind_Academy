import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import email from '../assets/images/email.png';
import userIcon from '../assets/images/person.png';
import password from '../assets/images/password.png';
import loginImg from '../assets/images/loginImg.jpg';
import '../assets/css/Login.css';

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
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
  // You can customize this based on your requirements (e.g., minimum length, special characters, etc.)
  if (password.length < 8) {
    alert('Invalid password. Password must be at least 8 characters long.');
    return;
  }

  // Perform validation
  if (email === 'admin@gmail.com' && password === 'Admin@123') {
    // Redirect to admin academy
    navigate('/admin/academy');
  } else if (email === 'shreeja@gmail.com' && password === 'Shreeja@123') {
    // Redirect to user profile
    navigate('/profile');
  } else {
    // Handle invalid credentials (you can show an error message or perform other actions)
    alert('Invalid credentials. Please check your email and password.');
  }
    
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
          <div className='login-forgot-password'>
            Forgot password? <span>Click Here!!!</span>
          </div>
          <div className='login-submit-container'>
            <input type='submit' value='Login' className='login-submit' />
          </div>
          <p>New User/Admin <Link to='/signup'>Sign up</Link></p>
        </form>
      </div>
    </div>
  );
}

export default Login;
