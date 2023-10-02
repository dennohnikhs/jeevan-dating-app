import React, { useState } from "react";
import SearchByProfileId from "./search/SearchByProfileId";
import ReceivedInterests from "../swiper/ReceivedInterests";
import UserActivityCard from "../match-card/UserActivityAcceptedCard";
import userActivityPersonalDetails from "../data/personalActivityData";
import UserAcceptedInterestsCard from "../match-card/UserActivityAcceptedCard";
import UserSentInterests from "../match-card/UserActivitySentCardInterests";
import UserAcceptedInterestsSwiper from "../swiper/AcceptedInterests";
import UserSentInterestsSwiper from "../swiper/SentInterests";

const UserActivityTabs = ({ totalAcceptedInterests, totalSentInterests }) => {
  const [selectedTab, setSelectedTab] = useState("received");

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div>
      <div className="flex justify-center flex-row gap-2 py-3">
        <button
          onClick={() => handleTabChange("received")}
          className={`bg-light-violet rounded-full border border-ja-black py-2 px-4 justify-center  ${
            selectedTab === "received"
              ? "bg-ja-light-violet border-ja-red text-ja-black"
              : ""
          }`}
        >
          Received
        </button>
        <button
          onClick={() => handleTabChange("accepted")}
          className={`bg-light-violet rounded-full border border-ja-black py-2 px-4 justify-center ${
            selectedTab === "accepted"
              ? "bg-ja-light-violet border-ja-red text-ja-black"
              : ""
          }`}
        >
          Accepted ({totalAcceptedInterests}
          {8})
        </button>
        <button
          onClick={() => handleTabChange("sent")}
          className={`bg-light-violet rounded-full border border-ja-black py-2 px-4 justify-center ${
            selectedTab === "sent"
              ? "bg-ja-light-violet border-ja-red text-ja-black"
              : ""
          }`}
        >
          Sent ({totalSentInterests}
          {100})
        </button>
      </div>
      {selectedTab === "received" && <ReceivedInterests />}
      {selectedTab === "accepted" && <UserAcceptedInterestsSwiper />}
      {selectedTab === "sent" && <UserSentInterestsSwiper />}
    </div>
  );
};

export default UserActivityTabs;
