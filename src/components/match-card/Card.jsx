import React from "react";
import { Check, CornerUpRight, User } from "react-feather";
import CardActions from "./CardActions";

//we will be passing in the background image like this inside the component using this
//<YourComponent backgroundImage="path_to_your_image.jpg" />
function PersonalDetailsCard({
  pictures,
  backgroundImage,
  userName,
  lastSeen,
  age,
  height,
  caste,
  motherTongue,
  city,
  workStatus,
  income,
  education,
  maritalStatus,
}) {
  const cardBackgroundImage = {
    backgroundImage: `url(${backgroundImage})`,
  };
  return (
    <div className="mt-16 ">
      <div
        className="bg-cover bg-ja-gray bg-center rounded-t p-3 py-4   "
        style={cardBackgroundImage}
      >
        <div className="text-ja-white flex justify-end px-3 py-4">
          {pictures}
          <User />
        </div>
        <div className="flex flex-row gap-2">
          <div className="text-ja-white font-bold text-2xl">{userName}</div>
          <span className="text-ja-blue font-4xl font-bold">
            <Check />
          </span>
        </div>
        <div className="text-ja-white font-xs"> last seen {lastSeen}</div>
        <div className="flex flex-row justify-between">
          <div className="text-ja-white font-xs">
            <div className="flex flex-row gap-2 py-1">
              <span>{age}</span>
              <span>{height}</span>
            </div>
            <div className="py-1">{caste}</div>
            <div className="py-1">{motherTongue}</div>
            <div className="py-1">{city}</div>
          </div>
          <div className="text-ja-white font-xs">
            <div className="py-1">{workStatus}</div>
            <div className="py-1">{income}</div>
            <div className="py-1">{education}</div>
            <div className="py-1">{maritalStatus}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalDetailsCard;
