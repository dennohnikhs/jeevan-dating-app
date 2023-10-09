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
      className="bg-ja-white flex  justify-center whitespace-nowrap  py-2 px-5 rounded-lg border border-ja-red text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
    >
      <span className=" text-ja-red font-bold ">{buttonText}</span>
    </button>
  );
}

export default LoginBt;
