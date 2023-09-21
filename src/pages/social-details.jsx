// ProfileForm.js
import React, { useState } from "react";
import NavigationHome from "../components/nav-bar/RegisterNavigation";
import { useNavigate } from "react-router-dom";
import CareerDetailsNavigation from "../components/nav-bar/CareerDetails";

const SocialDetails = ({
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

  const handleLoginDetails = () => {
    navigate("/login");
  };
  return (
    <div className="bg-ja-white pb-4 ">
      <CareerDetailsNavigation title="Social Details" />
      <main className="flex justify-center flex-col px-4">
        <div className="pb-5">
          <form onSubmit={handleSubmit}>
            <div className="py-4 flex flex-col">
              <div className="text-ja-gray py-1">Marital Status *</div>

              <label>
                <select
                  name="marital status"
                  className="w-full py-3 border-b bg-ja-white border-ja-black"
                  value={formData.maritalStatus}
                  onChange={handleChange}
                >
                  <option value="">Widowed</option>
                  <option value="">Never Married</option>
                  <option value="">Divorced</option>
                </select>
              </label>
            </div>

            <div className="py-4 flex flex-col">
              <div className="text-ja-gray py-1">Have Children *</div>

              <label>
                <select
                  name="marital status"
                  className="w-full py-3 border-b bg-ja-white border-ja-black"
                  value={formData.maritalStatus}
                  onChange={handleChange}
                >
                  <option value="">Yes ,Living Separately</option>
                  <option value="">Yes ,Living Separately</option>
                  <option value="">No</option>
                  <option value="">Yes Living Together</option>
                </select>
              </label>
            </div>

            <div className="py-4 flex flex-col">
              <div className="text-ja-gray py-1">Mother Tongue *</div>

              <label>
                <select
                  name="mother tongue"
                  className="w-full py-3 border-b bg-ja-white border-ja-black"
                  value={formData.motherTongue}
                  onChange={handleChange}
                >
                  <option value="">Urdu</option>
                  <option value="">Hryanvi</option>
                  <option value="">Gujarati</option>
                </select>
              </label>
            </div>

            <div className="py-4 flex flex-col">
              <div className="text-ja-gray py-1">Religion *</div>

              <label>
                <select
                  name="religin"
                  className="w-full py-3 bg-ja-white border-b border-ja-black"
                  value={formData.religion}
                  onChange={handleChange}
                >
                  <option value="">Hindu</option>
                  <option value="">Christian</option>
                  <option value="">Budhist</option>
                </select>
              </label>
            </div>
            <div>
              <label className="flex flex-row">
                <div className="py-4 px-5 text-bold">
                  <input
                    type="checkbox"
                    id="checkboxId"
                    name="checkboxGroup"
                    value="checkbox1"
                  />
                </div>
                <div className="flex flex-col">
                  <span> Caste no bar</span>
                  <span> I am open to marry people of all castes</span>
                </div>
              </label>
            </div>
            <div className="py-4 flex flex-col">
              <div className="text-ja-gray py-1">Caste *</div>

              <label>
                <select
                  name="caste"
                  className="w-full py-3 border-b bg-ja-white border-ja-black"
                  value={formData.caste}
                  onChange={handleChange}
                >
                  <option value="">Digamber-Oswal</option>
                  <option value="">Digamber-others</option>
                  <option value="">Digamber-orwal</option>
                  <option value="">Digamber-vaishta</option>
                </select>
              </label>
            </div>
            <div className="py-4 flex flex-col">
              <div className="text-ja-gray py-1">
                Horoscope Must for Marriage? (optional) *
              </div>

              <label>
                <select
                  name="horoscope"
                  className="w-full py-3 border-b bg-ja-white border-ja-black"
                  value={formData.horoscope}
                  onChange={handleChange}
                >
                  <option value="">Must</option>
                  <option value="">Not Necessary</option>
                </select>
              </label>
            </div>
            <div className="py-4 flex flex-col">
              <div className="text-ja-gray py-1">Manglik (optional) *</div>

              <label>
                <select
                  name="Manglik"
                  className="w-full py-3 border-b bg-ja-white border-ja-black"
                  value={formData.mangalik}
                  onChange={handleChange}
                >
                  <option value="">Mangalik</option>
                  <option value="">Non Manglik</option>
                  <option value="">Angshik (Partial manglik)</option>
                </select>
              </label>
            </div>
          </form>
        </div>
        <div
          className="bg-ja-red text-ja-white  text-ja-white   py-4 text-center"
          onClick={handleLoginDetails}
        >
          NEXT
        </div>
      </main>
    </div>
  );
};

export default SocialDetails;
