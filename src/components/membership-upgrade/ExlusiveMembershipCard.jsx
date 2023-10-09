import React from "react";
import { Check, ChevronRight } from "react-feather";
import { Link } from "react-router-dom";

function ExclusiveMembershipCard({
  membershipTypeName,
  typeDescription,
  discount,
  price,
  duration,
}) {
  return (
    <div className="shadow-sm ">
      <div className="flex flex-row justify-between text-ja-black  gap-3 bg-ja-white  py-5 px-3 rounded-t-lg shadow-sm  ">
        <div>
          <h2 className="text-ja-light-blue font-poppins font-bold text-xl pb-2">
            {membershipTypeName}
          </h2>
          <h4 className="font-poppins font-normal text-xs">
            {typeDescription}
          </h4>
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
      <div className=" bg-ja-white rounded-b-lg shadow-sm py-5 px-3 items-center   border-t">
        <ul className="text-xs font-poppins flex flex-col gap-3">
          A personal relationship manager will:
          <li className="flex flex-row gap-2 items-center">
            <Check
              className="text-ja-dark-blue bg-ja-white border border-ja-dark-blue rounded-full "
              size={15}
            />
            Work on your profile & enhance it
          </li>
          <li className="flex flex-row gap-2 items-center">
            <Check
              className="text-ja-dark-blue bg-ja-white border border-ja-dark-blue rounded-full "
              size={15}
            />
            Send interests to candidates of your choice
          </li>
          <li className="flex flex-row gap-2 items-center">
            <Check
              className="text-ja-dark-blue bg-ja-white border border-ja-dark-blue rounded-full "
              size={15}
            />
            Arrange meeting with prospective candidates
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ExclusiveMembershipCard;
