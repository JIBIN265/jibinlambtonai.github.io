import React, { useState } from 'react';
import './ContactUs.css';
import {
  Alert,
  Collapse,
} from "@mui/material";
import bannerImage from './banner-contact.jpg';

function ContactUs() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      setSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    }
  };

  return (
    <div className="contact-container">
      <div className="banner">
        <img src={bannerImage} alt="Banner Image" />
      </div>
      <h1>Contact Us</h1>
      <Collapse in={success}>
        <Alert severity="success" sx={{ mb: 2 }}>
          Message Send Successfully!!
        </Alert>
      </Collapse>
      <form onSubmit={handleSubmit} className="contact-us-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name}
          onChange={handleNameChange} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email}
          onChange={handleEmailChange} required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" value={message}
          onChange={handleMessageChange} required></textarea>

        <button type="submit">Send</button>
      </form>
    </div>

  );
}

export default ContactUs;
