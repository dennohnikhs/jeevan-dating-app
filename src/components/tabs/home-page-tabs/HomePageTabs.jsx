import React, { useState } from "react";
import HomePageDashBoard from "../../screens/Home";
import { Award, Clock, Heart, MessageCircle, Search } from "react-feather";
import ActivityDashBoard from "../../screens/Activity";
import SearchScreenDashBoard from "../../screens/Search";
import MessengerDashBoard from "../../screens/messenger";
import DashBoardTabButton from "../../button/JaDashBoardBt";

function HomePageTabs() {
  const [selectedTab, setSelectedTab] = useState("matches");

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const tabs = {
    matches: <HomePageDashBoard />,
    activity: <ActivityDashBoard />,
    search: <SearchScreenDashBoard />,
    messenger: <MessengerDashBoard />,
  };

  const tabTogglers = [
    {
      name: "matches",
      Icon: Heart,
    },
    {
      name: "activity",
      Icon: Clock,
    },
    {
      name: "search",
      Icon: Search,
    },
    {
      name: "messenger",
      Icon: MessageCircle,
    },
    {
      name: "upgrade",
      Icon: Award,
    },
  ];

  return (
    <div>
      <div className="flex justify-between flex-row z-50 bg-ja-white fixed bottom-0 w-full  p-4 border-t border-ja-gray rounded-b-lg">
        {tabTogglers.map((tabToggler) => (
          <DashBoardTabButton
            handleTabChange={handleTabChange}
            tabName={tabToggler.name}
            selectedTab={selectedTab}
            key={`${tabToggler.name}-tab-togggler`}
          >
            <span>
              <tabToggler.Icon />
            </span>
            <span className="capitalize">{tabToggler.name}</span>
          </DashBoardTabButton>
        ))}
      </div>
      {tabs[selectedTab]}
    </div>
  );
}

export default HomePageTabs;
