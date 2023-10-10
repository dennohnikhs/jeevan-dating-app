import React, { useContext } from "react";
import { ArrowLeft, Check, User, Zap } from "react-feather";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../../context/GlobalContext";
import SportLightCard from "../../components/spotlight-card/SportLightCard";
import UserChooseSpotLightCardSwiper from "../../components/swiper/SpotLight";

function MembershipUpgradePaymentsPage({
  userId,
  userName,
  membershipPlanType,
  membershipExpiry,
  membershipPlanTypeAmount,
  membershipPlanTypeDiscount,
  totalPayableAmount,
}) {
  const { setSelectedTab } = useContext(GlobalContext);

  return (
    <div>
      <nav className="py-5 px-3 bg-ja-white text-xl font-poppins flex flex-row justify-between text-ja-dark-blue  shadow-md">
        <Link to="/upgrade-plan">
          <ArrowLeft />
        </Link>
        <h3>Your Cart</h3>
        <Link className="text-ja-dark-blue text-sm font-poppins font-bold">
          <Zap />
        </Link>
      </nav>
      <main className="px-3 py-2">
        <div className="flex flex-row gap-2 border-b border-ja-light-light-gray py-3 text-ja-gray">
          <User className="rounded-full bg-ja-black text-ja-white" size={30} />
          <h1>
            {userName} {"Nobel Kansal"}
          </h1>
          <h1>
            {userId}
            {"(VSVZ8549)"}
          </h1>
        </div>
        <div className="flex flex-row justify-between py-3 text-xs text-ja-gray">
          <div>
            <h1 className=" text-bold text-lg font-semibold py-1 text-ja-dark-blue">
              {membershipPlanType}
              {"Pro"}
            </h1>
            <h1>
              Expires in {membershipExpiry}
              {"3"} months
            </h1>
            <Link className="text-ja-red py-1" to="/upgrade-plan">
              Change Plan
            </Link>
          </div>
          <div>
            <h1 className="text-ja-dark-blue text-sm">
              {membershipPlanTypeAmount}
              {"$27.9"}
            </h1>
            <h1 className="line-through py-2">
              {membershipPlanTypeDiscount}
              {"$90"}
            </h1>
          </div>
        </div>
        <div className="bg-ja-light-white-smoke py-3 mb-4">
          <h1 className="text-ja-gray">You might also like</h1>
          <div className=" px-2 py-3 flex  gap-x-3 overflow-x-scroll">
            {/* <UserChooseSpotLightCardSwiper /> */}
            <SportLightCard
              spotlightDescription={
                "Get 40 reports & check your compatibility with profiles"
              }
              spotlightPayableAmount={"$8.99"}
              spotlightTypeName={"Kundi Milan"}
            />
            <SportLightCard
              spotlightDescription={"Get 3 more spotlights & receive 5x views"}
              spotlightPayableAmount={"$11.99"}
              spotlightTypeName={"Spotlight"}
            />
            <SportLightCard
              spotlightDescription={
                "Get 30 more contact views & use them to talk to profiles"
              }
              spotlightPayableAmount={"$44.99"}
              spotlightTypeName={"Contact Views"}
            />
          </div>
        </div>
        <div className="border-t border-b py-3 flex flex-row justify-between font-bold">
          <h1>You Pay</h1>
          <h1>
            {totalPayableAmount}
            {"$475"}
          </h1>
        </div>
        <div className="flex flex-row justify-between py-3">
          <h1 className="text-ja-dark-blue">I wish to pay with Indian Card</h1>
          <span>
            <input type="checkbox" />
          </span>
        </div>
        <div className=" justify-center text-center text-ja-light-gray text-xs">
          <h1 className="py-5 ">
            Please uncheck the pay with Indian cards option if paying through
            paypal
          </h1>
          <h1 className="py-5 ">We have 100% safe & secure payment gateway</h1>
        </div>
        <Link path to="/payment-upgrade-success-page">
          <button className="w-full bottom-0 left-0 right-0 fixed z-50 bg-ja-red text-center font-poppins text-ja-white font-bold py-3 border-b border-lg">
            Continue
          </button>
        </Link>
      </main>
    </div>
  );
}

export default MembershipUpgradePaymentsPage;
