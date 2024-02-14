import React, { useState } from 'react';
import "../assets/css/UserProfile.css";
import UserEnrolledCourses from './UserEnrolledCourses';
import userImg from '../assets/images/userImg.jpg';
import UserSidebar from '../components/UserSidebar';
import { useSelector } from 'react-redux';
const UserProfile = () => {
  const data=useSelector(state=>state.user.user);
  // const userRole = data.role;
  // const userEmail= data.email;
  // Sample user information
  const [userInfo, setUserInfo] = useState({
    roleName: 'User',
    phoneNumber: '9876543210',
    email: 'jayashree@gmail.com',
    userName:'jayashree_11'
  });

  // Edit mode state
  const [editMode, setEditMode] = useState(false);

  // Handle input changes
  const handleInputChange = (field, value) => {
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [field]: value,
    }));
  };

  // Handle edit button click
  const handleEditClick = () => {
    setEditMode(true);
  };

  // Handle done button click
  const handleDoneClick = () => {
    setEditMode(false);
    // Save user information or perform other actions
  };

  return (
    <>
    <div className='userprofile'>
      <UserSidebar/>
      {/* <UserEnrolledCourses/> */}
    <div className='userProfile1'>
        <center>
      <h2>User Profile</h2>
      <div className='userImg'>
        <img src={userImg} alt="" width="100px" height="100px" style={{"border-radius":"50%"}}/>
      </div>
      <p><b>Jayashree </b></p>
          </center>
      <div>
        <p>
          <strong>Role:</strong> {userInfo.roleName}
        </p>
        <p>
          <strong>Phone Number:</strong>
          {/* <p>9876543210</p> */}
          {' '}
          {editMode ? (
            <input
            type="text"
            value={userInfo.phoneNumber}
            onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
            />
            ) : (
              userInfo.phoneNumber
              )}
        </p>
        <p>
          <strong>Email:</strong>{' '}
          {editMode ? (
            <input
            type="text"
            value={userInfo.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            />
            ) : (
              userInfo.email
              )}
          {/* <p>userInfo.email</p> */}
          {/* <p>jayashree@gmail.com</p> */}
            {/* <p>{userEmail}</p> */}
        </p>
        <p>
          <strong>Username:</strong>{' '}
          {editMode ? (
            <input
            type="text"
            value={userInfo.userName}
            onChange={(e) => handleInputChange('userName', e.target.value)}
            />
            ) : (
              userInfo.userName
              )}
        </p>
      </div>
      {/* <center>
      {editMode ? (
        <button onClick={handleDoneClick}>Done</button>
        ) : (
          <button onClick={handleEditClick}>Edit</button>
          )}
          
          </center> */}
    </div>
    </div>
    </>
  );
};

export default UserProfile;
