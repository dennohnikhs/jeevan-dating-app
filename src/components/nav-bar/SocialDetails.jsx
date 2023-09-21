import React from "react";
import { ArrowLeft } from "react-feather";
import { useNavigate } from "react-router-dom";

function SocialDetailsNavigation({ title }) {
  const navigate = useNavigate();

  const redirectToCareerDetails = () => {
    // Redirect to the register page
    navigate("/social-details");
  };
  return (
    <div>
      <div className="bg-ja-black flex flex-row w-full  text-ja-white py-4">
        <button onClick={redirectToCareerDetails}>
          <ArrowLeft className="text-md mr-4 ml-4" />
        </button>

        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default SocialDetailsNavigation;
