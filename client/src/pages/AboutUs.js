import React from 'react';
import './AboutUs.css'; // import the stylesheet for the page
import bannerImage from './ourboard_2022.jpg';

function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="banner">
        <img src={bannerImage} alt="Banner Image" />
      </div>
      <div></div>
      <div></div>
      <div></div>
      <h1>About Us</h1>
      <p>At our Lambton AI, we believe that the future of technology lies in the power of artificial intelligence. Our team of experts is dedicated to developing the most advanced AI technologies to help our clients achieve their goals.</p>
      <p>Whether you're looking for a powerful natural language processing tool or an advanced image recognition system, our AI generator has the tools you need to succeed. Contact us today to learn more about how we can help your business thrive.</p>
    </div>
  );
}

export default AboutUs;