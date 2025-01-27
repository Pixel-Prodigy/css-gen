import React from "react";
import { useState } from "react";
import { BoxComp } from "./BoxComp";
import { useEffect, useContext } from "react";
import { TextContext } from "./text-context";
export function Border() {
  const [val1, setVal1] = useState("#ffffff");
  const [val, setVal] = useState("0");
  const [val2, setVal2] = useState("solid");
  const [val3, setVal3] = useState("4");
  const [change, setChange] = useState("");

  const { values, setValues } = useContext(TextContext);
  useEffect(() => {
    setValues((allValues) => ({
      ...allValues,
      borderColor: `${val1}`,
      borderWidth: `${val}px`,
      borderStyle: `${val2}`,
      borderRadius: `${val3}px`,
      borderText: { change },
    }));
  }, [val, val1, val2, val3]);

  return (
    <BoxComp name="Border">
      <div className="basis-1/2">
        <p className="flex justify-between">
          <span className="text-md font-bold text-gray-500 ">Border Color</span>
          <span className="text-blue-500">{val1}</span>
        </p>
        <input
          className="flex border-1 border-gray-300/60 h-10 p-1 mt-2 w-full"
          type="color"
          value={val1}
          onChange={(e) => setVal1(e.target.value)}
        />
      </div>
      <div className="basis-1/2">
        <p className="flex justify-between gap-2">
          <span className="text-md font-bold  text-gray-500">Border-Width</span>
          <span className="text-blue-500">{val}</span>
        </p>
        <input
          className="flex border-1 border-gray-300/60 h-10 p-1 mt-2 w-full"
          type="range"
          value={val}
          min="0"
          max="10"
          onChange={(e) => setVal(e.target.value)}
        />
      </div>
      <div className="basis-1/2">
        <p className="flex justify-between">
          <span className="text-md font-bold text-gray-500 ">Border Type</span>
          <span className="text-blue-500">{val2}</span>
        </p>
        <select
          className="flex border-1 border-gray-300/60 h-10 px-2 mt-2 w-full"
          onChange={(e) => setVal2(e.target.value)}
          value={val2}
        >
          <option value="solid">Solid</option>
          <option value="dotted">Dotted</option>
          <option value="dashed">Dashed</option>
        </select>
      </div>
      <div className="basis-1/2">
        <p className="flex justify-between">
          <span className="text-md font-bold text-gray-500 ">
            Border Radius
          </span>
          <span className="text-blue-500">{val3}</span>
        </p>
        <input
          className="flex border-1 border-gray-300/60 h-10 p-1 mt-2 w-full"
          type="range"
          value={val3}
          min="0"
          max="60"
          onChange={(e) => setVal3(e.target.value)}
        />
      </div>
    </BoxComp>
  );
}
