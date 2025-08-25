// src/pages/Home.jsx
import React from "react";

export default function Home() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Home Page</h1>
      <p>Welcome to my website!</p>

      {/* Add multiple sections to make the page scrollable */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div key={i} style={{ margin: "2rem 0", padding: "2rem", background: "#eee" }}>
          <h2>Section {i + 1}</h2>
          <p>This is some content to fill the page and enable scrolling.</p>
        </div>
      ))}
    </div>
  );
}
