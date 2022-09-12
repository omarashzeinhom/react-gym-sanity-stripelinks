import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

export default function App() {
  const images = [
    "https://images.pexels.com/photos/13046522/pexels-photo-13046522.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    "https://images.pexels.com/photos/13046522/pexels-photo-13046522.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    "https://images.pexels.com/photos/13046522/pexels-photo-13046522.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    "https://images.pexels.com/photos/13046522/pexels-photo-13046522.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    "https://images.pexels.com/photos/13046522/pexels-photo-13046522.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
,    "https://images.pexels.com/photos/13046522/pexels-photo-13046522.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"

  ];
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={100}
        pagination={{
          clickable: true
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index + image}>
            <img src={image} alt="swiperimage" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
