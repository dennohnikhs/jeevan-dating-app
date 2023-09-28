import React from "react";
import LoggedInNavigation from "../../components/nav-bar/loggedInNavigation";
import UserActivityTopMenu from "../../pages/user-activity";
import UserActivityTabs from "../tabs/user-activity/UserActivity";
import DeclinedOrIgnoredInterests from "../button/JaDeclinedOrIgnoredBt";

function ActivityDashBoard() {
  return (
    <div className="min-h-screen flex flex-col ">
      <LoggedInNavigation title="Activity" />
      <div className="px-4">
        <UserActivityTopMenu profileVisits="9" shortlistedProfiles="0" />
        <UserActivityTabs />
        <div className="flex-shrink-0  text-center">
          <DeclinedOrIgnoredInterests />
        </div>
      </div>
    </div>
  );
}

export default ActivityDashBoard;
