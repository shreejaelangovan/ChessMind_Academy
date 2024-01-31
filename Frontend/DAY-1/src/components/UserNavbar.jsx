// // UserNavbar.js

// import React, { useState } from 'react';
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
// import { Link } from 'react-router-dom';
// import { SidebarData } from './UserSidebar';
// import '../assets/css/UserNavbar.css';
// import { IconContext } from 'react-icons';

// function UserNavbar() {
//   const [sidebar, setSidebar] = useState(false);

//   const showSidebar = () => setSidebar(!sidebar);

//   return (
//     <>
//       <div className='n2'>
//         <IconContext.Provider value={{ color: '#fff' }}>
//           <div className='user-navbar'>
//             <Link to='#' className='user-menu-bars'>
//               <FaIcons.FaBars onClick={showSidebar} />
//             </Link>
//             <h1>DASHBOARD</h1>
//           </div>
//           <nav className={sidebar ? 'user-nav-menu active' : 'user-nav-menu'}>
//             <div className='user-nav-menu-items' onClick={showSidebar}>
//               {SidebarData.map((item, index) => (
//                 <Link key={index} to={item.path} className={item.cName}>
//                   {item.icon}
//                   <span>{item.title}</span>
//                 </Link>
//               ))}
//             </div>
//           </nav>
//         </IconContext.Provider>
//       </div>
//     </>
//   );
// }

// export default UserNavbar;

import React from 'react'

function UserNavbar() {
  return (
    <div>UserNavbar</div>
  )
}

export default UserNavbar

