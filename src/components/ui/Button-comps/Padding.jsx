import React, { useContext, useEffect } from "react";
import { TextContext } from "./text-context";

import { useState } from "react";
import { BoxComp } from "./BoxComp";

export function Padding() {
  const [val, setVal] = useState("10");
  const [val1, setVal1] = useState("20");
  const { values, setValues } = useContext(TextContext);
  const [change, setChange] = useState("");
  useEffect(() => {
    setValues((allValues) => ({
      ...allValues,
      paddingInline: `${val1}px`,
      paddingBlock: `${val}px`,
      paddingText: { change },
    }));
  }, [val, val1]);
  return (
    <BoxComp name="Padding">
      <div className="flex flex-col basis-1/2">
        <p className="flex justify-between">
          <span className="text-md font-bold text-gray-500 ">PaddingX</span>
          <span className="text-blue-500">{val1}</span>
        </p>
        <input
          className=" border-1 border-gray-300/60 h-10 px-2 mt-2 w-full"
          min="0"
          max="48"
          value={val1}
          type="range"
          onChange={(e) => setVal1(e.target.value) }
        />
      </div>
      <div className=" basis-1/2">
        <p className="flex justify-between">
          <span className="text-md font-bold text-gray-500 max-w-full">
            PaddingY
          </span>
          <span className="text-blue-500">{val}</span>
        </p>
        <input
          className="border-1 border-gray-300/60 h-10 px-2 mt-2 w-full"
          type="range"
          value={val}
          min="0"
          max="48"
          onChange={(e) => setVal(e.target.value)}
        />{" "}
      </div>
    </BoxComp>
  );
}
