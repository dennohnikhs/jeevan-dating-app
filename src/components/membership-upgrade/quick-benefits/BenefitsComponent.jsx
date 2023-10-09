import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "react-feather";
import QuickBenefitsCard from "./QuickBenefitsCard";
import Benefits from "./Benefits";

function BenefitsHeadline() {
  const [showBenefits, setShowBenefits] = useState(false);

  const toggleBenefits = () => {
    setShowBenefits(!showBenefits);
  };
  return (
    <div>
      <div className="flex flex-row justify-between">
        <h1 className="font-bold text font-poppins mb-3">
          Quick benefits you cant miss!
        </h1>
        <span>
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={toggleBenefits}
          >
            {showBenefits ? <ChevronUp /> : <ChevronDown />}
          </div>
        </span>
      </div>
      <div
        className={`overflow-clip ${
          showBenefits ? "h-auto " : "h-[4rem]  relative"
        }`}
      >
        <Benefits />
        {!showBenefits && (
          <div className="absolute top-0 bottom-0 left-0 right-0  bg-gradient-to-t from-white to-transparent "></div>
        )}
      </div>
    </div>
  );
}

export default BenefitsHeadline;
