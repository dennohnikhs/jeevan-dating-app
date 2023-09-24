import React, { useState } from "react";
import SearchByCriteria from "./search/SearchByCriteria";
import SearchByProfileId from "./search/SearchByProfileId";

const SearchPartnerTabs = () => {
  const [selectedTab, setSelectedTab] = useState("searchByCriteriaTab");

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div>
      <div className="flex justify-between flex-row bg-ja-black">
        <button
          onClick={() => handleTabChange("searchByCriteriaTab")}
          className={`py-3 text-ja-light-gray font-bold font-lg px-2  ${
            selectedTab === "searchByCriteriaTab"
              ? "border-b-2 border-ja-red text-ja-white"
              : ""
          }`}
        >
          Search By Criteria
        </button>
        <button
          onClick={() => handleTabChange("searchByProfileID")}
          className={`py-3 text-ja-light-gray font-bold font-lg px-2 ${
            selectedTab === "searchByProfileID"
              ? "border-b-2 border-ja-red text-ja-white"
              : ""
          }`}
        >
          Search By Profile ID
        </button>
      </div>
      {selectedTab === "searchByCriteriaTab" && <SearchByCriteria />}
      {selectedTab === "searchByProfileID" && <SearchByProfileId />}
    </div>
  );
};

export default SearchPartnerTabs;
