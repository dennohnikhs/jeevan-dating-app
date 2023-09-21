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
      <JaMainButton
        buttonText="New user? Register for Free"
        onClick={handleRegisterButtonClick}
      />
      <div className="flex flex-row justify-between">
        <JaSmallButton buttonText="Explore the App" />
        <JaSmallButton buttonText="Existing user? Login" />
      </div>
    </div>
  );
}

export default HomePage;
