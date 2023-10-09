import React, { useContext } from "react";
import HomePageDashBoard from "../../screens/Home";
import { Award, Clock, Heart, MessageCircle, Search } from "react-feather";
import ActivityDashBoard from "../../screens/Activity";
import SearchScreenDashBoard from "../../screens/Search";
import MessengerDashBoard from "../../screens/messenger";
import DashBoardTabButton from "../../button/JaDashBoardBt";
import UpgradeMembershipDashBoard from "../../screens/Upgrade";
import { GlobalContext } from "../../../../context/GlobalContext";

function HomePageTabs() {
  const { selectedTab, setSelectedTab } = useContext(GlobalContext); // Set initial state to tab from URL or "matches"

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const tabs = {
    matches: <HomePageDashBoard />,
    activity: <ActivityDashBoard />,
    search: <SearchScreenDashBoard />,
    messenger: <MessengerDashBoard />,
    upgrade: <UpgradeMembershipDashBoard />,
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
      <div className="flex justify-between flex-row z-50 bg-ja-white fixed bottom-0 w-full shadow-md border-t py-3 px-4  rounded-b-lg">
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
