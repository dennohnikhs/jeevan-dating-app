import React from "react";
import { useNavigate } from "react-router-dom";

function JaMainButton({ buttonText }) {
  const navigate = useNavigate();

  const goToRegister = () => {
    navigate("/register");
  };

  return (
    <div className="flex justify-center m-5">
      <button
        className="bg-ja-red   py-2 px-4 rounded-lg w-full "
        onClick={goToRegister}
      >
        <span className="whitespace-nowrap text-ja-white font-bold ">
          {buttonText}
        </span>
      </button>
    </div>
  );
}

export default JaMainButton;
