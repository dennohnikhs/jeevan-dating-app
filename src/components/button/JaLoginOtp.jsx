import React from "react";
// import { useNavigate } from "react-router-dom";

// const navigate = useNavigate();
function JaGetOtp({ buttonText }) {
  const handleGetOtp = () => {
    console.log("handleGetOtp");
  };

  return (
    <div className="px-3 py-3">
      <button
        onClick={handleGetOtp}
        className="bg-ja-red flex w-full  justify-center text-ja-white font-bold py-3  "
      >
        {buttonText}
      </button>
    </div>
  );
}

export default JaGetOtp;
