import React from "react";
import "./dock.scss";
const Dock = ({ windowState, setWindowState }) => {
  return (
    <footer className="dock">
      <div
        onClick={() => {
          setWindowState((state) => ({ ...state, github: true }));
        }}
        className="icon"
      >
        <img src="/doc-icons/icons8-git-48.png" />
      </div>
      <div
        onClick={() => {
          window.open("https://www.youtube.com/", "_blank");
        }}
        className="icon"
      >
        <img src="/doc-icons/yt.png" />
      </div>
      <div
        onClick={() => {
          setWindowState((state) => ({ ...state, sportify: true }));
        }}
        className="icon"
      >
        <img src="/doc-icons/sportify.svg" />
      </div>
      <div
        onClick={() => {
          setWindowState((state) => ({ ...state, cli: true }));
        }}
        className="icon"
      >
        <img src="/doc-icons/terminal.png" />
      </div>
      <div
        onClick={() => {
          window.open("https://calendar.google.com/calendar/u/0/r", "_blank");
        }}
        className="icon"
      >
        <img src="/doc-icons/calender.png" />
      </div>
    </footer>
  );
};

export default Dock;
