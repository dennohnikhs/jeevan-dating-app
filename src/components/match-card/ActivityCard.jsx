import React from "react";
import { Award } from "react-feather";

function ActivityCard(
  backgroundImage,
  pictures,
  lastSeen,
  userName,
  age,
  height,
  city,
  caste,
  professional,
  income,
  education,
  maritalStatus
) {
  const cardBackgroundImage = {
    backgroundImage: `url(${backgroundImage})`,
  };
  return (
    <div
      className="rounded-md bg-black py-3 px-3 h-[500px]"
      style={cardBackgroundImage}
    >
      <div className="text-ja-white flex justify-end px-3 py-4">
        {" "}
        {pictures}
      </div>
      <div>last seen {lastSeen}</div>
      <div>{userName}</div>
      <div className="flex flex-row justify-between">
        <div>{height}</div>
        <div>{city}</div>
        <div>{caste}</div>
      </div>
      <div className="flex flex-row">
        <div>{professional}</div>
        <div className="text-ja-black">
          <Award />
          {income}
        </div>
      </div>
      <div className="flex flex-row">
        <div className="text-ja-black">
          <Award />
          {education}
        </div>
        <div>{maritalStatus}</div>
      </div>
    </div>
  );
}

export default ActivityCard;
