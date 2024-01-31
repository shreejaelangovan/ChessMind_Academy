// AcademyCourse.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/AcademyCourse.css'
const AcademyCourse = () => {
  // Replace this with actual course data
  const courses = [
    {
      id: 1,
      name: 'Introduction to Chess',
      instructor: 'John Doe',
      students: 50,
      duration: '4 weeks',
      availableDuration: '6 months',
      description: 'A beginner-friendly course to learn the basics of chess.',
    },
    {
      id: 2,
      name: 'Advanced Strategies',
      instructor: 'Jane Smith',
      students: 30,
      duration: '6 weeks',
      availableDuration: '4 months',
      description: 'Explore advanced strategies and tactics in chess.',
    },
    {
      id: 3,
      name: 'Endgame Mastery',
      instructor: 'Bob Johnson',
      students: 25,
      duration: '8 weeks',
      availableDuration: '3 months',
      description: 'Master the endgame phase of chess games.',
    },
    // Add more courses as needed
  ];

  // const handleEnroll = (courseId) => {
  //   // Add logic to handle enrollment for the courseId
  //   console.log(`Enroll Now for course with ID: ${courseId}`);
  // };
  const navigate = useNavigate(); // Initialize navigate

  // ... other code

  const handleEnroll = () => {
    // Navigate to the EnrollCourse page
    navigate('/enroll-course');
  };

  return (
    <div className="academy-course">
      <h2>Academy Courses</h2>
      <div className="course-list">
        {courses.map((course) => (
          <div key={course.id} className="course-box">
            <h3><center>{course.name}</center></h3>
            <p><b>Instructor: </b>{course.instructor}</p>
            <p><b>Students: </b>{course.students}</p>
            <p><b>Duration: </b>{course.duration}</p>
            <p><b>Available Duration: </b>{course.availableDuration}</p>
            <p><b>Description: </b>{course.description}</p>
            {/* <Link to="/enroll-course"> */}
            <center>
            <button onClick={handleEnroll}>Enroll Course</button>
            </center>
            {/* </Link> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcademyCourse;
