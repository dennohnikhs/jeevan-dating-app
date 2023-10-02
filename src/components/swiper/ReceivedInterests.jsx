import React from "react";
import { ArrowRight, CreditCard } from "react-feather";
import { Link } from "react-router-dom";

function ReceivedInterests() {
  return (
    <div className="px-4  py-3">
      <div className="bg-ja-light-gray py-5 px-4 rounded-md">
        <div className="flex justify-center flex-col  items-center   py-8">
          <CreditCard />
          <CreditCard />
          <CreditCard />
        </div>
        <div className="ja-black flex justify-center py-2">
          Receive interest with spotlight!
        </div>
        <div className="ja-gray flex justify-center py-1 items-center text-center ">
          Remain on top of the list and increase your chances of receiving more
          interests
        </div>
        <div className="text-ja-red flex justify-center py-6 pb-20 font-bold">
          Tell me more
        </div>
      </div>
    </div>
  );
}

export default ReceivedInterests;
