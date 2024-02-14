// UserAcademy.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import "../assets/css/UserAcademy.css";
import UserSidebar from '../components/UserSidebar';

const UserAcademy = () => {
  const navigate = useNavigate();
  const [academies, setAcademies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCourses, setFilteredCourses] = useState([]);
  useEffect(() => {
    // Fetch academies on component mount
    fetchAcademies();
  }, []);

  const fetchAcademies = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/academies'); // Replace with your actual backend API endpoint
      
      if (response.ok) {
        const data = await response.json();
        setAcademies(data);
        setFilteredCourses(data);
      } else {
        console.error('Failed to fetch academies');
      }
    } catch (error) {
      console.error('Error fetching academies:', error);
    }
  };

  const filteredAcademies = academies.filter((academy) =>
    academy.academyName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    const filteredCourses = academies.filter((course) =>
      course.academyName.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredCourses(filteredCourses);
  };

  const handleAcademyClick = (academy) => {
    // Navigate to the AcademyDescription page with the selected academy details
    navigate(`/academy/${academy.academyId}`);
  };

  return (
    <div className='chessAcademy'>
      <UserSidebar />
      <center>
        <h2>Chess Academy</h2>
        <div className='search-box' style={{"width":"80%"}}>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchChange}
            className="chessAcademyText"
          />
          <button className="user-search-button">
            <FontAwesomeIcon icon={faSearch} className="user-search-icon" />
          </button>
        </div>
      </center>
      <div className="academy-list">
        {filteredCourses.map((academy) => (
          <div key={academy.academyId} className="academy-box" onClick={() => handleAcademyClick(academy)}>
            <img src={academy.imageUrl} alt={academy.academyName} className="academy-img" />
            <div>
              <strong>{academy.academyName}</strong>
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
