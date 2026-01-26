import React from "react";
import MacWindow from "./windows/MacWindow";
import Terminal from "react-console-emulator";
import "./cli.scss";

const Cli = ({ windowName, windowState, setWindowState }) => {
  return (
    <MacWindow windowName={windowName} setWindowState={setWindowState}>
      <div className="cli-window">
        <Terminal
          commands={{
            echo: {
              descritption: "Echo a passed String",
              usage: "echo <string>",
              fn: (...args) => args.json(" "),
            },
            about: {
              description: "About me",
              fn: () => `
                        Hi, I'm Baruna Majhi 👋
                        GIS Analyst at TCS and aspiring Frontend Developer.
                        Currently learning MERN stack.
                        `,
            },
            skills: {
              description: "My skills",
              fn: () => `
Frontend: HTML, CSS, JavaScript, React
Backend: Node.js, Express (learning)
Database: MongoDB
Tools: Git, GitHub, VS Code
`,
            },

            whoami: {
              description: "Identity",
              fn: () => "Baruna Majhi - Frontend Developer 🚀",
            },

            social: {
              description: "Social links",
              fn: () => `
            GitHub: https://github.com/yourname
            LinkedIn: https://linkedin.com/in/yourname
`,
            },
            resume: {
              description: "Open resume",
              fn: () => {
                window.open("/resume.pdf", "_blank");
                return "Opening resume...";
              },
            },

            joke: {
              description: "Dev joke",
              fn: () =>
                "I don't always test my code, but when I do... it's in production 😅",
            },
            exit: {
              description: "Exit message",
              fn: () => "Thanks for visiting my portfolio 🙌",
            },
          }}
          welcomeMessage={
            "Welcome to Baruna's Portfolio 🚀\nType `help` to see all available commands."
          }
          promptLabel={"barunMnitro:~$"}
        />
      </div>
    </MacWindow>
  );
};

export default Cli;
