
// AdminAcademy.jsx
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Rating } from '@mui/material';
import Modal from 'react-modal';
import AdminSidebar from '../components/AdminSidebar';
import '../assets/css/AdminAcademy.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function AdminAcademy() {
  const [academies, setAcademies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingAcademy, setEditingAcademy] = useState(null);
  const [newAcademy, setNewAcademy] = useState({
    academyName: '',
    location: '',
    rating: 0,
    contact:0,
    imageUrl: '',
  });
  const [isAddNewModalOpen, setIsAddNewModalOpen] = useState(false);

  useEffect(() => {
    // Fetch academies on component mount
    fetchAcademies();
  }, []);

  const fetchAcademies = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/academies');
      const data = await response.json();
      setAcademies(data);
    } catch (error) {
      console.error('Error fetching academies:', error);
    }
  };

  const filteredAcademies = academies.filter((academy) =>
    academy.academyName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (academy) => {
    setEditingAcademy(academy);
    setNewAcademy({
      academyName: academy.academyName,
      location: academy.location,
      rating: academy.rating,
      contact:academy.contact,
      imageUrl: academy.imageUrl,
    });
    openModal();
  };

  const handleSaveEdit = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/academies/${editingAcademy.academyId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newAcademy),
      });
  
      if (response.ok) {
        // Academy updated successfully, you may choose to handle the response
        console.log('Academy updated successfully');
        
        // Fetch updated academies after successful update
        fetchAcademies();
  
        // Reset editing state
        setEditingAcademy(null);
  
        // Close the modal
        closeModal();
      } else {
        // Academy update failed, handle the error
        console.error('Failed to update academy');
      }
    } catch (error) {
      console.error('Error updating academy:', error);
    }
  };
  

  const handleCancelEdit = () => {
    setEditingAcademy(null);
    resetNewAcademyFields();
    closeModal();
  };

  const handleAcademyClick = (academy) => {
    // Navigate to the AcademyDescription page with the selected academy details
    navigate(`/academy/${academy.academyId}`);
  };

  const handleDelete = async (academyId) => {
    // Delete the academy
    try {
      const response = await fetch(`http://localhost:8080/api/academies/${academyId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        const updatedAcademies = academies.filter((academy) => academy.academyId !== academyId);
        setAcademies(updatedAcademies);
        setEditingAcademy(null);
      } else {
        console.error('Failed to delete academy');
      }
    } catch (error) {
      console.error('Error deleting academy:', error);
    }
  };

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   const reader = new FileReader();
  //   reader.onloadend = () => {
  //     setNewAcademy((prevAcademy) => ({
  //       ...prevAcademy,
  //       imageUrl: reader.result, // Store the image URL as a string
  //     }));
  //   };
  //   if (file) {
  //     reader.readAsDataURL(file);
  //   }
  // };

  const handleAddNewAcademy = () => {
    setIsAddNewModalOpen(true);
  };

  const handleSaveNewAcademy = async () => {
    // Add a new academy
    try {
      const response = await fetch('http://localhost:8080/api/academies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newAcademy),
      });
      if (response.ok) {
        // Refresh the list of academies after adding a new one
        fetchAcademies();
        resetNewAcademyFields();
        setIsAddNewModalOpen(false);
      } else {
        console.error('Failed to add academy');
      }
    } catch (error) {
      console.error('Error adding academy:', error);
    }
  };

  const handleCancelNewAcademy = () => {
    resetNewAcademyFields();
    setIsAddNewModalOpen(false);
  };

  const resetNewAcademyFields = () => {
    setNewAcademy({
      academyName: '',
      location: '',
      contact:0,
      rating: '',
      imageUrl: '',
    });
  };

  const openModal = () => {
    // Open the modal
    setIsModalOpen(true);
  };

  const closeModal = () => {
    // Close the modal
    setIsModalOpen(false);
  };

  const redirectToViewCourses = () => {
    navigate('/view-courses');
  };

  const navigate = useNavigate();
  // Redirect to ViewCourses page when clicking the "View Courses" button
  const handleViewCourses = (academy) => {
    navigate(`/view-courses/${academy.academyId}`);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className='admin-ac-whole'>
        <AdminSidebar />
        <div className='admin-academy'>
          <center>
            <h2>Admin Academy</h2>
            <div className='academy-search'>
              <div className="search-box" style={{"width":"80%"}}>
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
                <div key={academy.academyId} className="academy-box">
                  <div className="academy-info">
                    <center>
                      <img
                        src={academy.imageUrl}
                        alt={academy.academyName}
                        className="academy-img"
                        onClick={() => handleEdit(academy)}
                      />
                    </center>
                    <div>
                      <strong>{academy.academyName}</strong>
                      <p>{academy.location}</p>
                      <p>{academy.contact}</p>
                      <div className="academy-rating">
                      <Rating className="astar-rating" value={parseFloat(academy.rating)} readOnly precision={0.5} /><br />
                      </div>
                    </div>
                  </div>
                  <div className="academy-actions">
                    <button onClick={() => handleEdit(academy)}>
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button onClick={() => handleDelete(academy.academyId)}>
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                    <div className="view-courses-button">
                    {/* <button onClick={handleViewCourses(academy)}>View Courses</button> */}
                    <Link to={`/view-courses/${academy.academyId}`}>
                    <button>View Courses</button>
                    </Link>
                </div>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="add-academy-form">
            <center>
              <button onClick={handleAddNewAcademy} className="modal-add-new">
                <FontAwesomeIcon icon={faPlus} />
                Add New Academy
              </button>
            </center>
          </div>
        </div>
      </div>

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
        <div className="edit-academy-modal">
          <h2>Edit Academy</h2>
          <label htmlFor="editName">Name:</label>
          <input
            type="text"
            id="editName"
            value={newAcademy.academyName}
            onChange={(e) => setNewAcademy({ ...newAcademy, academyName: e.target.value })}
          />
          <label htmlFor="editLocation">Location:</label>
          <input
            type="text"
            id="editLocation"
            value={newAcademy.location}
            onChange={(e) => setNewAcademy({ ...newAcademy, location: e.target.value })}
          />
          <label htmlFor="editContact">Contact:</label>
          <input
            type="text"
            id="editContact"
            value={newAcademy.contact}
            onChange={(e) => setNewAcademy({ ...newAcademy, contact: e.target.value })}
          />
          <label htmlFor="editRating">Rating:</label>
          <input
            type="number"
            id="editRating"
            value={newAcademy.rating}
            onChange={(e) => setNewAcademy({ ...newAcademy, rating: e.target.value })}
          />
          <label htmlFor="editImage">Image URL:</label>
          <input
            type="text"
            id="editImage"
            value={newAcademy.imageUrl}
            onChange={(e) => setNewAcademy({ ...newAcademy, imageUrl: e.target.value })}
          />
          <div className="edit-academy-buttons">
            <button onClick={handleSaveEdit}>Save</button>
            <button onClick={handleCancelEdit}>Cancel</button>
          </div>
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
            height: '50%',
          },
        }}
      >
        <div className="add-academy-modal">
          <h2>Add New Academy</h2>
          <label htmlFor="newName">Name:</label>
          <input
            type="text"
            id="newName"
            value={newAcademy.academyName}
            onChange={(e) => setNewAcademy({ ...newAcademy, academyName: e.target.value })}
          />
          <label htmlFor="newLocation">Location:</label>
          <input
            type="text"
            id="newLocation"
            value={newAcademy.location}
            onChange={(e) => setNewAcademy({ ...newAcademy, location: e.target.value })}
          />
          <label htmlFor="editContact">Contact:</label>
          <input
            type="text"
            id="editContact"
            value={newAcademy.contact}
            onChange={(e) => setNewAcademy({ ...newAcademy, contact: e.target.value })}
          />
          <label htmlFor="newRating">Rating:</label>
          <input
            type="number"
            id="newRating"
            value={newAcademy.rating}
            onChange={(e) => setNewAcademy({ ...newAcademy, rating: e.target.value })}
          />
          <label htmlFor="newImage">Image URL:</label>
          <input
            type="text"
            id="newImage"
            value={newAcademy.imageUrl}
            onChange={(e) => setNewAcademy({ ...newAcademy, imageUrl: e.target.value })}
          />
          {/* <label htmlFor="newImageFile">Image File:</label>
          <input
            type="file"
            id="newImageFile"
            accept="image/*"
            onChange={handleImageChange}
          /> */}
          <div className="add-academy-buttons">
            <button onClick={handleSaveNewAcademy}>Save</button>
            <button onClick={handleCancelNewAcademy}>Cancel</button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default AdminAcademy;

