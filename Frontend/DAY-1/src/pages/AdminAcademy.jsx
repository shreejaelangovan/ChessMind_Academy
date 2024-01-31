// AdminAcademy.jsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Container, Rating } from '@mui/material';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import '../assets/css/AdminAcademy.css';

// Replace these with your actual images
import chessAcademyImage1 from '../assets/images/chessAcademy1.jpg';
import chessAcademyImage2 from '../assets/images/chessAcademy2.jpg';
import chessAcademyImage3 from '../assets/images/chessAcademy3.jpg';
import chessAcademyImage4 from '../assets/images/chessAcademy4.jpg';
import chessAcademyImage5 from '../assets/images/chessAcademy5.jpg';
import chessAcademyImage6 from '../assets/images/chessAcademy6.jpg';
import chessAcademyImage7 from '../assets/images/chessAcademy7.jpg';
import AdminSidebar from '../components/AdminSidebar';

const AdminAcademy = () => {
  const [academies, setAcademies] = useState([
    { id: 1, name: 'Chess Academy A', location: 'City A', image: chessAcademyImage1, rating: 4 },
    { id: 2, name: 'Chess Academy B', location: 'City B', image: chessAcademyImage2, rating: 3 },
    { id: 3, name: 'Chess Academy C', location: 'City C', image: chessAcademyImage3, rating: 5 },
    { id: 4, name: 'Chess Academy D', location: 'City D', image: chessAcademyImage4, rating: 2 },
    { id: 5, name: 'Chess Academy E', location: 'City E', image: chessAcademyImage6, rating: 4 },
    { id: 6, name: 'Chess Academy F', location: 'City F', image: chessAcademyImage7, rating: 3 },
    { id: 7, name: 'Chess Academy G', location: 'City G', image: chessAcademyImage5, rating: 4 },
    // Add more academies as needed
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [editingAcademy, setEditingAcademy] = useState(null);
  const [newName, setNewName] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [newRating, setNewRating] = useState(0);
  const [newImage, setNewImage] = useState('');
  const [isAddNewModalOpen, setIsAddNewModalOpen] = useState(false);

  const filteredAcademies = academies.filter((academy) =>
    academy.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (academy) => {
    setEditingAcademy(academy);
    setNewName(academy.name);
    setNewLocation(academy.location);
    setNewRating(academy.rating);
    setNewImage(academy.image);
    openModal();
  };

  const handleSaveEdit = () => {
    setAcademies((prevAcademies) =>
      prevAcademies.map((academy) =>
        academy.id === editingAcademy.id
          ? { ...academy, name: newName, location: newLocation, rating: newRating, image: newImage }
          : academy
      )
    );
    setEditingAcademy(null);
    resetNewAcademyFields();
    closeModal();
  };

  const handleCancelEdit = () => {
    setEditingAcademy(null);
    resetNewAcademyFields();
    closeModal();
  };

  const handleDelete = (academyId) => {
    setAcademies((prevAcademies) =>
      prevAcademies.filter((academy) => academy.id !== academyId)
    );
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setNewImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleAddNewAcademy = () => {
    setIsAddNewModalOpen(true);
  };

  const handleSaveNewAcademy = () => {
    if (newName && newLocation && newRating !== null && newImage) {
      const newAcademy = {
        id: academies.length + 1,
        name: newName,
        location: newLocation,
        rating: newRating,
        image: newImage,
      };
      setAcademies((prevAcademies) => [...prevAcademies, newAcademy]);
      resetNewAcademyFields();
      setIsAddNewModalOpen(false);
    }
  };

  const handleCancelNewAcademy = () => {
    resetNewAcademyFields();
    setIsAddNewModalOpen(false);
  };

  const resetNewAcademyFields = () => {
    setNewName('');
    setNewLocation('');
    setNewRating(0);
    setNewImage('');
  };

  const navigate = useNavigate();

  // Redirect to ViewCourses page
  const redirectToViewCourses = () => {
    navigate('/view-courses');
  };

  // Redirect to ViewCourses page when clicking the "View Courses" button
  const handleViewCourses = () => {
    navigate('/view-courses');
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Container className='admin-ac-whole'>
      <AdminSidebar/>
        <div className='admin-academy'>
          <center>
            <h2>Admin Academy</h2>
            <div className='academy-search'>
              <div className="search-box">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="admin-academy-text"
                />
                <button className="search-button">
                  <FontAwesomeIcon icon={faSearch} className="search-icon" />
                </button>
              </div>
            </div>
          </center>
          <div className="academy-list">
            {filteredAcademies.length === 0 ? (
              <div className="no-academy-found-message">
                <p>Oops! No academy found.</p>
              </div>
            ) : (
            filteredAcademies.map((academy) => (
                // <div className='search-box'>
              <div key={academy.id} className="academy-box">
                <div className="academy-info">
                  <center>
                    <img
                      src={academy.image}
                      alt={academy.name}
                      className="academy-img"
                      onClick={() => handleEdit(academy)}
                    />
                  </center>
                  <div>
                    <strong>{academy.name}</strong>
                    <p>{academy.location}</p>
                    <div className="academy-rating">
                        <Rating name="read-only" value={academy.rating} readOnly className="star-icon" />
                    </div>
                </div>
                </div>

                <div className="academy-actions">
                  <button onClick={() => handleEdit(academy)}>
                    <FontAwesomeIcon icon={faEdit} />
                    {/* Edit */}
                  </button>
                  <button onClick={() => handleDelete(academy.id)}>
                    <FontAwesomeIcon icon={faTrash} />
                    {/* Delete */}
                  </button>
                <div className="view-courses-button">
                    <button onClick={handleViewCourses}>View Courses</button>
                </div>
                </div>
              </div>
            )))}
          </div>
          <div className="add-academy-form">
            {/* <h3>Add New Academy</h3> */}
            <center>
            <button onClick={handleAddNewAcademy} className="modal-add-new">
              <FontAwesomeIcon icon={faPlus} />
              Add New Academy
            </button>
            </center>
          </div>
        </div>
      </Container>

      {/* Modal for Editing */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Edit Academy"
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
          <h2>Edit Academy</h2>
          <div className='modal-close-button'>
            <button onClick={closeModal} className="close-button">
              &times;
            </button>
          </div>
        </div>
        <div className="modal-content">
          {editingAcademy?.id && (
            <div className="edit-form">
              <input
                type="text"
                placeholder="New Name"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
              <input
                type="text"
                placeholder="New Location"
                value={newLocation}
                onChange={(e) => setNewLocation(e.target.value)}
              />
              <Rating
                name="newRating"
                value={newRating}
                onChange={(event, newValue) => setNewRating(newValue)}
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
          )}
        </div>
        <div className='academyEdit'>
          <button onClick={handleSaveEdit}>Save</button>
          <button onClick={handleCancelEdit}>Cancel</button>
        </div>
      </Modal>

      {/* Modal for Adding New Academy */}
      <Modal
        isOpen={isAddNewModalOpen}
        onRequestClose={handleCancelNewAcademy}
        contentLabel="Add New Academy"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1000,
          },
          content: {
            width: '50%',
            margin: 'auto',
            borderRadius: '8px',
            height:'50%',
          },
        }}
      >
        <div className="modal-header">
          <h2>Add New Academy</h2>
          <div className='modal-close-button'>
            <button onClick={handleCancelNewAcademy} className="close-button">
              &times;
            </button>
          </div>
        </div>
        <div className="modal-content">
          <div className="edit-form">
            <input
              type="text"
              placeholder="Name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Location"
              value={newLocation}
              onChange={(e) => setNewLocation(e.target.value)}
            />
            <Rating
              name="newRating"
              value={newRating}
              onChange={(event, newValue) => setNewRating(newValue)}
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
        </div>
        <div className='academyEdit'>
          <button onClick={handleSaveNewAcademy}>Save</button>
          <button onClick={handleCancelNewAcademy}>Cancel</button>
        </div>
      </Modal>
    </>
  );
};

export default AdminAcademy;
