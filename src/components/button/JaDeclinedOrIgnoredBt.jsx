import React from "react";
import { ChevronRight } from "react-feather";
import backgroundImage from "../../assets/images/bg.jpg";

function DeclinedOrIgnoredInterests({ declinedOrCancelledInterests }) {
  return (
    <div>
      <button className="absolute bg-ja-white flex flex-row gap-1 border-t border-ja-light-gray shadow-lg   w-full py-4 px-4 justify-between pb-[116px]">
        <span className="text-ja-black">
          <h1>Declined/Cancelled Interests({declinedOrCancelledInterests})</h1>
          <h2 className=" whitespace-nowrap overflow-hidden  text-sm  py-1.5 px-2 text-ja-gray  justify-center   ">
            These include declined by you/by others
          </h2>
        </span>
        <div className="flex flex-row gap-3">
          <img
            src={backgroundImage}
            alt="Image"
            className="h-10 w-10 rounded-full px-1 mt-2"
          />
          <ChevronRight className="text-ja-black mt-2" />
        </div>
      </button>
    </div>
  );
}

export default DeclinedOrIgnoredInterests;
