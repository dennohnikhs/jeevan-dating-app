import React from "react";

function LoginPrivacySettings({ buttonText }) {
  return (
    <button className="bg-ja-white flex  justify-center  py-2 px-2 rounded-full border border-ja-gray">
      <span className=" text-ja-black  ">{buttonText}</span>
    </button>
  );
}

export default LoginPrivacySettings;
