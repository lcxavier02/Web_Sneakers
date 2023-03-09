import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image1 from "../assets/sneakers1.jpg";
import Image2 from "../assets/sneakers2.jpg";
import Image3 from "../assets/sneakers3.jpg";

import { Navigation } from "swiper";

function Gallery() {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper w-5/6 mx-auto"
      >
        <SwiperSlide>
          <img
            className="object-fill w-full h-96"
            src={Image1}
            alt="image slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-fill w-full h-96"
            src={Image2}
            alt="image slide 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-fill w-full h-96"
            src={Image3}
            alt="image slide 3"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Gallery;
