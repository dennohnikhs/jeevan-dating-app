import React from "react";
import LoginPageNavigation from "../components/nav-bar/Login";
import JaGoogleOption from "../components/button/JaGoogleOption";
import JaPasswordOption from "../components/button/JaPasswordOptionBt";
import JaGetOtp from "../components/button/JaLoginOtp";
import LoginOptionTabs from "../components/tabs/LoginOption";
import { useNavigate } from "react-router-dom";

import LoginWithOtp from "../components/button/JaLoginWithOtp";
import Login from "../components/button/Login";

function LoginWithPasswordPage() {
  const navigate = useNavigate();
  const handleNavigateToRegisterPage = () => {
    navigate("/register");
  };
  return (
    <div>
      <LoginPageNavigation title="Login" />
      <div className="py-2 px-3">
        <input
          className="w-full py-3 border-b bg-ja-white border-ja-light-gray"
          type="email"
          placeholder="Email ID *"
        />
      </div>
      <div className="py-2 px-3">
        <input
          className="w-full py-3 border-b bg-ja-white border-ja-light-gray"
          type="phone"
          placeholder="Phone No *"
        />
      </div>
      <div className="flex flex-row py-7 px-3 gap-2">
        <div className="w-full h-0.5 bg-ja-light-gray  "></div>
        <span className="text-ja-light-gray">or</span>
        <div className="w-full h-0.5 bg-ja-light-gray"></div>
      </div>
      <Login buttonText="Login" />
      <LoginWithOtp buttonText="LOGIN WITH OTP" />
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

export default LoginWithPasswordPage;
