import react from "react";
import "./nav.scss";

import React from "react";
import DateTime from "./DateTime";

const Nav = () => {
  return (
    <nav>
      <div className="left">
        <div className="apple-icon">
          <img src="./apple.png" />
        </div>
        <div className="nav-item">
          <p>Baruna Majhi</p>
        </div>
      </div>
      <div className="right">
        <div className="nav-icons">
          <img src="./wi.png" />
          <img src="./plane.png" />
          <DateTime />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
