import React from "react";
import SearchUserByProfileId from "../../button/SearchByProfileId";

function SearchByProfileId() {
  return (
    <div className="py-3 px-3">
      <h5 className="text-xs">Search if you know profile Id</h5>
      <input
        type="text"
        name="user"
        className="w-full py-3 border-b bg-ja-white border-ja-light-gray"
        placeholder="Profile Id"
        onChange={() => handleFindProvidedId("user")}
      />
      <div className="py-10">
        <SearchUserByProfileId buttonText="Search" />
      </div>
    </div>
  );
}

export default SearchByProfileId;
