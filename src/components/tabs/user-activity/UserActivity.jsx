import React, { useState } from "react";
import JaUserReceivedInterestsBt from "../../button/JaUserReceivedInterests";
import ReceivedInterests from "../../swiper/ReceivedInterests";
import JaUserAcceptedInterestsBt from "../../button/JaUserAcceptedInterests";
import JaUserSentInterests from "../../button/JaUserSentInterests";
import AcceptedInterests from "../../swiper/AcceptedInterests";
import SentInterests from "../../swiper/SentInterests";

function UserActivityTabs() {
  const [selectedTab, setSelectedTab] = useState("received");

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };
  return (
    <div>
      <div className="flex flex-row flex-start gap-3 px-3 py-3">
        <div>
          <JaUserReceivedInterestsBt
            onClick={() => handleTabChange("received")}
          />
        </div>
        <div>
          <JaUserAcceptedInterestsBt
            onClick={() => handleTabChange("accepted")}
            totalAcceptedInterests="30"
          />
        </div>
        <div>
          <JaUserSentInterests
            onClick={() => handleTabChange("sent")}
            totalUserSentInterests="99+"
          />
        </div>
      </div>
      {selectedTab === "received" && <ReceivedInterests />}
      {selectedTab === "accepted" && <AcceptedInterests />}
      {selectedTab === "sent" && <SentInterests />}
    </div>
  );
}

export default UserActivityTabs;
