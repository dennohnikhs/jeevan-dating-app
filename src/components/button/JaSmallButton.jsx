import React from "react";

function JaSmallButton({ buttonText }) {
  return (
    <div className="flex  justify-center m-5">
      <button className="bg-ja-white text-ja-red font-bold py-2 px-4 rounded-lg border border-ja-red">
        {buttonText}
      </button>
    </div>
  );
}

export default JaSmallButton;
