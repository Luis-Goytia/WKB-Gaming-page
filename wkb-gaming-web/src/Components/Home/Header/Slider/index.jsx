import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";


export const Slider =()=> {
  return (
    <>
      <Swiper className="mySwiper">
        <SwiperSlide><h1>Applications</h1></SwiperSlide>
        <SwiperSlide><h1>Systems</h1></SwiperSlide>
        <SwiperSlide><h1>Websites</h1></SwiperSlide>
        <SwiperSlide><h1>Strategies</h1></SwiperSlide>
        <SwiperSlide><h1>Videogames</h1></SwiperSlide>
      </Swiper>
    </>
  );
}