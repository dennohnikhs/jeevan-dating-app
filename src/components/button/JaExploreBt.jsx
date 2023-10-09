import React from "react";
import { useNavigate } from "react-router-dom";

function JaExplore({ buttonText }) {
  const navigate = useNavigate();

  const goToRegister = () => {
    navigate("/explore-app");
  };

  return (
    <button
      onClick={goToRegister}
      className="bg-ja-white flex whitespace-nowrap  justify-center  py-2 px-1 rounded-lg border border-ja-red text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
    >
      <span className=" text-ja-red font-bold ">{buttonText}</span>
    </button>
  );
}

export default JaExplore;
