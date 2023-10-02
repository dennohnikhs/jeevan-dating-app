import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import Slider from "../slider/Slider";
import homePageData from "../data/HomePage";

function HomePageSwiper() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Slider {...homePageData} />
      </SwiperSlide>
      <SwiperSlide>
        <Slider {...homePageData} />
      </SwiperSlide>
      <SwiperSlide>
        <Slider {...homePageData} />
      </SwiperSlide>
    </Swiper>
  );
}

export default HomePageSwiper;
