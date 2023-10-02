import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import PersonalDetailsCard from "../match-card/PersonalDetailsCard";
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
        <PersonalDetailsCard {...personalDetailsData} />
      </SwiperSlide>
      <SwiperSlide>
        <PersonalDetailsCard {...personalDetailsData} />
      </SwiperSlide>
      <SwiperSlide>
        <PersonalDetailsCard {...personalDetailsData} />
      </SwiperSlide>
      <SwiperSlide>
        <PersonalDetailsCard {...personalDetailsData} />
      </SwiperSlide>
    </Swiper>
  );
}

export default PersonalDataDetailsSwiper;
