// // SiteSettings.js
// import React, { useState, useEffect } from 'react';

// const SiteSettings = () => {
//   const [homeContent, setHomeContent] = useState('');
//   const [aboutContent, setAboutContent] = useState('');
//   const [contactContent, setContactContent] = useState('');

//   useEffect(() => {
//     // Mock API request to fetch initial content
//     fetch('http://localhost:3001/site-settings')
//       .then(response => response.json())
//       .then(data => {
//         setHomeContent(data.homeContent);
//         setAboutContent(data.aboutContent);
//         setContactContent(data.contactContent);
//       })
//       .catch(error => console.error('Error fetching site settings:', error));
//   }, []);

//   const handleSave = async () => {
//     try {
//       // Mock API request to save updated content
//       await fetch('http://localhost:3001/site-settings', {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           homeContent,
//           aboutContent,
//           contactContent,
//         }),
//       });
//       alert('Site settings saved successfully!');
//     } catch (error) {
//       console.error('Error saving site settings:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Site Settings</h2>
//       <div>
//         <h3>Home Content</h3>
//         <textarea value={homeContent} onChange={(e) => setHomeContent(e.target.value)} />
//       </div>
//       <div>
//         <h3>About Content</h3>
//         <textarea value={aboutContent} onChange={(e) => setAboutContent(e.target.value)} />
//       </div>
//       <div>
//         <h3>Contact Content</h3>
//         <textarea value={contactContent} onChange={(e) => setContactContent(e.target.value)} />
//       </div>
//       <button onClick={handleSave}>Save</button>
//     </div>
//   );
// };

// export default SiteSettings;
import React from 'react'

function SiteSetings() {
  return (
    <div>SiteSetings</div>
  )
}

export default SiteSetings

