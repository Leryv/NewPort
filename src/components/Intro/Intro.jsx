import React from "react";
import "./Intro.css";
/* Components */
import Github from '../../assets/img/github.png'
import Instagram from '../../assets/img/instagram.png'
import LinkedIn from '../../assets/img/linkedin.png'
import Vector1 from '../../assets/img/Vector1.png'
import Vector2 from '../../assets/img/Vector2.png'
import Boy from '../../assets/img/boy.png'
import Thumbup from '../../assets/img/thumbup.png'
import Crown from '../../assets/img/crown.png'
import GlassEmo from '../../assets/img/glassesimoji.png'
import FloatingDiv from "../FloatingDiv/FloatingDiv";


const Intro = () => {
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
            <img src={Github} alt=""/>
            <img src={LinkedIn} alt=""/>
            <img src={Instagram} alt=""/>
        </div>

      </div>
      <div className="i-right">

          <img src={Vector1} alt="" />
          <img src={Vector2} alt="" />
          <img src={Boy} alt="" />
          <img src={GlassEmo} alt=""/>
          <div style={{top: "-4%", left:"68%" }}>
              <FloatingDiv image={Crown} txt1='Web' txt2='Developer' />
          </div>
          <div style={{top: "18rem", left:"0rem"}} >
            <FloatingDiv image={Thumbup} txt1='Best Design' txt2='Award' />
          </div>
          {/* blur div */}
          <div 
          className="blur" 
          style={{background: "rgb(238,210,255)"}}>
          </div>
          <div
          className="blur"
          style={{
            background:"#C1F5FF",
            top:"17rem",
            width:"21rem",
            height:"11rem",
            left:"-9rem"
          }}>
          </div>
      </div>
    </div>
  );
};

export default Intro;
