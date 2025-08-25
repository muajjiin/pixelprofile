import React from "react";

export default function Contact() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Contact Us</h1>
      <p>Get in touch with us via email or social media.</p>

      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} style={{ margin: "2rem 0", padding: "2rem", background: "#ffe0e0" }}>
          <h2>Contact Info {i + 1}</h2>
          <p>
            Email: example{i + 1}@domain.com <br />
            Phone: +123 456 789{i}
          </p>
        </div>
      ))}
    </div>
  );
}
