import React from "react";
import "./app.scss";
import Dock from "./Components/Dock";
import MacWindow from "./Components/windows/MacWindow";
const App = () => {
  return (
    <div>
      <Dock />
      <MacWindow>
        <h2>hello</h2>
      </MacWindow>
    </div>
  );
};

export default App;
