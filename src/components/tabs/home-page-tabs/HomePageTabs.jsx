import React, { useState } from "react";
import HomePageDashBoard from "../../screens/Home";
import { Award, Clock, Heart, MessageCircle, Search } from "react-feather";

function HomePageTabs() {
  const [selectedTab, setSelectedTab] = useState("matches");

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };
  return (
    <div>
      <div>
        <div className="flex justify-between flex-row bg-ja-white fixed bottom-0 w-full  p-4 border-t border-ja-gray rounded-b-lg shadow-green-950">
          <button
            onClick={() => handleTabChange("matches")}
            className={`py-3 text-ja-light-gray font-bold font-lg px-2  ${
              selectedTab === "matches" ? "text-ja-red" : ""
            }`}
          >
            <Heart />
            Matches
          </button>
          <button
            onClick={() => handleTabChange("activity")}
            className={`py-3 text-ja-light-gray font-bold font-lg px-2 ${
              selectedTab === "activity" ? "text-ja-red" : ""
            }`}
          >
            <Clock />
            Activity
          </button>
          <button
            onClick={() => handleTabChange("search")}
            className={`py-3 text-ja-light-gray font-bold font-lg px-2 ${
              selectedTab === "search" ? " text-ja-red" : ""
            }`}
          >
            <Search />
            Search
          </button>
          <button
            onClick={() => handleTabChange("messenger")}
            className={`py-3 text-ja-light-gray font-bold font-lg px-2 ${
              selectedTab === "messenger" ? "text-ja-red " : ""
            }`}
          >
            <MessageCircle />
            Messenger
          </button>
          <button
            onClick={() => handleTabChange("upgrade")}
            className={`py-3 text-ja-light-gray font-bold font-lg px-2 ${
              selectedTab === "upgrade" ? "text-ja-red" : ""
            }`}
          >
            <Award />
            Upgrade
          </button>
        </div>
        {selectedTab === "matches" && <HomePageDashBoard />}
      </div>
    </div>
  );
}

export default HomePageTabs;
