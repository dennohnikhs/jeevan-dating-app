import React from "react";

function SportLightCard({
  spotlightTypeName,
  spotlightPayableAmount,
  spotlightDescription,
}) {
  return (
    <div className="py-3 px-4 block border border-ja-light-light-gray rounded-md bg-ja-white w-full">
      <div className="flex flex-row gap-3 ">
        <input type="checkbox" />
        <h1 className="text-ja-dark-blue font-semibold">{spotlightTypeName}</h1>
        <h1 className="text-ja-red text-sm">{spotlightPayableAmount}</h1>
      </div>
      <h1 className="py-3 text-ja-light-gray text-xs whitespace-nowrap">
        {spotlightDescription}
      </h1>
    </div>
  );
}

export default SportLightCard;
