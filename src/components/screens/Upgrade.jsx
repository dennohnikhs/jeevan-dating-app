import React from "react";
import UpgradeMembershipMainNav from "../nav-bar/UpgradeMainNav";
import Offers from "../membership-upgrade/Offers";
import proLiteData from "../data/ProLiteData";
import MembershipTypeCard from "../membership-upgrade/MembershipTypeCard";
import proData from "../data/ProData";
import proMaxData from "../data/ProMax";
import ExclusiveData from "../data/ExclusiveData";
import ExclusiveMembershipCard from "../membership-upgrade/ExlusiveMembershipCard";
import BenefitsHeadline from "../membership-upgrade/quick-benefits/BenefitsComponent";
import QuickBenefitsCard from "../membership-upgrade/quick-benefits/QuickBenefitsCard";

function UpgradeMembershipDashBoard() {
  return (
    <div className="bg-ja-light-violet min-h-screen pb-10  ">
      <UpgradeMembershipMainNav />
      <div className="px-3 py-2 flex flex-col gap-3  mb-24">
        <h3 className="font-bold font-poppins pb-2">Buy Membership</h3>
        <Offers givenPercentage="60" offerEndingDate="08-Dec-2023" />
        <MembershipTypeCard {...proLiteData} />
        <MembershipTypeCard {...proData} />
        <MembershipTypeCard {...proMaxData} />
        <ExclusiveMembershipCard {...ExclusiveData} />
        <BenefitsHeadline />

        <div className="flex justify-center">
          <button className="flex justify-center text-center text-ja-red bg-ja-light-light-gray font-poppins text-[13px]  border border-ja-light-light-gray rounded-lg py-2 px-4 mt-5">
            <h5>I need help in buying</h5>
          </button>
        </div>
        <h5 className="flex justify-center text-ja-gray font-poppins text-[13px] ">
          EMI options are available above purchase of Rs 5000
        </h5>
      </div>
    </div>
  );
}

export default UpgradeMembershipDashBoard;
