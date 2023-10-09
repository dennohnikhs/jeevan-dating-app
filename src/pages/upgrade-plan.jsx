import { Link } from "react-router-dom";
import UpgradeMembershipSubNav from "../components/nav-bar/UpgradeSubNav";
import ProLiteUpgradeSwiper from "../components/swiper/UpgradeMembership";

function ProLiteDashBoard() {
  return (
    <div>
      <UpgradeMembershipSubNav navHeadline="Upgrade Membership" />
      <div className="px-3 pt-3  ">
        <ProLiteUpgradeSwiper />

        <Link path to="/membership-upgrade-payments-page">
          <button className="w-full bottom-0 left-0 right-0 fixed z-50 bg-ja-red text-center font-poppins text-ja-white font-bold py-3">
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProLiteDashBoard;
