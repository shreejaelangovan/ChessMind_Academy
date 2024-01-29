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
        <Route path='/profile' element={<UserProfile/>}/>
        <Route path='/academy' element={<UserAcademy/>}/>
        <Route path='/courses' element={<UserEnrolledCourses/>}/>
        <Route path="/academy/:id" element={<AcademyCourse />} />
        <Route path="/enroll-course" element={<EnrollingCourse />} />
      </Routes>
    </Router>
    </div>
    {/* <EnrollingCourse/> */}
    {/* <AcademyCourse/> */}
    {/* <Router>
      <Routes>
        <Route path="/enroll-course" element={<EnrollingCourse/>} />
        <Route path="/useracademy" element={<AcademyCourse/>} />
      </Routes>
    </Router> */}
    {/* <ChessQuiz/> */}
    {/* <TournamentPage/> */}
    </>
    
  )
}

export default App
