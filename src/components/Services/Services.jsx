import React from "react";
import "./Services.css";
import Card from "../Cards/Card";

// Assets
import HeartEmoji from "../../assets/img/heartemoji.png";
import Glasses from "../../assets/img/glasses.png";
import Humble from "../../assets/img/humble.png";
import Resume from "./resume.pdf";

import { motion } from "framer-motion";

const Services = () => {
  const transCard = { duration: 0.7, type: "spring" };
  return (
    <div className="services" id="services">
      {/* Sisi Kiri */}
      <div className="awesome">
        <span>Layanan Kami</span>
        <span>Our services</span>
        <span>
          Kemampuan Loginusa dalam bidang Big Data Analytics & Machine Learning
          memberikan keuntungan bagi perusahaan untuk dapat melakukan penglohaan
          data volume besar, kecepatan tinggi dan data yang bervariasi, yang
          selanjutnya dapat di visualisasikan juga membantu decision maker dalam
          pengambilan keputusan berdasarkan analytics reporting yang ada.
        </span>
        {/* <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a> */}

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* Sisi Kanan (Tempat Card) */}
      <div className="cards">
        <motion.div
          /* Yang Menentukan Posisi Card */
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transCard}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Programing Language"}
            detail={"Java, Node.js, Python, PHP, JavaScript"}
          />{" "}
        </motion.div>

        {/* Second Card */}
        <motion.div
          /* Yang Menentukan Posisi Card */
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transCard}
        >
          <Card
            emoji={Glasses}
            heading={"Library & Template"}
            detail={"React.JS, React-Native, Vue.JS, Angular.JS"}
          />
        </motion.div>

        {/*  */}
        <motion.div
          /* Yang Menentukan Posisi Card */
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transCard}
        >
          <Card
            emoji={Humble}
            heading={"Databasse"}
            detail={"PostgreSQL, Oracle, MySQL, Hana"}
          />
        </motion.div>
      </div>
      <div
        className="blur s-blur2"
        style={{ background: "var(--purple)" }}
      ></div>
    </div>
  );
};

export default Services;
