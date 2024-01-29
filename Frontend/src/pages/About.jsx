// import aboutUs from "../assets/images/aboutUs.jpg"
// import "../assets/css/About.css"
// function About(){
//     return(
//         <>
//         <body className="aboutUs">
//             <div className="middle-column">
//                 <div className="about1">
//                     <p>hai</p>
//                 </div>
//                 <div className="about2">
//                     <p>hello</p>
//                 </div>
//                 <div className="about3">
//                     <p>everyone</p>
//                 </div>

//             </div>
//         </body>
//         <h1>About</h1>
//         </>
//     )
// }
// export default About;

import React from "react";
import aboutUs from "../assets/images/aboutUs.jpg";
import "../assets/css/About.css";
import { Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function About() {
  return (
    <>
      <body className="aboutUs">
        <Navbar/>
        <div className="middle-column">
          <div className="about-box">
                <h1 style={{textAlign:'center'}}>ABOUT</h1>
                {/* <br></br> */}
                <h3>Our Mission</h3>
                <p>At CHESS MIND ACADEMY, our mission is to make the timeless game 
                    of chess accessible to everyone, regardless of age or skill 
                    level. We believe that chess is not just a game; it's a powerful 
                    tool for intellectual development, strategic thinking, and 
                    personal growth. Through our comprehensive programs and expert 
                    guidance, we aim to inspire a new generation of chess enthusiasts 
                    and champions.</p>    
                <h3>Our Team</h3>
                <p>Behind every great chess academy is a team of passionate and 
                    experienced individuals. Meet our team of skilled chess coaches, 
                    each with a deep love for the game and a commitment to helping 
                    our students succeed. Our instructors are not just teachers; they 
                    are mentors who understand the unique journey of every chess 
                    player.</p>
          </div>
        </div>
      </body>
      {/* <h1>About</h1> */}
    </>
  );
}

export default About;

{/* <h4>Question: How important it is for the child to practice regularly?</h4>
            <p>According to a school of thought, it takes roughly 20 hours per week of 
                practice to become a successful professional in any discipline. 
                It would be ideal if a child, aspiring to become a Grand Master, can 
                practice chess 2 hours a day during weekdays/schooldays and around
                4 hours on weekends. Chess being an individual sport, a player should 
                learn to think for himself/herself and take tough decisions all by 
                himself/herself. Regular individual work will help improve these 
                qualities greatly! The importance of home work in chess cannot be 
                emphasized enough.</p> */}
