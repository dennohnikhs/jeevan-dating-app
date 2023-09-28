import React, { useState } from "react";
import HomePageDashBoard from "../../screens/Home";
import { Award, Clock, Heart, MessageCircle, Search } from "react-feather";
import ActivityDashBoard from "../../screens/Activity";
import SearchScreenDashBoard from "../../screens/Search";
import MessengerDashBoard from "../../screens/messenger";
import JaMatchesBtTab from "../../button/JaMatchesBtTab";

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
      <div>
        <div className="flex justify-between flex-row bg-ja-white fixed bottom-0 w-full  p-4 border-t border-ja-gray rounded-b-lg">
          {tabTogglers.map((tabToggler) => (
            <JaMatchesBtTab
              handleTabChange={handleTabChange}
              tabName={tabToggler.name}
              selectedTab={selectedTab}
              key={`${tabToggler.name}-tab-togggler`}
            >
              <span>
                <tabToggler.Icon />
              </span>
              <span className="capitalize">{tabToggler.name}</span>
            </JaMatchesBtTab>
          ))}
        </div>
        {tabs[selectedTab]}
      </div>
    </div>
  );
}

export default HomePageTabs;
