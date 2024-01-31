// UserAcademy.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import chessAcademyImage1 from '../assets/images/chessAcademy1.jpg';
import chessAcademyImage2 from '../assets/images/chessAcademy2.jpg';
import chessAcademyImage3 from '../assets/images/chessAcademy3.jpg';
import chessAcademyImage4 from '../assets/images/chessAcademy4.jpg';
import chessAcademyImage5 from '../assets/images/chessAcademy5.jpg';
import chessAcademyImage6 from '../assets/images/chessAcademy6.jpg';
import chessAcademyImage7 from '../assets/images/chessAcademy7.jpg';
import Rating from '@mui/material/Rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import "../assets/css/UserAcademy.css";
import UserSidebar from '../components/UserSidebar';
const UserAcademy = () => {
  const navigate = useNavigate();

  const academiesData = [
    { id: 1, name: 'Chess Academy A', location: 'City A', image: chessAcademyImage1 },
    { id: 2, name: 'Chess Academy B', location: 'City B', image: chessAcademyImage2 },
    { id: 3, name: 'Chess Academy C', location: 'City C', image: chessAcademyImage3 },
    { id: 4, name: 'Chess Academy D', location: 'City D', image: chessAcademyImage4 },
    { id: 5, name: 'Chess Academy E', location: 'City E', image: chessAcademyImage6 },
    { id: 6, name: 'Chess Academy F', location: 'City F', image: chessAcademyImage7 },
    { id: 7, name: 'Chess Academy G', location: 'City G', image: chessAcademyImage5 },
    
    // Add more academies as needed
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const filteredAcademies = academiesData.filter((academy) =>
    academy.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAcademyClick = (academy) => {
    // Navigate to the AcademyDescription page with the selected academy details
    navigate(`/academy/${academy.id}`);
  };

  return (
    <div className='chessAcademy'>
      <UserSidebar/>
        <center>    
          <h2>Chess Academy</h2>
      <div className='search-box'>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="chessAcademyText"
          />
          <button className="user-search-button">
              <FontAwesomeIcon icon={faSearch} className="user-search-icon" />
            </button>
          {/* &nbsp */}

      </div>
        </center>
      <div className="academy-list">
        {filteredAcademies.map((academy) => (
          <div key={academy.id} className="academy-box" onClick={() => handleAcademyClick(academy)}>
            <img src={academy.image} alt={academy.name} className="academy-img"/>
            <div>
              <strong>{academy.name}</strong>
              <p>{academy.location}</p>
              <Rating name="read-only" value={2} readOnly />
            </div>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default UserAcademy;
