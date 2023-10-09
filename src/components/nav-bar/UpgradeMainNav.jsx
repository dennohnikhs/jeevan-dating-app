import React from "react";
import { Link } from "react-router-dom";

function UpgradeMembershipMainNav() {
  return (
    <div className="py-5 px-3 bg-ja-white text-xl top-0 left-0 right-0 sticky font-poppins flex flex-row justify-between text-ja-light-blue  shadow-md">
      <h3 className="ml-10">Upgrade Membership </h3>
      <Link className="text-ja-red text-normal font-poppins">Help</Link>
    </div>
  );
}

export default UpgradeMembershipMainNav;
