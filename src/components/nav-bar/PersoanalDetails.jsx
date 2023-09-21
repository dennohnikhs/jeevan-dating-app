import React from "react";
import { ArrowLeft } from "react-feather";
import { useNavigate } from "react-router-dom";

function NavigateToPersonalDetails({ title }) {
  const navigate = useNavigate();

  const NavigateToPersonalDetails = () => {
    // Redirect to the register page
    navigate("/register/specific-gender");
  };
  return (
    <div>
      <div className="bg-ja-black flex flex-row text-ja-white py-4">
        <button onClick={NavigateToPersonalDetails}>
          <ArrowLeft className="text-md mr-8 ml-3" />
        </button>

        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default NavigateToPersonalDetails;
