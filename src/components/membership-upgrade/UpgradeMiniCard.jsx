import React from "react";
import { Circle } from "react-feather";

function SelectDurationCard({
  durationInMonths,
  discount,
  amount,
  amountPayableMonthly,
  selectedPlan,
  onSelectPlan,
}) {
  const isSelected = selectedPlan === durationInMonths;

  return (
    <div
      onClick={() => onSelectPlan(durationInMonths)}
      className={`px-4 py-2 border border-ja-black text-ja-light-gray rounded-md font-poppins text-xs justify-center flex flex-col items-center ${
        isSelected ? " text-white" : ""
      }`}
    >
      <h1
        className={`border-b border-ja-black whitespace-nowrap py-2 px-1  bg-ja-light-light-gray rounded-lg text-xs ${
          isSelected ? "bg-red-500   text-white" : ""
        }`}
      >
        {durationInMonths}
      </h1>
      <h1
        className={`py-1 line-through${
          isSelected ? " bg-ja-white text-ja-light-gray" : ""
        }`}
      >
        {discount}
      </h1>
      <h1
        className={`font-bold text-normal text-ja-dark-blue py-1 ${
          isSelected ? "text-red-500" : ""
        }`}
      >
        {amount}
      </h1>
      <h1 className={`py-1 ${isSelected ? "text-red-500" : ""}`}>
        {amountPayableMonthly}
      </h1>
      <div className="flex justify-center items-center py-1">
        <Circle
          className={` text-normal text-ja-light-gray py-1 ${
            isSelected ? "text-red-500 fill-ja-red" : ""
          }`}
        />
      </div>
    </div>
  );
}

export default SelectDurationCard;
