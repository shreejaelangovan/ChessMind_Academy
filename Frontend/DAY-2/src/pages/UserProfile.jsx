import React, { useState } from 'react';
import "../assets/css/UserProfile.css";
import UserEnrolledCourses from './UserEnrolledCourses';
import userImg from '../assets/images/userImg.jpg';
import UserSidebar from '../components/UserSidebar';
const UserProfile = () => {
  // Sample user information
  const [userInfo, setUserInfo] = useState({
    roleName: 'User',
    phoneNumber: '123-456-7890',
    email: 'user@example.com',
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
      <p><b>SHREEJA </b></p>
          </center>
      <div>
        <p>
          <strong>Role:</strong> {userInfo.roleName}
        </p>
        <p>
          <strong>Phone Number:</strong>{' '}
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
        </p>
      </div>
      <center>
      {editMode ? (
        <button onClick={handleDoneClick}>Done</button>
        ) : (
          <button onClick={handleEditClick}>Edit</button>
          )}
          
          </center>
    </div>
    </div>
    </>
  );
};

export default UserProfile;
