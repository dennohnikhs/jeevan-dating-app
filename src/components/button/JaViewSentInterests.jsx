import React from "react";
import { ArrowRight } from "react-feather";

function JaViewSentInterests() {
  return (
    <div>
      <div className="flex flex-row justify-between text-ja-red font-poppins font-semibold py-3">
        <Link>View all sent interests</Link>
        <ArrowRight />
      </div>
    </div>
  );
}

export default JaViewSentInterests;
