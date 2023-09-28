import React from "react";
import LoggedInNavigation from "../../components/nav-bar/loggedInNavigation";
import SearchPartnerTabs from "../tabs/ExploreApp";

function SearchScreenDashBoard() {
  return (
    <div className="bg-ja-white-smoke min-h-screen pb-3">
      <LoggedInNavigation title="Search" />
      <SearchPartnerTabs />
    </div>
  );
}

export default SearchScreenDashBoard;
