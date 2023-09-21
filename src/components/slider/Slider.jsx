import React from "react";

function Slider({ imageUrl, title, description }) {
  return (
    <div className="flex flex-col">
      <img src={imageUrl} alt="" />
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-ja-black text-xl font-bold pb-4 pt-2">{title}</h1>
        <h3 className="text-ja-gray px-5 font-semi-bold">{description}</h3>
      </div>
    </div>
  );
}

export default Slider;
