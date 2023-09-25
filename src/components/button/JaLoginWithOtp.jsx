import React from "react";
import { useNavigate } from "react-router-dom";

function LoginWithOtp({ buttonText }) {
  const navigate = useNavigate();

  const goToLoginPage = () => {
    navigate("/login");
  };

  return (
    <div className="px-3 py-3">
      <button
        onClick={goToLoginPage}
        className="bg-ja-white font-bold flex w-full justify-center text-ja-red  py-3 border border-ja-red "
      >
        <span>{buttonText}</span>
      </button>
    </div>
  );
}

export default LoginWithOtp;
