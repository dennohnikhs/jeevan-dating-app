import React from "react";
import { useNavigate } from "react-router-dom";

function Login({ buttonText }) {
  const navigate = useNavigate();

  const goToLoginPage = () => {
    navigate("/dashboard");
  };

  return (
    <div className="px-3 py-3">
      <button
        onClick={goToLoginPage}
        className="bg-ja-red w-full flex  justify-center  py-3 px-5 "
      >
        <span className=" text-ja-white font-bold text-lg">{buttonText}</span>
      </button>
    </div>
  );
}

export default Login;
