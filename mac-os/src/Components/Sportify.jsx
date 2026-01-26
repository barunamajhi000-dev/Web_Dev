import React from "react";
import MacWindow from "./windows/MacWindow";
import "./sportify.scss";
const Sportify = ({ windowName, windowState, setWindowState }) => {
  return (
    <MacWindow
      windowName={windowName}
      setWindowState={setWindowState}
      width="20vw"
      height="30vw"
    >
      <div className="sportify-window">
        <iframe
          data-testid="embed-iframe"
          style={{ borderradius: "12px" }}
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DWX3SoTqhs2rq?utm_source=generator"
          width="100%"
          height="500"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </MacWindow>
  );
};

export default Sportify;
