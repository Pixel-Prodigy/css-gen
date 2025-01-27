import { TextContext } from "./Button-comps/text-context";
import { useContext, useState } from "react";
export function GetCssButton() {
  const { values } = useContext(TextContext);
  const [hide, setHide] = useState(false);
  return (
    <>
      <div
        className={`h-screen w-screen  bg-gray-950/80 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-5 ${
          hide ? "visible" : "hidden"
        }`}
        onClick={() => setHide(false)}
      ></div>
      <div
        className={`w-112 h-100 bg-white absolute p-8  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 ${
          hide ? "visible" : "hidden"
        }`}
      >
        <div className="w-full h-66 bg-black text-white py-5  px-10 leading-6  ">
          <span className="text-[#98C379] ml-4 italic">.button</span> {`{`}
          <br />
          <span className="text-[#98C379] ml-10"> font-size:</span>{" "}
          <span className="text-[#D19A66] ">{values.fontSize}</span>;<br />
          <span className="text-[#98C379] ml-10"> color:</span>{" "}
          <span className="text-[#e1f018] ">{values.color}</span>;<br />
          <span className="text-[#98C379] ml-10"> background-color:</span>{" "}
          <span className="text-[#3b83f6] ">{values.backgroundColor}</span>;
          <br />
          <span className="text-[#98C379] ml-10"> box-shadow:</span>{" "}
          <span className="text-[#C678DD] ">{values.boxShadow}</span>;<br />
          <span className="text-[#a6c379] ml-10"> border-radius:</span>{" "}
          <span className="text-[#98C379] "> <span className="text-[#dbcb39]">{values.borderRadius}</span></span>;<br />
          <span className="text-[#98C379]  ml-10"> padding:</span>{" "}
          <span className="text-[#df65ae] ">
            {values.paddingBlock} {values.paddingInline}
          </span>
          ;<br />
          {`}`}
        </div>
        <button className="w-full h-12 bg-blue-500 text-white font-bold rounded-sm mt-6 cursor-pointer">
          {" "}
          Copy to clipboard
        </button>
      </div>
      <button
        className="h-11 w-32 font-bold bg-blue-500 rounded-sm text-white"
        onClick={() => setHide(true)}
      >
        Get Css
      </button>
    </>
  );
}
