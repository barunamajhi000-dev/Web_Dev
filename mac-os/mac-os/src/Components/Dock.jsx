import React from "react";
import "./dock.scss";
const Dock = () => {
  return (
    <footer className="dock">
      <div className="icon">
        <img src="/doc-icons/icons8-git-48.png" />
      </div>
      <div className="icon">
        <img src="/doc-icons/yt.png" />
      </div>
      <div className="icon">
        <img src="/doc-icons/sportify.svg" />
      </div>
      <div className="icon">
        <img src="/doc-icons/note.png" />
      </div>
      <div className="icon">
        <img src="/doc-icons/message.png" />
      </div>
      <div className="icon">
        <img src="/doc-icons/terminal.png" />
      </div>
      <div className="icon">
        <img src="/doc-icons/calender.png" />
      </div>
    </footer>
  );
};

export default Dock;
