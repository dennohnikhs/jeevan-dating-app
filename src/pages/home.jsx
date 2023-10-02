import React from "react";
import JaMainButton from "../components/button/JaMainBt";
import JaSmallButton from "../components/button/JaExploreBt";
import LoginBt from "../components/button/JaLoginBt";
import HomePageSwiper from "../components/swiper/HomePage";

function HomePage() {
  return (
    <div>
      <HomePageSwiper />
      <div className="px-2 py-5">
        <JaMainButton buttonText="New user? Register for Free" />
      </div>
      <div className="flex justify-between flex-row py-2 px-2">
        <JaSmallButton buttonText="Explore the App" />
        <LoginBt buttonText="Existing user? Login" />
      </div>
    </div>
  );
}

export default HomePage;
