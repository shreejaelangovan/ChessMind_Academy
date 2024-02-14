// AcademyCourse.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/AcademyCourse.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import UserSidebar from '../components/UserSidebar';
const AcademyCourse = () => {
  
  // const navigate = useNavigate(); // Initialize navigate
  const { academyId } = useParams();
  const [error, setError] = useState(null);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewCourses, setViewCourses] = useState([]);

  useEffect(() => {
    console.log('Academy ID:', academyId);  // Add this line for debugging
  
    const fetchCourses = async () => {
      try {
        // if (academyId) {
          const response = await axios.get(`http://localhost:8080/api/courses/academy/${academyId}`);
          setCourses(response.data);
        // }
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };
  
    fetchCourses();
  }, []);

  return (
    <div className="academy-course">
      <UserSidebar/>
      <h2>Academy Courses</h2>
      <div className="course-list">
      {/* {Array.isArray(filteredCourses) && filteredCourses.length > 0 ? (
    filteredCourses.map((course) => ( */}
    {courses.map(course =>(
      <div key={course.courseId} className='view-course-box'>
        
        <h3>{course.courseName}</h3>
        <p>Instructor: {course.instructor}</p>
        <p>Students: {course.students}</p>
        <p>Duration: {course.duration}</p>
        <p>Available Duration: {course.availableDuration}</p>
        <p>Description: {course.courseDesc}</p>
        <center>
        <a href={`/enroll-course/${course.courseId}`}><button>Enroll Course</button></a>
            </center>
      </div>
    ))}
      </div>
    </div>
  );
};

export default AcademyCourse;



{/* <a href={`/enroll-course/${courseId}`}> */}



