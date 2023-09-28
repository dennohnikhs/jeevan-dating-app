import React from "react";
import { Star, User } from "react-feather";

function UserActivityTopMenu({ profileVisits, shortlistedProfiles }) {
  return (
    <div>
      <div className=" px-3 py-5 flex flex-row justify-between">
        <button className="flex flex-row text-ja-black rounded-lg justify-center shadow-2xl shadow-ja-black py-4 px-4 gap-2">
          <div className="mt-2 text-ja-black font-bold">
            <User />
          </div>
          <div>
            <h3 className="font-bold">Profile Visits</h3>
            <h2>{profileVisits} profiles</h2>
          </div>
        </button>
        <button className="flex flex-row text-ja-black rounded-lg justify-center shadow-2xl shadow-ja-black py-4 px-4 gap-2">
          <Star className="text-ja-black mt-2 font-bold" />
          <div>
            <h3 className="font-bold">Shortlisted</h3>
            <h2>{shortlistedProfiles} profiles</h2>
          </div>
        </button>
      </div>
      <div className="py-3 px-4 text-2xl font-semi-bold">Interests</div>
    </div>
  );
}

export default UserActivityTopMenu;
