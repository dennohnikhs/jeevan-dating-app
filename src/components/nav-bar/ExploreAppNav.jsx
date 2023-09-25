import React, { useState } from "react";
import { Menu } from "react-feather";
import Sidebar from "../sidebar/ProfileSidebar";
import { useNavigate } from "react-router-dom";

function ExploreJeevanNavigation() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handleCreateProfileRedirect = () => {
    navigate("/create-profile");
  };
  return (
    <div className="bg-ja-black flex flex-col">
      <div className="flex flex-row justify-between py-3 px-3">
        <button className="text-ja-white" onClick={toggleSidebar}>
          <Menu />
        </button>
        {isSidebarOpen && <Sidebar toggleSidebar={toggleSidebar} />}
        <button
          className="text-ja-white font-bold"
          onClick={handleCreateProfileRedirect}
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default ExploreJeevanNavigation;
