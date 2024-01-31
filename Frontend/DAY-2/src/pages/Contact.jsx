import React from 'react';
import "../assets/css/Contact.css"
import Navbar from '../components/Navbar';
function Contact() {
  return (
    <>
    <div className="contact">
    <Navbar/>
      <div className="contact-content">
        <h1>Contact Chess Mind Academy</h1>
        <p>If you have any questions or inquiries, feel free to reach out to us. We are here to help you!</p>
        
        <div className="contact-details">
          <h2>Contact Information:</h2>
          <p>Email: info@chessmindacademy.com</p>
          <p>Phone: +91 9876543210</p>
        </div>

        <div className="contact-form">
          <h2>Send us a Message:</h2>
          <form>
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Your Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit" className='buttonType'>Submit</button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}

export default Contact;
