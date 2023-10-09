import React from "react";
import { Circle } from "react-feather";

function Offers({ givenPercentage, offerEndingDate }) {
  return (
    <div className="flex flex-row justify-center gap-1 whitespace-nowrap py-2 px-2 mb-3 rounded-md text-ja-dark-blue font-poppins bg-ja-white  font-bold  border-dashed border border-ja-black">
      <Circle
        className="stroke-current "
        strokeWidth={1.5}
        fill="green"
        size={18}
      />
      <span>Upto {givenPercentage} % OFF</span>
      <span className="text-ja-light-gray font-poppins font-thin">
        Offer Valid till {offerEndingDate}
      </span>
    </div>
  );
}

export default Offers;
