import React from "react";

import { useState, useEffect, useContext } from "react";
import { BoxComp } from "./BoxComp";
import { TextContext } from "./text-context";

export function Color() {
  const [val1, setVal1] = useState("#ffffff");
  const [val, setVal] = useState("#3b83f6");
  const { values, setValues } = useContext(TextContext);
    const [change, setChange] = useState("");
  
  useEffect(() => {
    setValues((allValues) => ({
      ...allValues,
      color: `${val1}`,
      backgroundColor: `${val}`,
      colorsText: { change },

    }));
  } , [val, val1]);
  return (
    <BoxComp name="Color">
      <div className="basis-1/2">
        <p className="flex justify-between">
          <span className="text-md font-bold text-gray-500 ">Color</span>
          <span className="text-blue-500">{val1}</span>
        </p>
        <input
          className="flex border-1 border-gray-300/60 h-10 p-1 mt-2 w-full"
          type="color"
          value={val1}
          onChange={(e) => setVal1(e.target.value) && setChange("Wow! Padding")}
        />
      </div>
      <div className="basis-1/2">
        <p className="flex justify-between gap-2">
          <span className="text-md font-bold  text-gray-500">
            Background Color
          </span>
          <span className="text-blue-500">{val}</span>
        </p>
        <input
          className="flex border-1 border-gray-300/60 h-10 p-1 mt-2 w-full"
          type="color"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
      </div>
    </BoxComp>
  );
}
