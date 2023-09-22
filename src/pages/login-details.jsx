// ProfileForm.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Settings } from "react-feather";
import LoginPrivacySettings from "../components/button/JaPrivacy";
import SocialDetailsNavigation from "../components/nav-bar/SocialDetails";

const LoginDetailsPage = ({
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

  const handleRedirectToDashboard = () => {
    navigate("/dashboard");
  };
  return (
    <div className="bg-ja-white">
      <nav>
        <SocialDetailsNavigation title="Login Details" />
      </nav>
      <main className="flex justify-center flex-col px-4">
        <div className="pb-10">
          <form onSubmit={handleSubmit}>
            <div className="py-4 flex flex-row justify-between">
              <div>
                <label>
                  <input
                    type="name"
                    name="fullName"
                    placeholder="Full Name *"
                    className="w-lg py-3 border-b bg-ja-white border-ja-black"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </label>
              </div>

              <div>
                <label className="flex flex-row py-4 px-3">
                  <div className="flex flex-col text-ja-gray font-semi-bold text-[14px]">
                    Don't show
                  </div>
                  <div className=" px-2 text-bold">
                    <Settings className="bg-la-black" />
                  </div>
                </label>
              </div>
            </div>
            <div className="py-4 flex flex-col">
              <label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email ID *"
                  className="w-full py-3 border-b bg-ja-white border-ja-black"
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <div className="w-md py-3 border-b bg-ja-white text-ja-gray border-ja-black">
                phone no. *
              </div>
              <div className="py-4 flex flex-row gap-2">
                <select
                  className="w-md py-3 border-b bg-ja-white border-ja-black"
                  id="countryCode"
                  name="countryCode"
                >
                  <option value="+1">+1 (USA)</option>
                  <option value="+44">+44 (UK)</option>
                  <option value="+91">+91 (India)</option>
                </select>
                <label>
                  <input
                    type="phone"
                    name="phone"
                    className="w-full py-3 border-b bg-ja-white border-ja-black"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </label>
              </div>
            </div>
            <div className="text-ja-black py-2 ">Contact Privacy Settings</div>
          </form>
          <div className="flex flex-col">
            <div className="flex flex-row py-3 gap-3">
              <LoginPrivacySettings buttonText="show to all" />
              <LoginPrivacySettings buttonText="Hide from all" />
            </div>
            <div className="py-3">
              <LoginPrivacySettings buttonText="Show to Interest Sent/Accepted members" />
            </div>
          </div>
        </div>
        <div className="text-ja-gray py-2 text-center">
          I agree to terms and conditions
        </div>
        <div
          className="bg-ja-gray text-ja-white text-ja-white   py-4 text-center"
          onClick={handleRedirectToDashboard}
        >
          NEXT-YOU ARE ALMOST THERE
        </div>
      </main>
    </div>
  );
};

export default LoginDetailsPage;
