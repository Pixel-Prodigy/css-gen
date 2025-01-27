import "./App.css";
import { Start } from "./components/ui/start";

import { TextProvider } from "./components/ui/Button-comps/text-provider";
import { Content } from "./components/ui/Content";
import { useState } from "react";

function App() {
const [hide , setHide] = useState(false)
  return (
    <TextProvider>
     <div>
      <Start onClick={()=>setHide(true)} className={hide ? "hidden" : "visible"} />
      <Content className={hide ? "visible" : "hidden"}/>
      
        </div>
    </TextProvider>
  );
}

export default App;
