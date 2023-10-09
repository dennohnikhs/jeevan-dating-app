import React, { useContext } from "react";
import { ArrowLeft } from "react-feather";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../../context/GlobalContext";

function UpgradeMembershipSubNav() {
  const { setSelectedTab } = useContext(GlobalContext);

  return (
    <div className="py-5 px-3 bg-ja-white text-xl font-poppins flex flex-row justify-between text-ja-dark-blue  shadow-md">
      <Link to="/upgrade-membership" onClick={() => setSelectedTab("upgrade")}>
        <ArrowLeft />
      </Link>
      <h3>Upgrade Membership</h3>
      <Link className="text-ja-red text-sm font-poppins font-bold">Help</Link>
    </div>
  );
}

export default UpgradeMembershipSubNav;
