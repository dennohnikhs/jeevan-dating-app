import React from "react";
import { useNavigate } from "react-router-dom";
import Swiper from "../components/swiper/Swiper";
import JaMainButton from "../components/button/JaMainButton";
import JaSmallButton from "../components/button/JaSmallButton";

function HomePage() {
  const navigate = useNavigate();

  const handleRegisterButtonClick = () => {
    // Redirect to the register page
    navigate("/create-profile");
  };

  return (
    <div>
      <Swiper />
      <div className="px-2 py-5">
        <JaMainButton
          buttonText="New user? Register for Free"
          onClick={handleRegisterButtonClick}
        />
      </div>
      <div className="flex justify-between flex-row py-2 px-2">
        <JaSmallButton buttonText="Explore the App" />
        <JaSmallButton buttonText="Existing user? Login" />
      </div>
    </div>
  );
}

export default HomePage;
