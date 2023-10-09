import React from "react";

function QuickBenefitsCard({ headline, numberOfReports, description, amount }) {
  return (
    <div className="flex flex-row justify-between py-3 px-3 bg-ja-white shadow-lg  rounded-lg">
      <div>
        <div className="flex flex-row gap-2">
          <h1 className="text-ja-light-blue font-poppins font-bold text-xl pb-2">
            {headline}
          </h1>
          <span className="pb-2 mt-1">({numberOfReports} reports)</span>
        </div>
        <p className="font-poppins font-normal text-xs">{description}</p>
      </div>
      <h1 className="whitespace-nowrap font-poppins font-bold text-xs">
        {amount}
      </h1>
    </div>
  );
}

export default QuickBenefitsCard;
