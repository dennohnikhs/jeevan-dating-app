import React from "react";
import {
  User,
  Search,
  X,
  Save,
  StopCircle,
  Triangle,
  Sun,
  PhoneCall,
  Framer,
  Award,
  ThumbsUp,
  Settings,
  HelpCircle,
} from "react-feather";
import { Link } from "react-router-dom";
import UpgradeMembership from "../button/UpgradeMembership";

const LoggedInUserProfile = ({ toggleSidebar }) => {
  const renderSideItem = (title, path, Icon) => {
    return (
      <li className="py-2 text-ja-black text-lg font-semi-bold flex flex-row">
        <div className="px-4">{Icon && <Icon />}</div>
        <div>{title}</div>
        <Link to={path}></Link>
      </li>
    );
  };
  return (
    <div
      className={`fixed top-0 left-0 h-full w-4/5 z-30 w bg-ja-white text-white transition-transform transform translate-x-0 `}
    >
      <div className="flex  p-8 justify-between bg-ja-black">
        <h1 className="text-ja-white font-bold text-xl">UserName</h1>

        <button
          onClick={toggleSidebar}
          className="text-white  font-bold text-xl hover:text-ja-red transition-all duration-300 ease-in-out cursor-pointer"
        >
          <X />
        </button>
      </div>
      <div className="sidebar-content py-10 px-3">
        <ul>
          {renderSideItem("Partner Preferences", "/#partner-preferences", User)}
          {renderSideItem("Search by Keyword", "/#search-by-keyword", Search)}",
          {renderSideItem("Saved Searches", "/#saved-searches", Save)}",
          {renderSideItem(
            "Blocked /Ignored Profiles",
            "/#blocked-profiles",
            StopCircle
          )}
          ",
          {renderSideItem("Kundi Matches", "/#kundi-matches", Triangle)}
          {renderSideItem("Astrology Services", "/#astrology-services", Sun)}",
          {renderSideItem("Phonebook", "/#phonebook", PhoneCall)}
          {renderSideItem("Safety Center", "/#safety-center", Framer)}
          {renderSideItem("Sucess Stories", "/#success-stories", Award)}
          {renderSideItem("Rate Us", "/#rate-us", ThumbsUp)}
          {renderSideItem("Settings", "/#settings", Settings)}
          {renderSideItem("Help & Support", "/#help-support", HelpCircle)}
        </ul>
      </div>
      <div className=" bg-ja-white bottom-0 left-0 right-0 sticky z-100">
        <div className="w-full border border-ja-light-gray px-3 mb-3 "></div>
        <div className="text-ja-black flex justify-center">
          <h1>Flat 67% OFF till 27 sep</h1>
        </div>
        <div className="flex justify-center ">
          <UpgradeMembership buttonText="UPGRADE MEMBERSHIP" />
        </div>
      </div>
    </div>
  );
};

export default LoggedInUserProfile;
