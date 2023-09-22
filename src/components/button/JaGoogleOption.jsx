import React from "react";
import { User } from "react-feather";

function JaGoogleOption({ buttonText }) {
  const handleLoginWithGoogle = () => {
    console.log("Login with Google");
  };

  return (
    <div className="px-3 py-3">
      <button
        onClick={handleLoginWithGoogle}
        className="bg-ja-white flex  justify-center  py-3 w-full border border-ja-red"
      >
        <span className=" text-ja-red  font-bold px-2 ">
          <User />
        </span>
        <span className=" text-ja-red text-ja-red font-bold ">
          {buttonText}
        </span>
      </button>
    </div>
  );
}

export default JaGoogleOption;
