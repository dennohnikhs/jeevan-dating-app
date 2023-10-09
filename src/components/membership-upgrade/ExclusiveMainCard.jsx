import React from "react";
import { Award, Check, Clock, PhoneIncoming, X } from "react-feather";

function ExclusiveUpgradeMainCard({
  cardTypeName,
  headlineText1,
  descriptionText1,
  headlineText2,
  descriptionText2,
  headlineText3,
  descriptionText3,
  headlineText4,
}) {
  return (
    <div>
      <div className="text-ja-dark-blue border  gap-4 bg-ja-white shadow-lg py-5 px-3 rounded-lg">
        <h1 className="text-ja-light-blue font-poppins font-bold text-2xl pb-3 ">
          {cardTypeName}{" "}
          <span className="text-ja-red text-xs ml-4 ">KNOW MORE</span>
        </h1>
        <p className=" flex flex-row gap-2  font-poppins font-semibold text-xs pb-3">
          <PhoneIncoming
            className="  text-ja-light-violet bg-ja-light-light-gray border border-ja-dark-blue rounded-md "
            size={24}
            fill="ja-gray"
          />
          <div>
            {headlineText1}
            <h2 className="font-normal pt-1 text-ja-gray">
              {descriptionText1}
            </h2>
          </div>
        </p>
        <p className=" flex flex-row gap-2  font-poppins font-semibold text-xs pb-3">
          <Award
            className="  text-ja-light-violet bg-ja-light-light-gray border border-ja-dark-blue rounded-md "
            size={24}
            fill="ja-violet"
          />
          <div>
            {headlineText2}
            <h2 className="font-normal pt-1 text-ja-gray">
              {descriptionText2}
            </h2>
          </div>
        </p>
        <p className=" flex flex-row gap-2  font-poppins font-semibold text-xs pb-3">
          <Clock
            className="  text-ja-white bg-ja-light-light-gray border border-ja-dark-blue rounded-md "
            size={24}
            fill="ja-light-gray"
          />
          <div>
            {headlineText3}
            <h2 className="font-normal pt-1 text-ja-gray">
              {descriptionText3}
            </h2>
          </div>
        </p>
        <p className=" flex flex-row gap-2  font-poppins font-semibold text-xs pb-3">
          <Award
            className="  text-ja-white bg-ja-light-light-gray border border-ja-dark-blue rounded-md "
            size={24}
            fill="ja-light-gray"
          />
          <div>{headlineText4}</div>
        </p>
        <h1 className="py-5 px-3 text-ja-light-blue font-poppins font-semibold text-xl pb-2">
          Select Duration
        </h1>
      </div>
    </div>
  );
}

export default ExclusiveUpgradeMainCard;
