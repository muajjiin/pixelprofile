import React from "react";

export default function About() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>About Us</h1>
      <p>Learn more about our mission and vision.</p>

      {Array.from({ length: 15 }).map((_, i) => (
        <div key={i} style={{ margin: "2rem 0", padding: "2rem", background: "#f0f0f0" }}>
          <h2>About Section {i + 1}</h2>
          <p>
            We are committed to delivering high-quality solutions. This is extra content to make
            the page scrollable.
          </p>
        </div>
      ))}
    </div>
  );
}
