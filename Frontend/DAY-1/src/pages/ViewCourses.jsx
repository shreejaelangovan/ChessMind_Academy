// ViewCourses.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Container } from '@mui/material';
import Modal from 'react-modal';
import "../assets/css/ViewCourses.css"; // Make sure to import your CSS file
import AdminSidebar from '../components/AdminSidebar';

// Import necessary images or other dependencies

Modal.setAppElement('#root'); // Set the root element for the modal

const ViewCourses = () => {
  const [viewCourses, setViewCourses] = useState([
    { id: 1, name: 'Course A', instructor: 'John Doe', students: 50, duration: '4 weeks', availableDuration: '6 months', description: 'A beginner-friendly course to learn the basics of chess.' },
    { id: 2, name: 'Course B', instructor: 'Jane Smith', students: 30, duration: '6 weeks', availableDuration: '4 months', description: 'Explore advanced strategies and tactics in chess.' },
    // Add more courses as needed
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [editingCourse, setEditingCourse] = useState(null);
  const [newName, setNewName] = useState('');
  const [newInstructor, setNewInstructor] = useState('');
  const [newStudents, setNewStudents] = useState(0);
  const [newDuration, setNewDuration] = useState('');
  const [newAvailableDuration, setNewAvailableDuration] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [isAddNewModalOpen, setIsAddNewModalOpen] = useState(false);

  const filteredCourses = viewCourses.filter((course) =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (course) => {
    setEditingCourse(course);
    setNewName(course.name);
    setNewInstructor(course.instructor);
    setNewStudents(course.students);
    setNewDuration(course.duration);
    setNewAvailableDuration(course.availableDuration);
    setNewDescription(course.description);
    openModal();
  };

  const handleSaveEdit = () => {
    setViewCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === editingCourse.id
          ? { ...course, name: newName, instructor: newInstructor, students: newStudents, duration: newDuration, availableDuration: newAvailableDuration, description: newDescription }
          : course
      )
    );
    setEditingCourse(null);
    resetNewCourseFields();
    closeModal();
  };

  const handleCancelEdit = () => {
    setEditingCourse(null);
    resetNewCourseFields();
    closeModal();
  };

  const handleDelete = (courseId) => {
    setViewCourses((prevCourses) =>
      prevCourses.filter((course) => course.id !== courseId)
    );
  };

  const handleAddNewCourse = () => {
    setIsAddNewModalOpen(true);
  };

  const handleSaveNewCourse = () => {
    if (newName && newInstructor && newStudents && newDuration && newAvailableDuration && newDescription) {
      const newCourse = {
        id: viewCourses.length + 1,
        name: newName,
        instructor: newInstructor,
        students: newStudents,
        duration: newDuration,
        availableDuration: newAvailableDuration,
        description: newDescription,
      };
      setViewCourses((prevCourses) => [...prevCourses, newCourse]);
      resetNewCourseFields();
      setIsAddNewModalOpen(false);
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
        <AdminSidebar/>
      <div className='view-courses'>
        <center>
          <div className='view-course-search'>
          <h2>View Courses</h2>
            <div className="search-box">
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
        <div className="view-course-list">
  {filteredCourses.length === 0 ? (
    <div className="no-courses-found">
      <p>Oops! No courses found.</p>
    </div>
  ) : (
    filteredCourses.map((course) => (
      <div key={course.id} className="view-course-box">
        <div className="view-course-info">
          <strong>{course.name}</strong>
          <p>{`Instructor: ${course.instructor}`}</p>
          <p>{`Students: ${course.students}`}</p>
          <p>{`Duration: ${course.duration}`}</p>
          <p>{`Available Duration: ${course.availableDuration}`}</p>
          <p>{`Description: ${course.description}`}</p>
        </div>
        <div className="view-course-actions">
          <button onClick={() => handleEdit(course)}>
            <FontAwesomeIcon icon={faEdit} />
            Edit
          </button>
          <button onClick={() => handleDelete(course.id)}>
            <FontAwesomeIcon icon={faTrash} />
            Delete
          </button>
        </div>
      </div>
    ))
  )}
</div>

        <div className="view-add-course-form">
          <center>
            <button onClick={handleAddNewCourse} className="view-add-new">
              <FontAwesomeIcon icon={faPlus} />
              Add New Course
            </button>
          </center>
        </div>
      </div>

      {/* Modal for Editing */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
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
        <div>
        <div className="modal-header">
          <h2>Edit Academy</h2>
          <div className='modal-close-button'>
            <button onClick={closeModal} className="close-button">
              &times;
            </button>
          </div>
        </div>
  <div className="edit-form">
    <label htmlFor="newName">New Name:</label>
    <input
      type="text"
      id="newName"
      placeholder="Enter new name"
      value={newName}
      onChange={(e) => setNewName(e.target.value)}
    />

    <label htmlFor="newInstructor">New Instructor:</label>
    <input
      type="text"
      id="newInstructor"
      placeholder="Enter new instructor"
      value={newInstructor}
      onChange={(e) => setNewInstructor(e.target.value)}
    />

    <label htmlFor="newStudents">New Students:</label>
    <input
      type="number"
      id="newStudents"
      placeholder="Enter new number of students"
      value={newStudents}
      onChange={(e) => setNewStudents(e.target.value)}
    />

    <label htmlFor="newDuration">New Duration:</label>
    <input
      type="text"
      id="newDuration"
      placeholder="Enter new duration"
      value={newDuration}
      onChange={(e) => setNewDuration(e.target.value)}
    />

    <label htmlFor="newAvailableDuration">New Available Duration:</label>
    <input
      type="text"
      id="newAvailableDuration"
      placeholder="Enter new available duration"
      value={newAvailableDuration}
      onChange={(e) => setNewAvailableDuration(e.target.value)}
    />

    <label htmlFor="newDescription">New Description:</label>
    <textarea
      rows="3"
      cols="40"
      id="newDescription"
      placeholder="Enter new description"
      value={newDescription}
      onChange={(e) => setNewDescription(e.target.value)}
    />
  </div>

  <div className='view-course-edit'>
    <button onClick={handleSaveEdit}>Save</button>
    <button onClick={handleCancelEdit}>Cancel</button>
  </div>
</div>
      </Modal>

      {/* Modal for Adding New Course */}
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
        <div>
  <h2>Add New Course</h2>
  <div className="edit-form">
    <label htmlFor="newName">Course Name:</label>
    <input
      type="text"
      id="newName"
      placeholder="Enter course name"
      value={newName}
      onChange={(e) => setNewName(e.target.value)}
    />

    <label htmlFor="newInstructor">Instructor:</label>
    <input
      type="text"
      id="newInstructor"
      placeholder="Enter instructor name"
      value={newInstructor}
      onChange={(e) => setNewInstructor(e.target.value)}
    />

    <label htmlFor="newStudents">Students:</label>
    <input
      type="number"
      id="newStudents"
      placeholder="Enter number of students"
      value={newStudents}
      onChange={(e) => setNewStudents(e.target.value)}
    />

    <label htmlFor="newDuration">Duration:</label>
    <input
      type="text"
      id="newDuration"
      placeholder="Enter duration"
      value={newDuration}
      onChange={(e) => setNewDuration(e.target.value)}
    />

    <label htmlFor="newAvailableDuration">Available Duration:</label>
    <input
      type="text"
      id="newAvailableDuration"
      placeholder="Enter available duration"
      value={newAvailableDuration}
      onChange={(e) => setNewAvailableDuration(e.target.value)}
    />

    <label htmlFor="newDescription">Description:</label>
    <textarea
      rows="3"
      cols="40"
      id="newDescription"
      placeholder="Enter course description"
      value={newDescription}
      onChange={(e) => setNewDescription(e.target.value)}
    />
  </div>

  <div className='view-course-edit'>
    <button onClick={handleAddNewCourse}>Save</button>
    <button onClick={handleCancelNewCourse}>Cancel</button>
  </div>
</div>
      </Modal>
    </Container>
  );
};

export default ViewCourses;
