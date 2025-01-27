import { useState } from "react";
import { BoxComp } from "./BoxComp";
import React, { useContext, useEffect } from "react";
import { TextContext } from "./text-context";

export function Shadow() {
  const [val1, setVal1] = useState("sm");
  const { values, setValues } = useContext(TextContext);
    const [change, setChange] = useState("");
  
  let newBoxShadow = "";
  if (val1 === "sm") {
    newBoxShadow =
      "2px 2px 4px rgba(0, 0, 0, 0.3)";
  } else if (val1 === "md") {
    newBoxShadow =
      "4px 4px 8px rgba(0, 0, 0, 0.3)";
  } else if (val1 === "lg") {
    newBoxShadow =
      "6px 6px 12px rgba(0, 0, 0, 0.3)";
  } else if (val1 === "xl") {
    newBoxShadow =
      "8px 8px 16px rgba(0, 0, 0, 0.3)";
  }
  useEffect(() => {
    setValues((allValues) => ({
      ...allValues,
      boxShadow: `${newBoxShadow}`,
      shadowText: { change },

    }));
  }, [val1]);
  return (
    <BoxComp name="Shadow">
      <div className="basis-1/2 ">
        <p className="flex justify-between">
          <label htmlFor="select1" className="text-md font-bold  text-gray-500">
            Button Shadow
          </label>
          <span className="text-blue-500">{val1}</span>
        </p>
        <select
          name=""
          id="select1"
          className="flex border-1 border-gray-300/60 h-10 px-2 mt-2 w-full"
          value={val1}
          onChange={(e) => setVal1(e.target.value)}
        >
          <option value="sm">Small</option>
          <option value="md">Medium</option>
          <option value="lg">Large</option>
          <option value="xl">X-Large</option>
        </select>
      </div>
    </BoxComp>
  );
}
