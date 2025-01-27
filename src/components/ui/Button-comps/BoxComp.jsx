import React, { useState } from "react";

function BoxComp({
  name,
  childClassName,
  children,
  parentClass,
  svgClassName,
  ...props
}) {
  const [hide, setHide] = useState(false);
  return (
    <div className={`transition-all ${parentClass}`}>
      <div
        onClick={() => setHide(!hide)}
        className={`w-full transition-all flex justify-between border-1 border-gray-300/50 shadow-md ${childClassName} shadow-gray-400/30 rounded-sm h-12 items-center px-3 `}
        {...props}
      >
        <p className="font-bold">{name}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.6"
          stroke="currentColor"
          className={`size-6 ${
            hide
              ? "rotate-180 transition-transform duration-300"
              : "rotate-0 transition-transform duration-300"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 15.75 7.5-7.5 7.5 7.5"
          />
        </svg>
      </div>
      <div
        className={` grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-12 mt-5 mb-4 transition-all ${
          hide ? "visible" : "hidden"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export { BoxComp };
