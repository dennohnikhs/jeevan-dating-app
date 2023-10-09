import React from "react";
import LoggedInNavigation from "../../components/nav-bar/loggedInNavigation";
import UserMessengerTabs from "../tabs/messenger/Messenger";

function MessengerDashBoard() {
  return (
    <div className="bg-ja-white-smoke min-h-screen pb-3">
      <LoggedInNavigation title="Messenger" />
      <h3 className="text-ja-blue-dark pt-4 px-3 font-poppins font-black">
        My Conversations
      </h3>
      <UserMessengerTabs />
    </div>
  );
}

export default MessengerDashBoard;
