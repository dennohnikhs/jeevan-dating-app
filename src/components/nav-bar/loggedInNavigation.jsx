import React, { useState } from "react";
import { Bell, Home, User } from "react-feather";
import LoggedInUserProfile from "../sidebar/UserProfile";

function LoggedInNavigation({ title }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleProfileSideBarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="top-0 left-0 right-0 sticky bg-ja-black flex flex-row justify-between font-bold z-50">
      <button
        className="flex flex-row py-6 px-4 text-white gap-3 text-ja-white"
        onClick={handleProfileSideBarToggle}
      >
        <User />
        <h1 className="text-ja-white text-xl">{title}</h1>
      </button>
      {isSidebarOpen && (
        <LoggedInUserProfile toggleSidebar={handleProfileSideBarToggle} />
      )}
      <div className="flex flex-row text-white py-6 px-4 bg-ja-black gap-3">
        <User />
        <Bell />
      </div>
    </div>
  );
}

export default LoggedInNavigation;
