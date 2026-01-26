import React from "react";
import "./app.scss";
import { useState } from "react";
import Dock from "./Components/Dock";
import MacWindow from "./Components/windows/MacWindow";
import Nav from "./Components/Nav";
import Github from "./Components/Github";
import Sportify from "./Components/Sportify";
import Cli from "./Components/Cli";
const App = () => {
  const [windowState, setWindowState] = useState({
    github: false,
    youtube: false,
    note: false,
    sportify: false,
    cli: false,
  });
  return (
    <div>
      <Dock windowState={windowState} setWindowState={setWindowState} />
      <Nav />
      {windowState.github && (
        <Github windowName="github" setWindowState={setWindowState} />
      )}
      {windowState.sportify && (
        <Sportify windowName="sportify" setWindowState={setWindowState} />
      )}
      {windowState.cli && (
        <Cli windowName="cli" setWindowState={setWindowState} />
      )}
    </div>
  );
};

export default App;
