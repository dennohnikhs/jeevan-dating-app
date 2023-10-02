import React from "react";
import {
  ArrowRight,
  Award,
  Check,
  MessageCircle,
  MessageSquare,
  PhoneForwarded,
  User,
} from "react-feather";
import { Link } from "react-router-dom";

function UserSentInterests({
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
  maritalStatus,
}) {
  const cardBackgroundImage = {
    backgroundImage: `url(${backgroundImage})`,
  };
  const userCardPictures = {
    backgroundImage: `url(${pictures})`,
  };
  return (
    <div>
      <div
        className="relative bg-cover bg-no-repeat bg-ja-gray bg-center  rounded-t h-[590px]"
        style={cardBackgroundImage}
      >
        <div className="text-ja-white flex justify-end px-3 py-4">
          <User />
        </div>
        <div className="absolute bottom-0 px-3">
          <div className="w-64">
            <div className="text-ja-white">last seen {lastSeen}</div>
            <div className="flex flex-row text-ja-white">
              <div>{userName}</div>
              <div>{age}</div>
              <Check />
            </div>
            <div className="flex flex-row justify-between text-ja-white">
              <div>{height}</div>
              <div>{city}</div>
              <div>{caste}</div>
            </div>
            <div className="flex flex-row text-ja-white">
              <div>{professional}</div>
              <div className="text-ja-white">
                <Award />
                {income}
              </div>
            </div>
            <div className="flex flex-row ">
              <div className="text-ja-white">
                <Award />
                {education}
              </div>
              <div className="text-ja-white">{maritalStatus}</div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-ja-black w-full text-ja-white border-t border-ja-white flex flex-row py-4 px-3 justify-between rounded-b text-ja-white ">
        <div className="flex flex-col items-center">
          <MessageCircle />
          <h1>Free Chat</h1>
        </div>
        <div className="flex flex-col items-center">
          <PhoneForwarded />
          <h1>Contact</h1>
        </div>
        <div className="flex flex-col items-center">
          <MessageSquare />
          <h1>Cancel Interests</h1>
        </div>
      </div>
    </div>
  );
}

export default UserSentInterests;
