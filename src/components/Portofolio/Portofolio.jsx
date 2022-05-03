import React from "react";

import "./Portofolio.css";
import "swiper/css";

import { Swiper, SwiperSlide } from 'swiper/react';

import Sidebar from "../../assets/img/sidebar.png";
import Ecommerce from "../../assets/img/ecommerce.png";
import MusicApp from "../../assets/img/musicapp.png";
import HOC from "../../assets/img/hoc.png";
import loginusa1 from "../../assets/img/portfolio/6/4.png"

const Portofolio = () => {
  return (
    <div className="portofolio" id="portofolio">
      {/* Heading */}
      <span>Project Terbaru</span>
      <span>By Loginusa</span>

      {/* slider */}
      <Swiper
        spaceBetween={5}
        slidesPerView={4}
        grabCursor={true}
        className="portofolio-slider"
      >
        <SwiperSlide>
          <img src={Sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={loginusa1} alt="" />
        </SwiperSlide>
      </Swiper>

    </div>
  );
};

export default Portofolio;
