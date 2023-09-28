import React from "react";

function JaUserAcceptedInterestsBt({ totalAcceptedInterests }) {
  return (
    <button className="bg-light-violet rounded-full border border-ja-red py-2 px-4 justify-center">
      <span className="font-bold text-ja-black whitespace-nowrap">
        Accepted ({totalAcceptedInterests})
      </span>
    </button>
  );
}

export default JaUserAcceptedInterestsBt;
