import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faPlus, faTrash,faSearch } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal'; // Make sure to import the Modal component
import '../assets/css/AdminStudents.css';
import AdminSidebar from '../components/AdminSidebar';

const AdminStudents = () => {
  const [students, setStudents] = useState([
    { id: 1, firstName: 'John', lastName: 'Albert', course: 'Chess Strategies', academy: 'Chess Academy A' },
    { id: 2, firstName: 'Jake', lastName: 'Smith', course: 'Endgame Tactics', academy: 'Chess Academy B' },
    { id: 2, firstName: 'Jake', lastName: 'Smith', course: 'Endgame Tactics', academy: 'Chess Academy B' },
    { id: 2, firstName: 'Jake', lastName: 'Smith', course: 'Endgame Tactics', academy: 'Chess Academy B' },
    { id: 2, firstName: 'Jake', lastName: 'Smith', course: 'Endgame Tactics', academy: 'Chess Academy B' },
    { id: 2, firstName: 'Jake', lastName: 'Smith', course: 'Endgame Tactics', academy: 'Chess Academy B' },
    // Add more students as needed
  ]);

  const [editingStudent, setEditingStudent] = useState(null);
  const [newFirstName, setNewFirstName] = useState('');
  const [newLastName, setNewLastName] = useState('');
  const [newCourse, setNewCourse] = useState('');
  const [newAcademy, setNewAcademy] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const openModal = (student) => {
    setEditingStudent(student);
    setNewFirstName(student?.firstName || '');
    setNewLastName(student?.lastName || '');
    setNewCourse(student?.course || '');
    setNewAcademy(student?.academy || '');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setEditingStudent(null);
    resetNewStudentFields();
    setIsModalOpen(false);
  };

  const handleSave = () => {
    if (editingStudent) {
      setStudents((prevStudents) =>
        prevStudents.map((student) =>
          student.id === editingStudent.id
            ? { ...student, firstName: newFirstName, lastName: newLastName, course: newCourse, academy: newAcademy }
            : student
        )
      );
    } else {
      const newStudent = {
        id: students.length + 1,
        firstName: newFirstName,
        lastName: newLastName,
        course: newCourse,
        academy: newAcademy,
      };
      setStudents((prevStudents) => [...prevStudents, newStudent]);
    }
    closeModal();
  };

  const resetNewStudentFields = () => {
    setNewFirstName('');
    setNewLastName('');
    setNewCourse('');
    setNewAcademy('');
  };

  const handleDelete = (studentId) => {
    setStudents((prevStudents) => prevStudents.filter((student) => student.id !== studentId));
  };

  const filteredStudents = students.filter((student) =>
    `${student.firstName} ${student.lastName}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="admin-students">
        <AdminSidebar/>
      <h2>Admin Students</h2>
      <div className='academy-search'>
              <div className="search-box">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="admin-academy-text"
                />
                <button className="search-button">
                  <FontAwesomeIcon icon={faSearch} className="search-icon" />
                </button>
              </div>
            </div>
      <div className="students-list">
        {students.map((student) => (
          <div key={student.id} className="student-box">
            <div className='edit-form-strong'><strong>{`${student.firstName} ${student.lastName}`}</strong></div>
            <p><b>Course: </b>{student.course}</p>
            <p><b>Academy: </b>{student.academy}</p>

            <div className="academy-actions">
              <button onClick={() => openModal(student)}>
                <FontAwesomeIcon icon={faEdit} />
                Edit
              </button>
              <button onClick={() => handleDelete(student.id)}>
                <FontAwesomeIcon icon={faTrash} />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Student Details Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel={editingStudent ? "Edit Student" : "Add New Student"}
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
        <div className="modal-header">
          <h2>{editingStudent ? 'Edit Student' : 'Add New Student'}</h2>
          <div className='modal-close-button'>
            <button onClick={closeModal} className="close-button">
              &times;
            </button>
          </div>
        </div>
        <div className="modal-content">
          <div className="edit-form">
            <input
              type="text"
              placeholder="First Name"
              value={newFirstName}
              onChange={(e) => setNewFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={newLastName}
              onChange={(e) => setNewLastName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Course"
              value={newCourse}
              onChange={(e) => setNewCourse(e.target.value)}
            />
            <input
              type="text"
              placeholder="Academy"
              value={newAcademy}
              onChange={(e) => setNewAcademy(e.target.value)}
            />
          </div>
        </div>
        <div className='academyEdit'>
          <button onClick={handleSave}>Save</button>
          <button onClick={closeModal}>Cancel</button>
        </div>
      </Modal>

      <div className="admin-add-student-form">
        {/* <h3>Add New Student</h3> */}
        <button onClick={() => openModal(null)} className="add-new">
          <FontAwesomeIcon icon={faPlus} />
          Add New Student
        </button>
      </div>
    </div>
  );
};

export default AdminStudents;
