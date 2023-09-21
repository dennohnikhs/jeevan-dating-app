import React from "react";
import { useNavigate } from "react-router-dom";

function LoginBt({ buttonText }) {
  const navigate = useNavigate();

  const goToRegister = () => {
    navigate("/login");
  };

  return (
    <button
      onClick={goToRegister}
      className="bg-ja-white flex  justify-center  py-2 px-1 rounded-lg border border-ja-red"
    >
      <span className=" text-ja-red font-bold ">{buttonText}</span>
    </button>
  );
}

export default LoginBt;
