import React from "react";
import { useNavigate } from "react-router-dom";

function JaPasswordOption({ buttonText }) {
  const navigate = useNavigate();
  const handleLoginWithPassword = () => {
    navigate("/login-with-password");
  };

  return (
    <div className="px-3 py-3">
      <button
        onClick={handleLoginWithPassword}
        className="bg-ja-white flex  justify-center border border-ja-red  py-3 w-full text-ja-red text-ja-red font-bold "
      >
        {buttonText}
      </button>
    </div>
  );
}

export default JaPasswordOption;
