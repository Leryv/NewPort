import React from "react";
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name"> Andika </div>
        <span>Toogle</span>
      </div>
      <div className="n-right">
        <div className="n-list">
            <ul style={{ listStyleType : "none"}}>
                <li>Home</li>
                <li>Service</li>
                <li>Pengalaman</li>
                <li>Portofolio</li>
                <li>Testimonial</li>
            </ul>
        </div>
        <button className="button n-button">
            Contact Us
        </button>
      </div>
    </div>
  );
};

export default Navbar;
