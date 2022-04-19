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

const Intro = () => {
  const transition = { duration: 2, type: "spring" };

  return (
    <div className="Intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hai! Nama Saya </span>
          <span>Andika Ibnu Mubarok</span>
          <span>
            Pelajar yang menguasai beberapa teknik front-end Developert , dan
            telah membuat beberapa project javaScript dengan React dan
            menggunakan php dengan laravel
          </span>
        </div>
        <button className="button i-button"> Hire Me</button>
        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Boy} alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={GlassEmo}
          alt=""
        />
        <motion.div 
        initial={{top:"-4%", left:"74%"}}
        whileInView={{left:"68%"}}
        transition={transition}
        className="floating-div"
        >
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </motion.div>

        <motion.div initial={{top:"18rem" , left:"9rem"}}
        whileInView={{left:"0rem"}}
        transition={transition}
        className="floating-div">
          <FloatingDiv image={Thumbup} txt1="Best Design" txt2="Award" />
        </motion.div>

        {/* blur div */}
        <div className="blur" style={{ background: "rgb(238,210,255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
