import React from "react";
import LoggedInNavigation from "../../components/nav-bar/loggedInNavigation";
import UserActivityTopMenu from "../../pages/user-activity";
import UserActivityTabs from "../tabs/UserActivityTabs";
import DeclinedOrIgnoredInterests from "../button/JaDeclinedOrIgnoredBt";
import { Link } from "react-router-dom";
import { ArrowRight } from "react-feather";

function ActivityDashBoard() {
  return (
    <div className=" min-h-screen flex flex-col ">
      <LoggedInNavigation title="Activity" />
      <div className=" px-4 ">
        <UserActivityTopMenu profileVisits="9" shortlistedProfiles="0" />

        <UserActivityTabs />
        <div className="flex flex-row justify-between text-ja-red font-poppins font-semibold py-3">
          <Link>View all sent interests</Link>
          <ArrowRight />
        </div>

        <DeclinedOrIgnoredInterests />
      </div>
    </div>
  );
}

export default ActivityDashBoard;
