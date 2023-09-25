import React from "react";
import { useNavigate } from "react-router-dom";

function LoginBt({ buttonText }) {
  const navigate = useNavigate();

  const goToLoginPage = () => {
    navigate("/login");
  };

  return (
    <button
      onClick={goToLoginPage}
      className="bg-ja-white flex  justify-center  py-2 px-5 rounded-lg border border-ja-red"
    >
      <span className=" text-ja-red font-bold ">{buttonText}</span>
    </button>
  );
}

export default LoginBt;
