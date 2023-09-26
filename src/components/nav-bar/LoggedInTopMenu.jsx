import React from "react";
import { AlertTriangle } from "react-feather";

function LoggedInTopMenu() {
  return (
    <div className="fixed top-0 left-0 w-full p-4 mt-[60px] z-10 flex justify-center gap-3  px-4 py-3 bg-ja-white ">
      <button className="bg-gray rounded-full p-3 border border-ja-gray justify-center">
        <AlertTriangle />
      </button>
      <button className="text-ja-gray bg-ja-white rounded-full p-2 border border-ja-gray font-bold">
        Verified
      </button>
      <button className="text-ja-gray bg-ja-white rounded-full p-2 border border-ja-gray font-bold">
        Just Joined
      </button>
      <button className="text-ja-gray bg-ja-white rounded-full p-2 border border-ja-gray font-bold">
        Nearby
      </button>
    </div>
  );
}

export default LoggedInTopMenu;
