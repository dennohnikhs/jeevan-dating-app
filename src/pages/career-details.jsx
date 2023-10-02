import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavigateToPersonalDetails from "../components/nav-bar/PersonalDetails";

const CareerDetails = ({
  gender,
  dateOfBirth,
  height,
  country,
  city,
  residentialStatus,
  // onSubmit,
}) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    gender: gender || "",
    dateOfBirth: dateOfBirth || "",
    height: height || "",
    country: country || "",
    city: city || "",
    residentialStatus: residentialStatus || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(formData);
  };

  const handleCareerDetails = () => {
    navigate("/social-details");
  };
  return (
    <div className="bg-ja-white pb-4 ">
      <NavigateToPersonalDetails title="Career Details" />
      <main className="flex justify-center flex-col px-4">
        <div className="pb-5">
          <form onSubmit={handleSubmit}>
            <div className="py-4 flex flex-col">
              <div className="text-ja-black text-lg font-solitreo font-bold">
                Education
              </div>
            </div>

            <div className="py-4 flex flex-col">
              <div className="text-ja-gray">Highest Education *</div>

              <label>
                <input
                  type="text"
                  className="w-full py-3 border-b border-ja-black"
                  name="highestEducation"
                  placeholder="B.FTech *"
                  value={formData.highestEducation}
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="py-4">
              <label>
                <div className="text-ja-black text-lg  font-solitreo font-bold">
                  Work experience *
                </div>
              </label>
            </div>

            <div className="py-4 flex flex-col">
              <div className="text-ja-gray py-1">Employed In *</div>

              <label>
                <select
                  name="country"
                  type="radio"
                  className="w-full py-3 border-b bg-ja-white border-ja-black"
                  value={formData.employedIn}
                  onChange={handleChange}
                >
                  <option value="usa">USA</option>
                  <option value="canada">Canada</option>
                </select>
              </label>
            </div>

            <div className="py-4 flex flex-col">
              <div className="text-ja-gray py-1">Occupation *</div>

              <label>
                <select
                  name="country"
                  type="radio"
                  className="w-full py-3 border-b bg-ja-white border-ja-black"
                  value={formData.employedIn}
                  onChange={handleChange}
                >
                  <option value="usa">Pilot</option>
                  <option value="canada">Engineer</option>
                </select>
              </label>
            </div>
            <div className="py-4 flex flex-col">
              <div className="text-ja-gray py-1">Income *</div>

              <label>
                <select
                  name="country"
                  type="radio"
                  className="w-full py-3 border-b bg-ja-white border-ja-black"
                  value={formData.employedIn}
                  onChange={handleChange}
                >
                  <option value="usa">$100,000 - 150,000</option>
                  <option value="canada">$100,000 - 150,000</option>
                </select>
              </label>
            </div>
          </form>
        </div>
        <div
          className="bg-ja-red text-ja-white  text-ja-white   py-4 text-center"
          onClick={handleCareerDetails}
        >
          NEXT
        </div>
      </main>
    </div>
  );
};

export default CareerDetails;
