import React from "react";
import { useNavigate } from "react-router-dom";

function GoToLoginPage({ buttonText }) {
  const navigate = useNavigate();
  const handleCreateProfileFor = () => {
    navigate("/login");
  };

  return (
    <div className="px-3 py-3">
      <button
        onClick={handleCreateProfileFor}
        className="bg-ja-black flex w-full  justify-center text-ja-white font-bold py-3 px-6  "
      >
        {buttonText}
      </button>
    </div>
  );
}

export default GoToLoginPage;
