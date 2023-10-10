import React, { useState } from "react";
import { Award, Check, Clock, PhoneIncoming, X } from "react-feather";
import SelectDurationCard from "./UpgradeMiniCard";

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
  const [selectedPlan, setSelectedPlan] = useState("3-months");

  const handleSelectPlan = (option) => {
    setSelectedPlan(option);
  };
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
        <div className="flex flex-row gap-2 py-6 justify-center">
          <SelectDurationCard
            durationInMonths="3-months"
            discount="$950"
            amount="$475"
            amountPayableMonthly="$158.33/mon"
            selectedPlan={selectedPlan}
            onSelectPlan={handleSelectPlan}
          />
          <SelectDurationCard
            durationInMonths="6-months"
            discount="$1,500"
            amount="$750"
            amountPayableMonthly="$125/mon"
            selectedPlan={selectedPlan}
            onSelectPlan={handleSelectPlan}
          />
          <SelectDurationCard
            durationInMonths="12 months"
            discount="$2,500"
            amount="$1,250"
            amountPayableMonthly="."
            selectedPlan={selectedPlan}
            onSelectPlan={handleSelectPlan}
          />
        </div>
      </div>
    </div>
  );
}

export default ExclusiveUpgradeMainCard;
