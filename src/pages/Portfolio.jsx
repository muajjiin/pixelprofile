import React from "react";

export default function Portfolio() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Our Portfolio</h1>
      <p>Check out some of our past projects and work examples.</p>

      {Array.from({ length: 20 }).map((_, i) => (
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
