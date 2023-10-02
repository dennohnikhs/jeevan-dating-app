import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import UserAcceptedInterestsCard from "../match-card/UserActivityAcceptedCard";
import userActivityPersonalDetails from "../data/personalActivityData";

function UserAcceptedInterestsSwiper() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <UserAcceptedInterestsCard {...userActivityPersonalDetails} />
      </SwiperSlide>
      <SwiperSlide>
        <UserAcceptedInterestsCard {...userActivityPersonalDetails} />
      </SwiperSlide>
      <SwiperSlide>
        <UserAcceptedInterestsCard {...userActivityPersonalDetails} />
      </SwiperSlide>
    </Swiper>
  );
}

export default UserAcceptedInterestsSwiper;
