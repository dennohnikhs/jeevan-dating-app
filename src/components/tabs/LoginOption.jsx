import React, { useState } from "react";

const LoginOptionTabs = () => {
  const [selectedTab, setSelectedTab] = useState("email");

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="py-4 px-3">
      <div className="flex justify-between flex-row">
        <div className="py-3">
          <label htmlFor="emailTab">Email</label>
          <input
            type="radio"
            id="emailTab"
            name="tab"
            checked={selectedTab === "email"}
            onChange={() => handleTabChange("email")}
          />
        </div>
        <div className="py-3">
          <label htmlFor="phoneTab">Phone Number</label>
          <input
            type="radio"
            id="phoneTab"
            name="tab"
            checked={selectedTab === "phone"}
            onChange={() => handleTabChange("phone")}
          />
        </div>
      </div>
      {selectedTab === "email" && (
        <div>
          {/* <label htmlFor="email">Email:</label> */}
          <input
            className="w-full py-3 border-b bg-ja-white border-ja-light-gray"
            type="email"
            placeholder="Email ID *"
          />
        </div>
      )}
      {selectedTab === "phone" && (
        <div className="flex flex-row justify-between">
          {/* <label htmlFor="phoneNumber">Phone Number:</label> */}
          <select
            className="w-md py-3 border-b bg-ja-white border-ja-light-gray"
            id="countryCode"
            name="countryCode"
          >
            <option value="+1">+1 (USA)</option>
            <option value="+44">+44 (UK)</option>
            <option value="+91">+91 (India)</option>
          </select>
          <input
            className="w-full py-3 border-b bg-ja-white border-ja-light-gray"
            type="tel"
            placeholder="Enter your phone number"
          />
        </div>
      )}
    </div>
  );
};

export default LoginOptionTabs;
