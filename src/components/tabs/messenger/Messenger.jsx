import React, { useState } from "react";
import SearchByProfileId from "../search/SearchByProfileId";
import Calls from "../../../pages/messages/Calls";
import SentConversations from "../../../pages/messages/SentConversations";
import AcceptedConversations from "../../../pages/messages/AcceptedConversations";

const UserMessengerTabs = () => {
  const [selectedTab, setSelectedTab] = useState("accepted");

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div>
      <div className="flex justify-between flex-row  px-3">
        <button
          onClick={() => handleTabChange("accepted")}
          className={`py-3 text-ja-light-gray font-md   ${
            selectedTab === "accepted"
              ? "border-b-2 border-ja-red text-ja-dark-blue font-poppins font-bold"
              : ""
          }`}
        >
          ACCEPTED
        </button>
        <button
          onClick={() => handleTabChange("interests")}
          className={`py-3 text-ja-light-gray  font-md ${
            selectedTab === "interests"
              ? "border-b-2 border-ja-red text-ja-dark-blue font-poppins font-bold"
              : ""
          }`}
        >
          INTERESTS
        </button>
        <button
          onClick={() => handleTabChange("calls")}
          className={`py-3 text-ja-light-gray font-md   ${
            selectedTab === "calls"
              ? "border-b-2 border-ja-red text-ja-dark-blue font-poppins font-bold"
              : ""
          }`}
        >
          CALLS
        </button>
      </div>
      {selectedTab === "accepted" && <AcceptedConversations />}
      {selectedTab === "interests" && <SentConversations />}
      {selectedTab === "calls" && <Calls />}
    </div>
  );
};

export default UserMessengerTabs;
