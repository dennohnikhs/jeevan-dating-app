import React from "react";

function JaUserSentInterests({ totalUserSentInterests }) {
  return (
    <button className="bg-light-violet rounded-full border border-ja-red py-2 px-4 justify-center">
      <div className="font-bold text-ja-black whitespace-nowrap">
        Sent <span>({totalUserSentInterests})</span>
      </div>
    </button>
  );
}

export default JaUserSentInterests;
