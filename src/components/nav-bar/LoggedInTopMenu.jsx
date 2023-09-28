import React from "react";
import { AlertTriangle } from "react-feather";

function LoggedInTopMenu() {
  return (
    <div className="fixed top-0 left-0 w-full mt-[70px] z-10 flex justify-center gap-3 py-5 bg-ja-white ">
      <button className="bg-gray rounded-full py-4 px-4 border border-ja-gray justify-center">
        <AlertTriangle />
      </button>
      <button className="text-ja-gray bg-ja-white rounded-full px-4 py-2 border border-ja-gray font-bold">
        Verified
      </button>
      <button className="text-ja-gray bg-ja-white rounded-full px-4 py-2 border border-ja-gray font-bold whitespace-nowrap">
        Just Joined
      </button>
      {/* <button className="text-ja-gray bg-ja-white rounded-full p-2 border border-ja-gray font-bold">
        Nearby
      </button> */}
    </div>
  );
}

export default LoggedInTopMenu;
