// UserEnrolledCourses.jsx
import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPlay, faTrash } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/UserEnrolledCourses.css';
import UserSidebar from '../components/UserSidebar';
import jsPDF from 'jspdf';

const UserEnrolledCourses = () => {
  const initialCoursesData = [
    { id: 1, name: 'Course A', joinedDate: '2022-01-01', endDate: '2022-02-01', rating: 4.5 },
    { id: 2, name: 'Course B', joinedDate: '2022-02-15', endDate: '2022-03-15', rating: 3.8 },
    { id: 3, name: 'Course C', joinedDate: '2022-03-10', endDate: '2022-04-10', rating: 5.0 },
    { id: 4, name: 'Course D', joinedDate: '2022-03-10', endDate: '2022-04-10', rating: 5.0 },
    { id: 5, name: 'Course E', joinedDate: '2022-03-10', endDate: '2022-04-10', rating: 5.0 },
    
  ];

  const [coursesData, setCoursesData] = useState(initialCoursesData);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = coursesData.filter((course) =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const generatePDF = (courseName, joinedDate, endDate, rating) => {
    const doc = new jsPDF();

    doc.text(`Course Name: ${courseName}`, 10, 10);
    doc.text(`Joined Date: ${joinedDate}`, 10, 20);
    doc.text(`End Date: ${endDate}`, 10, 30);
    doc.text(`Rating: ${rating}`, 10, 40);

    doc.save(`${courseName}_Syllabus.pdf`);
    alert('Syllabus downloaded');
  };

  const handleLearnNow = (courseId, courseName, joinedDate, endDate, rating) => {
    // Handle "Learn Now" action
    console.log(`Learn Now clicked for course with ID: ${courseId}`);
    generatePDF(courseName, joinedDate, endDate, rating);
  };


  const handleDelete = (courseId) => {
    // Handle "Delete" action
    const updatedCourses = coursesData.filter((course) => course.id !== courseId);
    setCoursesData(updatedCourses);
  };

  return (
    <div className='enrolledCourses'>
      <UserSidebar />
      <div className='enrolledCoursesHeader'>
        <center>
          <h2>Enrolled Courses</h2>
          <div className="search-box">
            <center>
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="enrolledCoursesText"
              />
            </center>
            <button className="search-button">
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
            </button>
          </div>
        </center>
      </div>
      <div className="enrolled-courses-list">
        {filteredCourses.map((course, index) => (
          <div key={course.id} className="enrolled-course-box">
            <div>
              <p><b>Course Name: </b>{course.name}</p>
              <p><b>Joined Date: </b>{course.joinedDate}</p>
              <p><b>End Date: </b>{course.endDate}</p>
              <Rating name="controlled" className='rating' controlled size='small' />
              <div className="course-actions">
                  <center>
                <div className='course-action-button'>

                <button onClick={() => handleLearnNow(course.id, course.name, course.joinedDate, course.endDate, course.rating)}>
                    Learn Now
                  </button>
                </div>
                  </center>
                {/* <button onClick={() => handleDelete(course.id)}> */}
                  <FontAwesomeIcon icon={faTrash} className="action-icon" onClick={() => handleDelete(course.id)}/>
                  {/* Delete */}
                {/* </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserEnrolledCourses;
