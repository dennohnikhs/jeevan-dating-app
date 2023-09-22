import React from "react";
import { Menu } from "react-feather";

function ExploreJeevanNavigation() {
  return (
    <div className="bg-ja-black flex flex-col">
      <div className="flex flex-row justify-between py-3 px-3">
        <div className="text-ja-white">
          <Menu />
        </div>
        <div className="text-ja-white font-bold">Register</div>
      </div>
    </div>
  );
}

export default ExploreJeevanNavigation;
