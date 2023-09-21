import React from "react";
import { ArrowLeft } from "react-feather";
import { useNavigate } from "react-router-dom";

function CreateProfileNavigation({ title }) {
  const navigate = useNavigate();

  const handleCreateUserProfile = () => {
    // Redirect to the register page
    navigate("/create-profile");
  };
  return (
    <div>
      <div className="bg-ja-black flex flex-row text-ja-white py-4">
        <button onClick={handleCreateUserProfile}>
          <ArrowLeft className="text-md mr-8 ml-3" />
        </button>

        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default CreateProfileNavigation;
