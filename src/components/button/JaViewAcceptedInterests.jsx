import React from "react";
import { ArrowRight } from "react-feather";

function JaViewAcceptedInterests() {
  return (
    <div>
      <div className="flex flex-row justify-between text-ja-red font-poppins font-semibold py-3">
        <Link>View all accepted interests</Link>
        <ArrowRight />
      </div>
    </div>
  );
}

export default JaViewAcceptedInterests;
