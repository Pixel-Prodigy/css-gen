import ButtonLeft from "./ButtonLeft";
import { Right } from "../Right";
import { useContext, useState, useEffect } from "react";
import { TextContext } from "./text-context";

export default function Button() {
  const { values } = useContext(TextContext);
  const [message, setMessage] = useState("");
  function InnerTextChange(ifValue, msg, effect) {
    useEffect(() => {
      if (ifValue !== "") {
        setMessage(msg);
      }
    }, [effect]);
  }
  InnerTextChange(values.paddingText, "wow! padding ", values.paddingText);
  InnerTextChange(values.colorsText, "give cool colors! ", values.colorsText);
  InnerTextChange(values.textText, "changing font?", values.textText);
  InnerTextChange(values.borderText, " plz no borderrr!!!", values.borderText);
  InnerTextChange(values.shadowText, "Shadow = nice", values.shadowText);
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("Style me more!");
    }, 1500);

    return () => clearTimeout(timer);
  }, [message]);

  return (
    <div className="flex">
      <ButtonLeft />
      <Right name="Button Editor">
        <button style={values}>{message}</button>
      </Right>
    </div>
  );
}
