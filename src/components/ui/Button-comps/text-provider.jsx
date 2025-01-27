import { useState } from "react";
import { TextContext } from "./text-context";

export function TextProvider({ children }) {
  const [values, setValues] = useState({
    fontSize: "16px",
    fontWeight: "normal",
    paddingInline: "20px",
    paddingBlock: "10px",
    color: "white",
    backgroundColor: "#2b7fff",
    borderColor: "black",
    borderWidth: "0px",
    borderStyle: "solid",
    borderRadius: "5px",
    boxShadow: "1px 1px 1px rgba(0, 0, 0, 0.4)",
    paddingText: "",
    textText: "",
    colorsText: "",
    borderText: "",
  });

  return (
    <TextContext.Provider value={{ values, setValues }}>
      {" "}
      {children}
    </TextContext.Provider>
  );
}
