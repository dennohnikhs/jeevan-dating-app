import React from "react";
import { Bell, Home, User } from "react-feather";

function LoggedInNavigation({ title }) {
  const handleProfileSideBarToggle = () => {
    console.log("korom");
  };
  return (
    <div className="top-0 left-0 right-0 sticky bg-ja-black flex flex-row justify-between font-bold z-50 ">
      <button
        className="flex flex-row py-4 px-4 text-white gap-3 text-ja-white"
        onClick={handleProfileSideBarToggle}
      >
        <User />
        <h1 className="text-ja-white text-xl">{title}</h1>
      </button>
      <div className="flex flex-row text-white py-3 px-4 bg-ja-black gap-3">
        <User />
        <Bell />
      </div>
    </div>
  );
}

export default LoggedInNavigation;
