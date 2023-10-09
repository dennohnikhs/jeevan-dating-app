import React from "react";
import { ChevronRight } from "react-feather";
import { Link } from "react-router-dom";

function MembershipTypeCard({
  membershipTypeName,
  typeDescription,
  discount,
  price,
  duration,
}) {
  return (
    <div className="flex flex-row justify-between text-ja-black border gap-3 bg-ja-white shadow-sm py-5 px-3 rounded-lg">
      <div>
        <h2 className="text-ja-light-blue font-poppins font-bold text-xl pb-2">
          {membershipTypeName}
        </h2>
        <h4 className="font-poppins font-normal text-xs">{typeDescription}</h4>
      </div>
      <div>
        <h5 className="line-through text-sm">{discount}</h5>
        <h2 className="font-poppins font-bold">{price}</h2>
        <h4 className="whitespace-nowrap font-poppins font-normal text-xs">
          {duration}
        </h4>
      </div>
      <div className="mt-6">
        <Link path to="/upgrade-plan">
          <ChevronRight className="text-ja-red" />
        </Link>
      </div>
    </div>
  );
}

export default MembershipTypeCard;
