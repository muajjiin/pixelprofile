import React from "react";
import FlowingMenu from "../components/navbar/FlowingMenu/FlowingMenu";

const menuItems = [
  { link: "#project1", text: "Project 1", image: "../src/logo.svg" },
  { link: "#project2", text: "Project 2", image: "../src/logo.svg" },
  { link: "#project3", text: "Project 3", image: "../src/log.svg" },
  { link: "#project4", text: "Project 4", image: "../src/log.svg" },
  { link: "#project5", text: "Project 5", image: "../src/log.svg" },
  { link: "#project6", text: "Project 6", image: "../src/log.svg" },
];

export default function Portfolio() {
  return (
    <div style={{ padding: "2rem" }}>
      <FlowingMenu items={menuItems} />
      <h1>Our Portfolio</h1>
      <p>Check out some of our past projects and work examples.</p>

      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} style={{ margin: "2rem 0", padding: "2rem", background: "#e0e0ff" }}>
          <h2>Project {i + 1}</h2>
          <p>
            Description of project {i + 1}. Extra text to ensure scrolling works properly.
          </p>
        </div>
      ))}
    </div>
  );
}
