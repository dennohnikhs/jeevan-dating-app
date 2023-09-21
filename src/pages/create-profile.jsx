import React from "react";
import GridDisplay from "../components/grid-display/Grid";
import NavigationHome from "../components/nav-bar/HomeRedirectNavigation";

function HomeRedirectNav() {
  return (
    <div className="bg-ja-white flex flex-col">
      <NavigationHome title="Create Profile For" />
      <div>
        <GridDisplay />
      </div>
    </div>
  );
}

export default HomeRedirectNav;
