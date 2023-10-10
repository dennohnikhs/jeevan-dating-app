import React, { useState } from "react";
import { Check, X } from "react-feather";
import SelectDurationCard from "./UpgradeMiniCard";

function ProUpgradeMainCard({
  cardTypeName,
  enabledInfoText1,
  enabledInfoText2,
  enabledInfoText3,
  enabledInfoText4,
  enabledInfoText5,
  enabledInfoText6,
  disabledInfoText1,
  disabledInfoText2,
}) {
  const [selectedPlan, setSelectedPlan] = useState("3-months");

  const handleSelectPlan = (option) => {
    setSelectedPlan(option);
  };
  return (
    <div>
      <div className="text-ja-black border gap-3 bg-ja-white shadow-lg py-5 px-3 rounded-lg">
        <h1 className="text-ja-light-blue font-poppins font-bold text-xl pb-3">
          {cardTypeName}
        </h1>
        <p className=" flex flex-row gap-2 whitespace-nowrap font-poppins font-normal text-xs pb-3">
          {" "}
          <Check
            className="  text-ja-dark-blue bg-ja-white border border-ja-dark-blue rounded-full "
            size={15}
          />
          {enabledInfoText1}
        </p>
        <p className="flex flex-row gap-2  whitespace-nowrap font-poppins font-normal text-xs pb-3">
          {" "}
          <Check
            className="text-ja-dark-blue bg-ja-white border border-ja-dark-blue rounded-full "
            size={15}
          />
          {enabledInfoText2}
        </p>
        <p className="flex flex-row gap-2 whitespace-nowrap font-poppins font-normal text-xs pb-3">
          {" "}
          <Check
            className="text-ja-dark-blue bg-ja-white border border-ja-dark-blue rounded-full "
            size={15}
          />
          {enabledInfoText3}
        </p>
        <p className="flex flex-row gap-2 whitespace-nowrap font-poppins font-normal text-xs pb-3">
          {" "}
          <Check
            className="text-ja-dark-blue bg-ja-white border border-ja-dark-blue rounded-full "
            size={15}
          />
          {enabledInfoText4}
        </p>
        <p className="flex flex-row gap-2  font-poppins font-normal text-xs pb-3">
          {" "}
          <Check
            className="text-ja-dark-blue bg-ja-white border border-ja-dark-blue rounded-full "
            size={15}
          />
          {enabledInfoText5}
        </p>
        <p className="flex flex-row gap-2 whitespace-nowrap font-poppins font-normal text-xs pb-3">
          {" "}
          <Check
            className="text-ja-dark-blue bg-ja-white border border-ja-dark-blue rounded-full "
            size={15}
          />
          {enabledInfoText6}
        </p>
        <p className="flex flex-row gap-2 whitespace-nowrap font-poppins font-normal text-xs pb-3 opacity-50">
          {" "}
          <X
            className="text-ja-dark-blue bg-ja-white border border-ja-dark-blue rounded-full opacity-50 "
            size={15}
          />
          {disabledInfoText1}
        </p>
        <p className="flex flex-row gap-2 whitespace-nowrap font-poppins font-normal text-xs pb-3 opacity-50">
          {" "}
          <X
            className="text-ja-dark-blue bg-ja-white border border-ja-dark-blue rounded-full opacity-50 "
            size={15}
          />
          {disabledInfoText2}
        </p>
        <h1 className="py-5 px-3 text-ja-light-blue font-poppins font-semibold text-xl pb-2">
          Select Duration
        </h1>
        <div className="flex flex-row gap-2 py-6 justify-center">
          <SelectDurationCard
            durationInMonths="3-months"
            discount="$90"
            amount="$27.9"
            amountPayableMonthly="$9.3/mon"
            selectedPlan={selectedPlan}
            onSelectPlan={handleSelectPlan}
          />
          <SelectDurationCard
            durationInMonths="6-months"
            discount="$125"
            amount="$38.75"
            amountPayableMonthly="$6.46/mon"
            selectedPlan={selectedPlan}
            onSelectPlan={handleSelectPlan}
          />
          <SelectDurationCard
            durationInMonths="Till Marriage"
            discount="$250"
            amount="$77.5"
            amountPayableMonthly="."
            selectedPlan={selectedPlan}
            onSelectPlan={handleSelectPlan}
          />
        </div>
      </div>
    </div>
  );
}

export default ProUpgradeMainCard;
