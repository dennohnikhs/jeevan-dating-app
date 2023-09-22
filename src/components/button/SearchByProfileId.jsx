import React from "react";

function SearchUserByProfileId({ buttonText }) {
  const handleSearchUserByProfileId = () => {
    console.log("find user by profile id!!");
  };

  return (
    <div className=" py-3">
      <button
        onClick={handleSearchUserByProfileId}
        className="bg-ja-red flex w-full  justify-center text-ja-white font-bold py-4 text-lg "
      >
        {buttonText}
      </button>
    </div>
  );
}

export default SearchUserByProfileId;
