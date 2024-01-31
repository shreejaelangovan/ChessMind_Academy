// AcademyDescription.jsx
import React from 'react';

const AcademyDescription = ({ academy }) => {
  return (
    <div className="academy-description">
      <h2>{academy.name}</h2>
      <p><strong>Location:</strong> {academy.location}</p>
      {/* Add more details about the academy */}
      <p><strong>Types of Courses:</strong> ...</p>
      <p><strong>Description:</strong> ...</p>
    </div>
  );
};

export default AcademyDescription;
