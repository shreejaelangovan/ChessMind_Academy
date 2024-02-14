


import React, { useState, useEffect } from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Container } from '@mui/material';
import Modal from 'react-modal';
import "../assets/css/ViewCourses.css"; // Make sure to import your CSS file
import AdminSidebar from '../components/AdminSidebar';
import axios from 'axios';

Modal.setAppElement('#root'); // Set the root element for the modal

const ViewCourses = () => {
  const [viewCourses, setViewCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingCourse, setEditingCourse] = useState(null);
  const [newName, setNewName] = useState('');
  const [newInstructor, setNewInstructor] = useState('');
  const [newStudents, setNewStudents] = useState(0);
  const [newDuration, setNewDuration] = useState('');
  const [newAvailableDuration, setNewAvailableDuration] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [isAddNewModalOpen, setIsAddNewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const { academyId } = useParams();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchCourses = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/courses/academy/${academyId}`);
      setCourses(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching courses:', error);
      setError(error);
      setLoading(false);
    }
  };
  // const { academyId } = useParams();
// console.log('academyId:', academyId);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/courses/academy/${academyId}`);
        console.log('Response data:', response.data);
        setViewCourses(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
  
    fetchData();
  }, [academyId]);
  

  const handleEnroll = () => {
    navigate('/enroll');
  };

  const filteredCourses = Array.isArray(viewCourses)
  ? viewCourses.filter((course) => course.courseName.toLowerCase().includes(searchTerm.toLowerCase()))
  : [];

  const [editCourse, setEditCourse] = useState({
    courseId: '',
    courseName: '',
    instructor: '',
    students:0,
    duration: '',
    availableDuration: '',
    courseDesc:'',
    academyId: academyId // Initialize with the current academyId
  });
  
  const handleEdit = (course) => {
    console.log("Course Academy ID:", course.academyId);
    console.log(course)
    setEditCourse({
      ...course,
      academyId: academyId // Preserve the current academyId during editing
    });
    setIsEditModalOpen(true);
  };
  
  
  const handleSaveEdit = async () => {
    try {
      const updatedCourse = {
        ...editCourse,
        academyId: academyId // Redundant since it's already set in editCourse
      };
  
      await fetch(`http://localhost:8080/api/courses/${editCourse.courseId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedCourse)
      });
  
      // Instead of refetching all courses, update the specific course in the state
      setViewCourses(prevCourses => {
        return prevCourses.map(course =>
          course.courseId === editCourse.courseId ? updatedCourse : course
        );
      });
  
      setEditCourse(null);
      setIsEditModalOpen(false);
    } catch (error) {
      console.error('Error saving course:', error);
    }
  };
  
  const handleDelete = async (courseId) => {
    if (window.confirm('Are you sure you want to delete this course?')) {
      try {
        await axios.delete(`http://localhost:8080/api/courses/${courseId}`);
  
        // Instead of refetching all courses, filter out the deleted course from the state
        setViewCourses(prevCourses =>
          prevCourses.filter(course => course.courseId !== courseId)
        );
      } catch (error) {
        console.error('Error deleting course:', error);
      }
    }
  };
  
  
  
  const handleAddNewCourse = () => {
    setIsAddNewModalOpen(true);
  };

  const handleSaveNewCourse = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/courses/${academyId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          courseName: newName,
          instructor: newInstructor,
          students: newStudents,
          duration: newDuration,
          availableDuration: newAvailableDuration,
          courseDesc: newDescription,
        }),
      });
  
      if (response.ok) {
        // Fetch courses directly here or call the appropriate function
        const coursesResponse = await axios.get(`http://localhost:8080/api/courses/academy/${academyId}`);
        setViewCourses(coursesResponse.data);
  
        resetNewCourseFields();
        setIsAddNewModalOpen(false);
      } else {
        console.error('Failed to add course');
      }
    } catch (error) {
      console.error('Error adding course:', error);
    }
  };  

  const handleCancelNewCourse = () => {
    resetNewCourseFields();
    setIsAddNewModalOpen(false);
  };

  const resetNewCourseFields = () => {
    setNewName('');
    setNewInstructor('');
    setNewStudents(0);
    setNewDuration('');
    setNewAvailableDuration('');
    setNewDescription('');
  };

  const navigate = useNavigate();

  const redirectToAdminAcademy = () => {
    navigate('/admin-academy');
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container className='view-courses-whole'>
      <AdminSidebar />
      <div className='view-courses'>
        <center>
           <div className='view-course-search'>
           <h2>View Courses</h2>
             <div className="search-box" style={{"width":"60%"}}>
               <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="enrolledCoursesText"
              />
              <button className="search-button">
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
              </button>
            </div>
          </div>
        </center>
        <div className="add-new-btn">
        <center>
          <button onClick={handleAddNewCourse} className="modal-add-new">
            <FontAwesomeIcon icon={faPlus} />
            Add New Course
          </button>
        </center>
        </div>

        <div className='view-course-list'>
  {Array.isArray(filteredCourses) && filteredCourses.length > 0 ? (
    filteredCourses.map((course) => (
      <div key={course.courseId} className='view-course-box'>
        
        <h3>{course.courseName}</h3>
        <p>Instructor: {course.instructor}</p>
        <p>Students: {course.students}</p>
        <p>Duration: {course.duration}</p>
        <p>Available Duration: {course.availableDuration}</p>
        <p>Description: {course.courseDesc}</p>
        <div className="view-course-actions">
           <button onClick={() => handleEdit(course)}>
             <FontAwesomeIcon icon={faEdit} />
             Edit
           </button>
           <button onClick={() => handleDelete(course.courseId)}>
             <FontAwesomeIcon icon={faTrash} />
             Delete
           </button>
         </div>
      </div>
    ))
  ) : (
    <p>No courses available.</p>
  )}
</div>


        <Modal
        isOpen={isEditModalOpen}
        onRequestClose={() => setIsEditModalOpen(false)}
        contentLabel="Edit Course"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1000,
          },
          content: {
            width: '50%',
            margin: 'auto',
            borderRadius: '8px',
          },
        }}
      >
          <h2>Edit Course</h2>
          <div className="edit-course-form">
            <label>Course Name:</label>
            <input
              type="text"
              value={editCourse ? editCourse.courseName : ''}
              onChange={(e) => setEditCourse({ ...editCourse, courseName: e.target.value })}
            />

            <label>Instructor:</label>
            <input
              type="text"
              value={editCourse ? editCourse.instructor : ''}
              onChange={(e) => setEditCourse({ ...editCourse, instructor: e.target.value })}
            />

            <label>Students:</label>
            <input
              type="number"
              value={editCourse ? editCourse.students : ''}
              onChange={(e) => setEditCourse({ ...editCourse, students: e.target.value })}
            />

            <label>Duration:</label>
            <input
              type="text"
              value={editCourse ? editCourse.duration : ''}
              onChange={(e) => setEditCourse({ ...editCourse, duration: e.target.value })}
            />

            <label>Available Duration:</label>
            <input
              type="text"
              value={editCourse ? editCourse.availableDuration : ''}
              onChange={(e) => setEditCourse({ ...editCourse, availableDuration: e.target.value })}
            />

            <label>Description:</label>
            <textarea
              value={editCourse ? editCourse.courseDesc : ''}
              onChange={(e) => setEditCourse({ ...editCourse, courseDesc: e.target.value })}
            />

            <div className="edit-course-buttons">
              <button onClick={handleSaveEdit}>Save</button>
              <button onClick={()=>setIsEditModalOpen(false)}>Cancel</button>
            </div>
          </div>
        </Modal>

              <Modal
        isOpen={isAddNewModalOpen}
        onRequestClose={handleCancelNewCourse}
        contentLabel="Add New Course"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1000,
          },
          content: {
            width: '50%',
            margin: 'auto',
            borderRadius: '8px',
            height:'70%',
          },
        }}
      >
          <h2>Add New Course</h2>
          <div className="add-new-course-form">
          <label>Course Name:</label>
<input
  type="text"
  value={newName}
  onChange={(e) => setNewName(e.target.value)}
/>

<label>Instructor:</label>
<input
  type="text"
  value={newInstructor}
  onChange={(e) => setNewInstructor(e.target.value)}
/>

<label>Students:</label>
<input
  type="number"
  value={newStudents}
  onChange={(e) => setNewStudents(e.target.value)}
/>

<label>Duration:</label>
<input
  type="text"
  value={newDuration}
  onChange={(e) => setNewDuration(e.target.value)}
/>

<label>Available Duration:</label>
<input
  type="text"
  value={newAvailableDuration}
  onChange={(e) => setNewAvailableDuration(e.target.value)}
/>

<label>Description:</label>
<textarea
  value={newDescription}
  onChange={(e) => setNewDescription(e.target.value)}
/>

            <div className="add-new-course-buttons">
              <button onClick={handleSaveNewCourse}>Save</button>
              <button onClick={handleCancelNewCourse}>Cancel</button>
            </div>
          </div>
        </Modal>
      </div>
    </Container>
  );
};

export default ViewCourses;
