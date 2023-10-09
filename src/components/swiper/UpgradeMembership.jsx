import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ProLiteUpgradeMainCard from "../membership-upgrade/ProLiteUpgradeMainCard";
import proLiteMainCardData from "../data/ProLiteMainCardData";
import ProUpgradeMainCard from "../membership-upgrade/ProUpgradeMainCard";
import proMainCardData from "../data/ProMainCardData";
import proMaxMainCardData from "../data/ProMaxMainCardData";
import ProMaxUpgradeMainCard from "../membership-upgrade/ProMaxUpgrade";
import ExclusiveMainCardData from "../data/ExclusiveMainCardData";
import ExclusiveUpgradeMainCard from "../membership-upgrade/ExclusiveMainCard";

function ProLiteUpgradeSwiper() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <ProLiteUpgradeMainCard {...proLiteMainCardData} />
      </SwiperSlide>
      <SwiperSlide>
        <ProUpgradeMainCard {...proMainCardData} />
      </SwiperSlide>
      <SwiperSlide>
        <ProMaxUpgradeMainCard {...proMaxMainCardData} />
      </SwiperSlide>
      <SwiperSlide>
        <ExclusiveUpgradeMainCard {...ExclusiveMainCardData} />
      </SwiperSlide>
    </Swiper>
  );
}

export default ProLiteUpgradeSwiper;
