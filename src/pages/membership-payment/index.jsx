import React, { useContext } from "react";
import { ArrowLeft, Zap } from "react-feather";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../../context/GlobalContext";

function MembershipUpgradePaymentsPage() {
  const { setSelectedTab } = useContext(GlobalContext);

  return (
    <div>
      <div className="py-5 px-3 bg-ja-white text-xl font-poppins flex flex-row justify-between text-ja-dark-blue  shadow-md">
        <Link to="/upgrade-plan">
          <ArrowLeft />
        </Link>
        <h3>Your Cart</h3>
        <Link className="text-ja-dark-blue text-sm font-poppins font-bold">
          <Zap />
        </Link>
      </div>
      <Link path to="/payment-upgrade-success-page">
        <button className="w-full bottom-0 left-0 right-0 fixed z-50 bg-ja-red text-center font-poppins text-ja-white font-bold py-3">
          Continue
        </button>
      </Link>
    </div>
  );
}

export default MembershipUpgradePaymentsPage;
