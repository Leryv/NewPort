import React from "react";
import "./Services.css";
import Card from "../Cards/Card";

// Assets
import HeartEmoji from "../../assets/img/heartemoji.png";
import Glasses from "../../assets/img/glasses.png";
import Humble from "../../assets/img/humble.png";
import Resume from "./resume.pdf"

const Services = () => {
  return (
    <div className="services" id="services">
      {/* Sisi Kiri */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <spane>
          Lorem ispum is simpley dummy text of printing of printing Lorem
          <br />
          ispum is simpley dummy text of printing
        </spane>
        <a href={Resume} download>
        <button className="button s-button">Download CV</button>
        </a>
        
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* Sisi Kanan (Tempat Card) */}
      <div className="cards">
        <div style={{ left: "14rem" }}> {/* Yang Menentukan Posisi Card */}
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figme, Sketch, Photoshop,Adobe, Adobe xd"}
          />
        </div>

        {/* Second Card */}
        <div style={{ top: "12rem", left: "-4rem" }}> {/* Yang Menentukan Posisi Card */}
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Laravel, Html, Css, JavaSript, React, Xampp"}
          />
        </div>

        {/* Third Card */}
        <div style={{ top: "19rem", left: "12rem" }}> {/* Yang Menentukan Posisi Card */}
          <Card
            emoji={Humble}
            heading={"Gamer"}
            detail={"Mobile Legend, Pes, Fifa, Dota"}
          />
        </div>
        <div className="blur s-blur2" style={{background: "var(--purple)"}}>
        </div>
      </div>
    </div>
  );
};

export default Services;
