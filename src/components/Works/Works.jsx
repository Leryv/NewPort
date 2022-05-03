import React from "react";
import "./Works.css";

import Upwork from "../../assets/img/Upwork.png";
import Fiver from "../../assets/img/fiverr.png";
import Amazon from "../../assets/img/amazon.png";
import Shopify from "../../assets/img/Shopify.png";
import Facebook from "../../assets/img/Facebook.png";

import Enesis from "../../assets/logo/Untitled design aja.png";
import Pln from "../../assets/logo/Logo_PLN.png";
import Taspen from "../../assets/logo/kisspng-pt-taspen-indonesia-logo-business-id-5ac7f78b70f6a4.1538982615230544754627.png";
import Chemico from "../../assets/logo/Untitled design n.png";
import PG from "../../assets/logo/PG2.png";

const Works = () => {
  return (
    <div className="works" id="works">
      {/* Sisi Kiri */}
      <div className="w-left">
        <div className="awesome">
          <span>Kerja Sama</span>
          <span>Brand & Clients</span>
          <span>
            Kami Pernah Bekerja dengan beberapa perusahaan ternama seperti
            perusahaan berikut
          </span>
          {/* <button className="button s-button">Download CV</button> */}
          <div className="blur s-blur1" style={{ background: "#e7d1f5" }}></div>
        </div>
      </div>
      {/* Sisi Kanan */}
      <div className="w-right">
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={Pln} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Taspen} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Enesis} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Chemico} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={PG} alt="" />
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
