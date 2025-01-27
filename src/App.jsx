import "./App.css";
import { Start } from "./components/ui/start";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/ui/Header";
import Button from "./components/ui/Button-comps/Button";

import { TextProvider } from "./components/ui/Button-comps/text-provider";

function App() {
  return (
    <TextProvider>
     <div>
      <Start />
      <Header />
      <div className="flex justify-center">
        <Button></Button>
        </div>
        </div>
    </TextProvider>
  );
}

export default App;
