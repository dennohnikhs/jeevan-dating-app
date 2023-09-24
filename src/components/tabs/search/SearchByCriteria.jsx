import React, { useState } from "react";
import Select from "react-select";

const casteOptions = [
  { value: "Banial All", label: "Banial All" },
  { value: "Bania", label: "Bania" },
  { value: "Bania-Agarwal", label: "Bania-Agarwal" },
];

const SearchByCriteria = ({
  gender,
  dateOfBirth,
  height,
  country,
  city,
  residentialStatus,
  // onSubmit,
}) => {
  const [formData, setFormData] = useState({
    gender: gender || "",
    dateOfBirth: dateOfBirth || "",
    height: height || "",
    country: country || "",
    city: city || "",
    residentialStatus: residentialStatus || "",
  });

  const [selectedOption, setSelectedOption] = useState("bride");
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  const [selectProfile, setSelectedProfile] = useState("ALL PROFILES");
  const handleProfileSelect = (option) => {
    setSelectedProfile(option);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(formData);
    console.log("Selected option:", selectedOption);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSearchByCriteria = () => {
    console.log("searching user by criteria");
  };

  //control caste options selections
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectChange = (selected) => {
    setSelectedOptions(selected);
  };

  return (
    <div className="bg-ja-white pb-4 ">
      <main className="flex justify-center flex-col px-4">
        <div className="pb-5">
          <form onSubmit={handleSubmit}>
            <div className="py-2 flex flex-row justify-center">
              <button
                onClick={() => handleOptionClick("bride")}
                className={`text-ja-red py-2 px-10 border border-ja-red 
                  ${
                    selectedOption === "bride"
                      ? "bg-ja-red text-ja-white py-2 px-10"
                      : ""
                  }`}
              >
                Bride
              </button>
              <button
                onClick={() => handleOptionClick("groom")}
                className={`text-ja-red py-2 px-10 border border-ja-red 
                  ${
                    selectedOption === "groom"
                      ? "bg-ja-red text-ja-white py-2 px-10"
                      : ""
                  }`}
              >
                Groom
              </button>
            </div>
            <div className="flex flex-row justify-center gap-2">
              <div className="py-4 flex flex-col w-full">
                <div className="text-ja-gray py-1">Min. Age </div>

                <label>
                  <select
                    name="min-Age"
                    className="w-full py-3 border-b bg-ja-white border-ja-black"
                    value={formData.minAge}
                    onChange={handleChange}
                  >
                    <option value="">21 years</option>
                    <option value="">22 years</option>
                    <option value="">23 years</option>
                  </select>
                </label>
              </div>
              <div className="py-4 flex flex-col w-full">
                <div className="text-ja-gray py-1">Max. Age </div>

                <label>
                  <select
                    name="Max-Age"
                    className="w-full py-3 border-b bg-ja-white border-ja-black"
                    value={formData.MaxAge}
                    onChange={handleChange}
                  >
                    <option value="">21 years</option>
                    <option value="">22 years</option>
                    <option value="">23 years</option>
                  </select>
                </label>
              </div>
            </div>
            <div className="flex flex-row justify-center gap-2">
              <div className="py-4 flex flex-col w-full">
                <div className="text-ja-gray py-1">Min. Height </div>

                <label>
                  <select
                    name="min-height"
                    className="w-full py-3 border-b bg-ja-white border-ja-black"
                    value={formData.minHeight}
                    onChange={handleChange}
                  >
                    <option value="">4'0'</option>
                    <option value="">4'0'</option>
                    <option value="">4'0'</option>
                  </select>
                </label>
              </div>
              <div className="py-4 flex flex-col w-full">
                <div className="text-ja-gray py-1">Max. Height </div>

                <label>
                  <select
                    name="Max-height"
                    className="w-full py-3 border-b bg-ja-white border-ja-black"
                    value={formData.MaxHeight}
                    onChange={handleChange}
                  >
                    <option value="">4'0'</option>
                    <option value="">4'0'</option>
                    <option value="">4'0'</option>
                  </select>
                </label>
              </div>
            </div>

            <div className="py-4 flex flex-col">
              <div className="text-ja-gray py-1">Religion </div>

              <label>
                <select
                  name="marital status"
                  placeholder="Select Religion"
                  className="w-full py-3 border-b bg-ja-white border-ja-black"
                  value={formData.Religion}
                  onChange={handleChange}
                >
                  <option value="">Christian</option>
                  <option value="">Hindu</option>
                  <option value="">Budhist</option>
                </select>
              </label>
            </div>
            <div className="py-4">
              <div className="text-ja-gray py-1">Castes</div>
              <Select
                options={casteOptions}
                isMulti
                value={selectedOptions}
                className="w-full py-3 border-b bg-ja-white border-ja-black"
                onChange={handleSelectChange}
              />
            </div>

            <div className="py-4 flex flex-col">
              <div className="text-ja-gray py-1">Marital Status </div>

              <label>
                <select
                  name="marital status"
                  placeholder="Select Marital Status"
                  className="w-full py-3 border-b bg-ja-white border-ja-black"
                  value={formData.MaritalStatus}
                  onChange={handleChange}
                >
                  <option value="">Doesn't matter</option>
                  <option value="">Never Married</option>
                  <option value="">Divorced</option>
                </select>
              </label>
            </div>
            <div className="py-4 flex flex-col">
              <div className="text-ja-gray py-1">Mother Tongue </div>

              <label>
                <select
                  name="mother tongue"
                  placeholder="Select Mother Tongue"
                  className="w-full py-3 border-b bg-ja-white border-ja-black"
                  value={formData.MotherTongue}
                  onChange={handleChange}
                >
                  <option value="">Doesn't matter</option>
                  <option value="">North</option>
                  <option value="">Hindi All</option>
                </select>
              </label>
            </div>
            <div className="flex flex-row justify-center gap-2">
              <div className=" w-full marker:py-4 flex flex-col">
                <div className="text-ja-gray py-1">Min. Income </div>

                <label>
                  <select
                    name="min icome"
                    className="w-full py-3 border-b bg-ja-white border-ja-black"
                    value={formData.minIncome}
                    onChange={handleChange}
                  >
                    <option value="">Rs.0</option>
                    <option value="">Rs.1 lakh</option>
                  </select>
                </label>
              </div>
              <div className=" w-full marker:py-4 flex flex-col">
                <div className="text-ja-gray py-1">Max. Income </div>

                <label>
                  <select
                    name="Max icome"
                    className="w-full py-3 border-b bg-ja-white border-ja-black"
                    value={formData.MaxIncome}
                    onChange={handleChange}
                  >
                    <option value="">Rs.0</option>
                    <option value="">Rs.1 lakh</option>
                  </select>
                </label>
              </div>
            </div>

            <div className="py-4 flex flex-col">
              <div className="text-ja-gray py-1">Country</div>

              <label>
                <select
                  name="country"
                  placeholder="Select country"
                  className="w-full py-3 border-b bg-ja-white border-ja-black"
                  value={formData.country}
                  onChange={handleChange}
                >
                  <option value="">Usa</option>
                  <option value="">Uk</option>
                  <option value="">Canada</option>
                </select>
              </label>
            </div>
            <div className="py-4 flex flex-col">
              <div className="text-ja-gray py-1">Diet</div>

              <label>
                <select
                  name="diet"
                  placeholder="Select diet"
                  className="w-full py-3 border-b bg-ja-white border-ja-black"
                  value={formData.diet}
                  onChange={handleChange}
                >
                  <option value="">Doesn't matter</option>
                  <option value="">Never Married</option>
                  <option value="">Divorced</option>
                </select>
              </label>
            </div>
            <div className="py-4 flex flex-col">
              <div className="text-ja-gray py-1">Education </div>

              <label>
                <select
                  name="education"
                  placeholder="Select education"
                  className="w-full py-3 border-b bg-ja-white border-ja-black"
                  value={formData.education}
                  onChange={handleChange}
                >
                  <option value="">Any Bachelor's Degree</option>
                  <option value="">Any Masters Degree</option>
                  <option value="">Divorced</option>
                </select>
              </label>
            </div>
            <div className="py-4 flex flex-col">
              <div className="text-ja-gray py-1">Occupation </div>

              <label>
                <select
                  name="occupation"
                  placeholder="Select occupation"
                  className="w-full py-3 border-b bg-ja-white border-ja-black"
                  value={formData.occupation}
                  onChange={handleChange}
                >
                  <option value="">Doesn't matter</option>
                  <option value="">Civil Services</option>
                  <option value="">Defence</option>
                </select>
              </label>
            </div>
          </form>
        </div>
        <div className="pb-14 flex flex-row justify-center">
          <button
            onClick={() => handleProfileSelect("ALL PROFILES")}
            className={`text-ja-red py-2 px-3 border border-ja-red 
                  ${
                    selectProfile === "ALL PROFILES"
                      ? "bg-ja-red text-ja-white py-2 px-3 "
                      : ""
                  }`}
          >
            ALL PROFILES
          </button>
          <button
            onClick={() => handleProfileSelect("WITH PHOTO")}
            className={`text-ja-red py-2 px-3 border border-ja-red 
                  ${
                    selectProfile === "WITH PHOTO"
                      ? "bg-ja-red text-ja-white py-2 px-3 "
                      : ""
                  }`}
          >
            WITH PHOTO
          </button>
        </div>
        <div
          className="bg-ja-red text-ja-white  py-4 text-center fixed bottom-0 left-0 right-0"
          onClick={handleSearchByCriteria}
        >
          SEARCH
        </div>
      </main>
    </div>
  );
};

export default SearchByCriteria;
