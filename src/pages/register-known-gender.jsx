import React, { useState } from "react";
import Navigation from "../components/nav-bar/CreateProfileNavigation";
import { useNavigate } from "react-router-dom";

const RegisterKnownGenderComponent = ({
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
  const handlePersonalDetails = () => {
    navigate("/career-details");
  };
  return (
    <div className="bg-ja-white pb-4 ">
      <Navigation title="Personal Details" />
      <main className="flex justify-center flex-col px-4">
        <div>
          <form onSubmit={handleSubmit}>
            <div className="py-4 flex flex-col">
              <div className="text-ja-gray">Date of Birth *</div>

              <label>
                <input
                  type="date"
                  className="w-full py-3 border-b border-ja-black"
                  name="dateOfBirth"
                  placeholder="Date of birth *"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="py-4">
              <label>
                <div className="text-ja-gray py-2">Height *</div>

                <input
                  type="text"
                  name="height"
                  className="w-full py-3 border-b border-ja-black"
                  placeholder="Height"
                  value={formData.height}
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="py-4 flex flex-col">
              <div className="text-ja-gray py-1">Country *</div>

              <label>
                <select
                  name="country"
                  className="w-full py-3 border-b border-ja-black"
                  value={formData.country}
                  onChange={handleChange}
                >
                  <option value="usa">USA</option>
                  <option value="canada">Canada</option>
                </select>
              </label>
            </div>

            <div className="py-4">
              <label>
                <div className="text-ja-gray py-1">City *</div>

                <input
                  type="text"
                  name="city"
                  className="w-full py-3 border-b border-ja-black"
                  value={formData.city}
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="py-4">
              <div className="text-ja-gray py-1">Residential Status *</div>

              <label>
                <select
                  type="text"
                  className="w-full py-3 border-b border-ja-black"
                  name="residentialStatus"
                  value={formData.residentialStatus}
                  onChange={handleChange}
                >
                  <option value="citizen">Citizen</option>
                  <option value="Permanent Resident">Permanent Resident</option>
                  <option value="work Permit">work Permit</option>
                  <option value="Student Visa">Student Visa</option>
                  <option value="Temporary Visa">Temporary Visa</option>
                  {/* Add more country options as needed */}
                </select>
              </label>
            </div>

            {/* <button type="submit">NEXT</button> */}
            <div className="text-ja-gray py-1">
              * Indicates Mandatory fields{" "}
            </div>
          </form>
        </div>
        <div
          className="bg-ja-gray text-ja-white m-0 text-ja-white   py-4 text-center"
          onClick={handlePersonalDetails}
        >
          NEXT
        </div>
      </main>
    </div>
  );
};

export default RegisterKnownGenderComponent;
