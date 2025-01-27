import React, { useState } from "react";
export function Start({ onClick, className }) {
  const [hide, setHide] = useState(false);

  return (
    <div
      className={` justify-center  flex absolute z-100 items-center px-6 flex-col sm:flex-row bg-white h-full w-full transition-all duration-500 py-56 ${className}`}
    >
      <div className=" flex items-center flex-col sm:flex-row">
      <div className="basis-1/2 grid">
        <h2 className="text-2xl text-center ">
          Design your HTML elements without directly writing any CSS!
        </h2>
        <button
          onClick={onClick}
          className="bg-blue-500 mx-auto mt-6 hover:bg-blue-600 cursor-pointer active:to-blue-300 transition-colors duration-200 text-white w-40  h-12 rounded-md font-bold"
        >
          Get Started
        </button>
      </div>
      <div className="basis-1/2">
        <img
          src="https://css-generator-pearl.vercel.app/static/media/bg.7f0bcdd75c8af2a7fa7c.jpg"
          alt="Hand painting"
        />
        </div>
        </div>
    </div>
  );
}
