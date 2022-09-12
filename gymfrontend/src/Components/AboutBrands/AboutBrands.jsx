import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function AboutBrands() {
  const images = [
    "https://images.pexels.com/photos/1639729/pexels-photo-1639729.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    "https://images.pexels.com/photos/988952/pexels-photo-988952.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    "https://images.pexels.com/photos/13009437/pexels-photo-13009437.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    "https://images.pexels.com/photos/3457780/pexels-photo-3457780.jpeg?auto=compress&cs=tinysrgb&w=300&w=300&lazy=load",
    "https://images.pexels.com/photos/13046522/pexels-photo-13046522.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
,    "https://images.pexels.com/photos/13046522/pexels-photo-13046522.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"

  ];
  return (
    <>
      <Swiper
      slidesPerView={4}
      spaceBetween={30}
      slidesPerGroup={1}
      loop={true}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      loopFillGroupWithBlank={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper py-5 px-5"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index + image}>
            <img src={image} alt="swiperimage" height="150rem" width="150rem" className="rounded-5 shadow-5-strong"/>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

/***
 * https://codesandbox.io/s/rhvkt5?file=/src/App.jsx:419-705
 * https://codesandbox.io/s/ud6zx6?file=/src/App.jsx:367-398
 * https://codesandbox.io/s/bkpw8m?file=/src/App.jsx
 * https://swiperjs.com/demos
 */