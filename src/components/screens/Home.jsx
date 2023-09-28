import React from "react";
import LoggedInNavigation from "../../components/nav-bar/loggedInNavigation";
import LoggedInTopMenu from "../../components/nav-bar/LoggedInTopMenu";
import PersonalDataDetailsSwiper from "../swiper/PersonalDetailsCard";
import personalDetailsData from "../data/personalDetailsData";

function HomePageDashBoard() {
  return (
    <div className="bg-ja-white-smoke min-h-screen pb-3">
      <LoggedInNavigation title="Matches" />
      <div className="px-4">
        <LoggedInTopMenu />
        <PersonalDataDetailsSwiper {...personalDetailsData} />
      </div>
    </div>
  );
}

export default HomePageDashBoard;
