import React from "react";
import { useNavigate } from "react-router-dom";

function JaSmallButton({ buttonText }) {
  const navigate = useNavigate();

  const goToRegister = () => {
    navigate("/register");
  };

  return (
    <button className="bg-ja-white flex  justify-center  py-2 px-1 rounded-lg border border-ja-red">
      <span className=" text-ja-red font-bold ">{buttonText}</span>
    </button>
  );
}

export default JaSmallButton;
