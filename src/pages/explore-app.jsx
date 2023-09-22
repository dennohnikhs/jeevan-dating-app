import React from "react";
import ExploreJeevanNavigation from "../components/nav-bar/ExploreAppNav";
import SearchByProfileId from "../components/tabs/search/SearchByProfileId";
import SearchByCriteria from "../components/tabs/search/SearchByCriteria";

function ExploreJeevanApp() {
  return (
    <div className=" flex flex-col">
      <ExploreJeevanNavigation />
      {/* <SearchByProfileId /> */}
      <SearchByCriteria />
    </div>
  );
}

export default ExploreJeevanApp;
