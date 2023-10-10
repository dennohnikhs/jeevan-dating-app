import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import SportLightCard from "../spotlight-card/SportLightCard";

function UserChooseSpotLightCardSwiper() {
  return (
    <Swiper
      spaceBetween={150}
      slidesPerView={2}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <SportLightCard
          spotlightDescription={"Get 3 more spotlights & receive 5x views"}
          spotlightPayableAmount={"$11.99"}
          spotlightTypeName={"Spotlight"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <SportLightCard
          spotlightDescription={"Get 3 more spotlights & receive 5x views"}
          spotlightPayableAmount={"$11.99"}
          spotlightTypeName={"Spotlight"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <SportLightCard
          spotlightDescription={"Get 3 more spotlights & receive 5x views"}
          spotlightPayableAmount={"$11.99"}
          spotlightTypeName={"Spotlight"}
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default UserChooseSpotLightCardSwiper;
