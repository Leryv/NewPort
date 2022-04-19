import React from "react";
import "./Works.css";

import Upwork from "../../assets/img/Upwork.png";
import Fiver from "../../assets/img/fiverr.png";
import Amazon from "../../assets/img/amazon.png";
import Shopify from "../../assets/img/Shopify.png";
import Facebook from "../../assets/img/Facebook.png";

const Works = () => {
  return (
    <div className="works" id="works">
      <div className="awesome">
        <span>Works for all These</span>
        <span>Brand & Clients</span>
        <spane>
          Lorem ispum is simpley dummy text of printing of printing Lorem
          <br />
          ispum is simpley dummy text of printing
          <br />
          ispum is simpley dummy text of printing
          <br />
          ispum is simpley dummy text of printing
        </spane>
        <button className="button s-button">Download CV</button>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* Sisi Kanan */}
      <div className="w-right">
        <div className="w-mainCircle">
          <div className="w-secCircle">
              <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
              <img src={Fiver} alt="" />
          </div>
          <div className="w-secCircle">
              <img src={Amazon} alt="" />
          </div>
          <div className="w-secCircle">
              <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
              <img src={Facebook} alt="" />
          </div>
        </div>
        {/* Background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
