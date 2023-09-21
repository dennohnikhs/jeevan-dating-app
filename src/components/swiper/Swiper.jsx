import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import Slider from "../slider/Slider";

function SwiperComponent() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Slider
          imageUrl="https://images.pexels.com/photos/2536588/pexels-photo-2536588.jpeg?auto=compress&cs=tinysrgb&w=600"
          title="Now, chat for free!"
          description="To help you make a better connections & meaningful conversations to find the one!"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slider
          imageUrl="https://images.pexels.com/photos/3641826/pexels-photo-3641826.jpeg?auto=compress&cs=tinysrgb&w=600"
          title="100! Manually Screened Profiles"
          description="Search by location,community,profession & more,from lacs of Govt-ID Verified profiles"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slider
          imageUrl="https://images.pexels.com/photos/3574696/pexels-photo-3574696.jpeg?auto=compress&cs=tinysrgb&w=600"
          title="Connect over Voice & Video calls"
          description="Enjoy secure conversations using our voice & video calling services without revealing your numbers"
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default SwiperComponent;
