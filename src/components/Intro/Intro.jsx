import React from "react";
import "./Intro.css";
/* Components */
import Github from "../../assets/img/github.png";
import Instagram from "../../assets/img/instagram.png";
import LinkedIn from "../../assets/img/linkedin.png";
import Vector1 from "../../assets/img/Vector1.png";
import Vector2 from "../../assets/img/Vector2.png";
import Boy from "../../assets/img/boy.png";
import Thumbup from "../../assets/img/thumbup.png";
import Crown from "../../assets/img/crown.png";
import GlassEmo from "../../assets/img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { motion } from "framer-motion";
import loginusa from "../../assets/logo/Facebook Post 940x788 px (4).png"

const Intro = () => {
  const transition = { duration: 2, type: "spring" };

  return (
    <div className="Intro">

      {/* Sisi Kiri */}
      <div className="i-left">
        <div className="i-name">
          <span>Loginusa </span>
          <span>Software House</span>
          <span>
            Kemampuan dan pengalaman Loginusa Automation
            mendevelop/mengintegrasikan multi Protocol, di harapkan dapat sesuai
            dengan kebutuhan perusahaan yang ingin mengintegrasikan dengan
            eksisting System dengan System Terbaru.
          </span>
        </div>
        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>

      {/* Sisi Kanan */}
      <div className="i-right">
        <img src={loginusa} alt="" />

        {/* Emoji Kacamata */}
        <motion.img
          initial={{ left: "-25%" }}
          whileInView={{ left: "-10%" }}
          transition={transition}
          src={GlassEmo}
          className="floating-div"
          alt=""
        />

        {/* Card Web Developer */}
        <motion.div
          initial={{ top:"-4%",left: "70%" }}
          whileInView={{ top:"-4%",left: "65%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </motion.div>

        {/* Card Best Design Award */}
        <motion.div
          initial={{  top:"54%",left: "-25%" }}
          whileInView={{ top:"54%", left: "5%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatingDiv image={Thumbup} txt1="Best Design" txt2="Award" />
        </motion.div>

        {/* Blur div */}
        <div className="blur1" style={{ background: "rgb(238 210 255)" }} ></div>
        <div
          className="blur2"
          style={{
            background: "#C1F5FF",
            top: "12rem",
            width: "21rem",
            height: "11rem",
            left: "-5rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
