import React from "react";
import { X } from "react-feather";

import { Link } from "react-router-dom";
import GoToLoginPage from "../button/JaGuestLogin";
import GoToCreateProfilePage from "../button/JaRegister";

const Sidebar = ({ toggleSidebar }) => {
  const renderSideItem = (title, path) => {
    return (
      <li className="py-2 text-ja-black text-lg font-semi-bold">
        <Link to={path}>{title}</Link>
      </li>
    );
  };
  return (
    <div
      className={`fixed top-0 left-0 h-full w-4/5 z-30 w bg-ja-white text-white transition-transform transform translate-x-0 `}
    >
      <div className="flex  p-8 justify-between bg-ja-black">
        <h1 className="text-ja-white font-bold text-xl">Hi Guest!</h1>

        <button
          onClick={toggleSidebar}
          className="text-white  font-bold text-xl hover:text-ja-red transition-all duration-300 ease-in-out cursor-pointer"
        >
          <X />
        </button>
      </div>
      <div className="sidebar-content py-10 px-3">
        <ul>
          {renderSideItem("Search", "/explore-app")}
          {renderSideItem("About Us", "/#")}
          {renderSideItem("Success Stories", "/#")}
        </ul>
      </div>
      <div className="flex flex-row  justify-between px-3 py-2">
        <GoToLoginPage buttonText="Login" />
        <GoToCreateProfilePage buttonText="Register" />
      </div>
    </div>
  );
};

export default Sidebar;
