import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter, BrowserRouter as Router,Route,Routes } from 'react-router-dom'
// import Hello_World from './components/Hello_World'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import '../src/assets/css/styles.css'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
import UserDashboard from './pages/UserDashboard'
// import UserNavbar from './components/UserNavbar'
import UserProfile from './pages/UserProfile'
import UserAcademy from './pages/UserAcademy'
import UserEnrolledCourses from './pages/UserEnrolledCourses'
import UserSidebar from './components/UserSidebar'
import Signup from './pages/Signup'
import Logout from './components/Logout'
import EnrollingCourse from './pages/EnrollingCourse'
import AcademyCourse from './pages/AcademyCourse'
import ChessQuiz from './pages/ChessQuiz'
import TournamentPage from './pages/Tournament'
import AdminSidebar from './components/AdminSidebar'
import AdminAcademy from './pages/AdminAcademy'
// import AdminCourses from './pages/AdminCourses'
import AdminStudents from './pages/AdminStudents'
import ViewCourses from './pages/ViewCourses'
import AdminFeedback from './pages/AdminFeedback'
import AdminDashboard from './pages/AdminDashboard'
// import SiteSettings from './pages/SiteSetings'
import AdminLogin from './pages/AdminLogin'
import AdminAbout from './pages/AdminAbout'
const App=() =>{
  return (
    <>
    <div className='container'>
    <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signUp" element={<Signup/>}/>
      <Route path="/adminLogin" element={<AdminLogin/>}/>
        <Route path='/profile' element={<UserProfile/>}/>
        <Route path='/academy' element={<UserAcademy/>}/>
        <Route path='/courses' element={<UserEnrolledCourses/>}/>
        {/* <Route path="/academy/:id" element={<AcademyCourse />} /> */}
        <Route path="/enroll-course" element={<EnrollingCourse />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/admin/academy" element={<AdminAcademy/>} />
        <Route path="/admin/feedback" element={<AdminFeedback/>} />
        <Route path="/admin/students" element={<AdminStudents/>} />
        {/* <Route path="/view-courses" element={<ViewCourses />} /> */}
        <Route path="/admin/logout" element={<Logout/>} />
        <Route path="/admin/about" element={<AdminAbout/>} />
        {/* <Route path="/view-courses/:id" element={<ViewCourses />} /> */}
        <Route path="/view-courses/:academyId" element={<ViewCourses />} />
        <Route path="/academy/:academyId" element={<AcademyCourse />} />
        <Route path="/enroll-course/:courseId" element={<EnrollingCourse />} />
      </Routes>
    </Router>
    </div> 
    {/* <EnrollingCourse/> */}
    {/* <AcademyCourse/> */}
    {/* <Router>
      <AdminSidebar/>
      <Routes>
        <Route path="/admin/academy" element={<AdminAcademy/>} />
        <Route path="/admin/feedback" element={<AdminFeedback/>} />
        <Route path="/admin/students" element={<AdminStudents/>} />
        <Route path="/view-courses" element={<ViewCourses />} />
        <Route path="/admin/logout" element={<Logout/>} />
      </Routes>
    </Router> */}
    {/* <ViewCourses/> */}
    {/* <ChessQuiz/> */}
    {/* <TournamentPage/> */}
    {/* <AdminAbout/> */}
    {/* <Router>
      <Routes>
        <Route path="/about" element={<About/>} />
      </Routes>
    </Router> */}
    {/* <AdminAbout/> */}
    </>
    
  )
}

export default App
