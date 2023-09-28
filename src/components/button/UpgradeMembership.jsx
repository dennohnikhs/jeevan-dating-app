import React from "react";
import { useNavigate } from "react-router-dom";

function UpgradeMembership({ buttonText }) {
  const navigate = useNavigate();
  const handleUpgradeProgram = () => {
    navigate("/upgrade-membership");
  };

  return (
    <div className="px-3 py-3">
      <button
        onClick={handleUpgradeProgram}
        className="bg-ja-red flex w-full  justify-center text-ja-white font-bold py-3 px-4 "
      >
        {buttonText}
      </button>
    </div>
  );
}

export default UpgradeMembership;
