import React from "react";

import "./Portofolio.css";
import "swiper/css";

import { Swiper, SwiperSlide } from 'swiper/react';

import Sidebar from "../../assets/img/sidebar.png";
import Ecommerce from "../../assets/img/ecommerce.png";
import MusicApp from "../../assets/img//musicapp.png";
import HOC from "../../assets/img/hoc.png";

const Portofolio = () => {
  return (
    <div className="portofolio" id="portofolio">
      {/* Heading */}
      <span>Recent Projects</span>
      <span>Portofolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={5}
        slidesPerView={3}
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
      </Swiper>

    </div>
  );
};

export default Portofolio;
