import React from "react";
import LoginPageNavigation from "../components/nav-bar/Login";
import JaGoogleOption from "../components/button/JaGoogleOption";
import JaPasswordOption from "../components/button/JaPasswordOptionBt";
import JaGetOtp from "../components/button/JaLoginOtp";
import LoginOptionTabs from "../components/tabs/LoginOption";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const handleNavigateToRegisterPage = () => {
    navigate("/register");
  };
  return (
    <div>
      <LoginPageNavigation title="Login" />
      <LoginOptionTabs />
      <div className="flex flex-row py-7 px-3 gap-2">
        <div className="w-full h-0.5 bg-ja-light-gray  "></div>
        <span className="text-ja-light-gray">or</span>
        <div className="w-full h-0.5 bg-ja-light-gray"></div>
      </div>
      <JaGetOtp buttonText="SEND OTP" />
      <JaPasswordOption buttonText="LOGIN USING PASSWORD" />
      <JaGoogleOption buttonText="LOGIN USING GOOGLE" />
      <div className="text-ja-gray text-center py-5">
        New to Jeevansathi?
        <button
          onClick={handleNavigateToRegisterPage}
          className="text-ja-red font-semibold"
        >
          {" "}
          Register Now!
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
