import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../assets/css/AdminAbout.css"; // Create a new CSS file for AdminAbout styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faSave, faTimes } from "@fortawesome/free-solid-svg-icons";

const AdminAbout = () => {
  const [aboutContent, setAboutContent] = useState({
    mission: "At CHESS MIND ACADEMY, our mission is to make the timeless game of chess accessible to everyone, regardless of age or skill level. We believe that chess is not just a game; it's a powerful tool for intellectual development, strategic thinking, and personal growth. Through our comprehensive programs and expert guidance, we aim to inspire a new generation of chess enthusiasts and champions.",
    team: "Behind every great chess academy is a team of passionate and experienced individuals. Meet our team of skilled chess coaches, each with a deep love for the game and a commitment to helping our students succeed. Our instructors are not just teachers; they are mentors who understand the unique journey of every chess player.",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [newMission, setNewMission] = useState(aboutContent.mission);
  const [newTeam, setNewTeam] = useState(aboutContent.team);

  useEffect(() => {
    // Fetch or set initial content from your API or storage
    // For simplicity, we'll use local storage
    const storedAboutContent = localStorage.getItem("adminAboutContent");
    if (storedAboutContent) {
      setAboutContent(JSON.parse(storedAboutContent));
    }
  }, []);

  const handleEdit = () => {
    setNewMission(aboutContent.mission);
    setNewTeam(aboutContent.team);
    setIsEditing(true);
  };

  const handleSave = () => {
    setAboutContent({
      mission: newMission,
      team: newTeam,
    });

    setIsEditing(false);

    // Save to your API or storage (for simplicity, we'll use local storage)
    localStorage.setItem("adminAboutContent", JSON.stringify({ mission: newMission, team: newTeam }));
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <>
      <body className="aboutUs">
        {/* <Navbar /> */}
        <div className="middle-column">
          <div className="about-box">
            <h1 style={{ textAlign: "center" }}>ABOUT</h1>
            {isEditing ? (
              <>
                <div className="edit-form">
                    <h2>Our Mission</h2>
                  <textarea 
                    rows='5'
                    cols='70'
                    placeholder="Mission"
                    value={newMission}
                    className='text1'
                    onChange={(e) => setNewMission(e.target.value)}
                  />
                  <div className="text2">
                  <h2>Our Team</h2>
                  <textarea
                    rows='5'
                    cols='70'
                    placeholder="Team"
                    value={newTeam}
                    onChange={(e) => setNewTeam(e.target.value)}
                    />
                    </div>
                </div>
                <div className="admin-edit">
                  <button onClick={handleSave}>
                    <FontAwesomeIcon icon={faSave} />
                    Save
                  </button>
                  <button onClick={handleCancel}>
                    <FontAwesomeIcon icon={faTimes} />
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <h3>Mission</h3>
                <p>{aboutContent.mission}</p>
                <h3>Team</h3>
                <p>{aboutContent.team}</p>
                <div className="admin-edit-button">
                  <button onClick={handleEdit}>
                    <FontAwesomeIcon icon={faEdit} />
                    Edit
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </body>
    </>
  );
};

export default AdminAbout;
