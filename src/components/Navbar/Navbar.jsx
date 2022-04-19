import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import Toogle from "../Toogle/Toogle";
const Navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* Sisi Kiri */}
      <div className="n-left">
        <div className="n-name"> Andika </div>
        <Toogle />
      </div>
      {/* Sisi Kanan */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Service
              </Link>
            </li>
            <li>
              <Link to="experience" spy={true} smooth={true}>
                Pengalaman
              </Link>
            </li>
            <li>
              <Link to="portofolio" spy={true} smooth={true}>
                Portofolio
              </Link>
            </li>
            <li>
            <Link to="testimonial" spy={true} smooth={true}>
            Testimonial
              </Link></li>
          </ul>
        </div>
        <button className="button n-button">Contact Us</button>
      </div>
    </div>
  );
};

export default Navbar;
