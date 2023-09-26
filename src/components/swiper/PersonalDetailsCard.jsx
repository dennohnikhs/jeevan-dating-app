import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import Slider from "../slider/Slider";
import PersonalDetailsCard from "../match-card/Card";
import personalDetailsData from "../../components/data/personalDetailsData";

function PersonalDataDetailsSwiper() {
  return (
    <Swiper
      direction="vertical" // Make the swiper vertical
      style={{ height: "100vh" }}
      spaceBetween={10}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Slider imageUrl="https://images.pexels.com/photos/2536588/pexels-photo-2536588.jpeg?auto=compress&cs=tinysrgb&w=600" />
      </SwiperSlide>
      <SwiperSlide>
        <Slider imageUrl="https://images.pexels.com/photos/3641826/pexels-photo-3641826.jpeg?auto=compress&cs=tinysrgb&w=600" />
      </SwiperSlide>
      <SwiperSlide>
        <Slider imageUrl="https://images.pexels.com/photos/3574696/pexels-photo-3574696.jpeg?auto=compress&cs=tinysrgb&w=600" />
      </SwiperSlide>
      <SwiperSlide>
        <PersonalDetailsCard {...personalDetailsData} />
      </SwiperSlide>
    </Swiper>
  );
}

export default PersonalDataDetailsSwiper;
