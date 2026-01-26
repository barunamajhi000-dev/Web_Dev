import React from "react";
import githubData from "../assets/github.json";
import MacWindow from "./windows/MacWindow";
import "./github.scss";
const GitCard = ({
  data = {
    id: 1,
    image: "",
    description: "",
    tags: [],
    repoLink: "",
    demoLink: "",
  },
}) => {
  return (
    <div className="card">
      <img src={data.image} alt="" />
      <h1>{data.title}</h1>
      <p className="description">{data.description}</p>
      <div className="tags">
        {data.tags.map((tag) => (
          <p className="tag">{tag}</p>
        ))}
      </div>
      <div className="urls">
        <a href={data.repoLink}>Repository</a>
        <a href={data.demoLink}>DemoLink</a>
      </div>
    </div>
  );
};
const Github = ({ windowName, windowState, setWindowState }) => {
  return (
    <MacWindow windowName={windowName} setWindowState={setWindowState}>
      <div className="cards">
        {githubData.map((project) => {
          return <GitCard data={project} />;
        })}
      </div>
    </MacWindow>
  );
};
export default Github;
