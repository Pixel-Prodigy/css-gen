import { useContext, useState, useEffect } from "react";
import { BoxComp } from "./BoxComp";
import { TextContext } from "./text-context";

export function Text() {
  const { values, setValues } = useContext(TextContext);
  const [val1, setVal1] = useState("400");
  const [val, setVal] = useState("16");
      const [change, setChange] = useState("");
  
  useEffect(() => {
    setValues((allValue) => ({
      ...allValue,
      fontWeight: `${val1}`,
      fontSize: `${val}px`,
      textText: { change },

    }));
  }, [val, val1]);

  return (
    <BoxComp name="Text">
      <div className="basis-1/2 ">
        <p className="flex justify-between">
          <label htmlFor="select1" className="text-md font-bold  text-gray-500">
            Font Weight
          </label>
          <span className="text-blue-500">{val1}</span>
        </p>
        <select
          name=""
          id="select1"
          value={val1}
          className="flex border-1 border-gray-300/60 h-10 px-2 mt-2 w-full"
          onChange={(e) => setVal1(e.target.value)}
        >
          <option value="400">normal</option>
          <option value="600">Semibold</option>
          <option value="800">Bold</option>
        </select>
      </div>
      <div className="basis-1/2">
        <p className="flex justify-between">
          <label htmlFor="select2" className="text-md font-bold text-gray-500">
            Font Size
          </label>
          <span className="text-blue-500">{val}</span>
        </p>
        <select
          name=""
          id="select2"
          value={val}
          className="flex border-1 border-gray-300/60 h-10 px-2 mt-2 w-full"
          onChange={(e) => setVal(e.target.value)}
        >
          <option value="4">4</option>
          <option value="6">6</option>
          <option value="8">8</option>
          <option value="12">12</option>
          <option value="16">16</option>
          <option value="20">20</option>
          <option value="24">24</option>
          <option value="32">32</option>
          <option value="40">40</option>
          <option value="48">48</option>
        </select>
      </div>
    </BoxComp>
  );
}
