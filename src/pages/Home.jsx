// src/pages/Home.jsx
import React, { Suspense } from "react";

// Lazy load LogoLoop
const LogoLoop = React.lazy(() => import("../components/text/BlurText/LogoLoop"));

// Replace these with your actual logo images (local or online URLs)
const logosArray = [

  { node: <div style={{ width: 100, height: 28, background: "gray" }}>Logo1</div> },
  { node: <div style={{ width: 100, height: 28, background: "gray" }}>Logo2</div> },
  { node: <div style={{ width: 100, height: 28, background: "gray" }}>Logo3</div> },
];

export default function Home() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Home Page</h1>
      <p>Welcome to my website!</p>

      {/* Add multiple sections to make the page scrollable */}
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          style={{
            margin: "2rem 0",
            padding: "2rem",
            background: "#eee",
            borderRadius: "8px",
          }}
        >
          <h2>Section {i + 1}</h2>
          <p>This is some content to fill the page and enable scrolling.</p>
        </div>
      ))}

      {/* Main Home section with LogoLoop */}
      <div className="home-page" style={{ marginTop: "4rem" }}>
        <h1>Welcome to My Portfolio</h1>

        {/* Lazy-loaded LogoLoop */}
        <Suspense fallback={<div>Loading logos...</div>}>
          <LogoLoop
            logos={logosArray}
            speed={80}               // Optional: adjust speed
            direction="left"         // Optional: left/right
            logoHeight={28}          // Height of logos
            gap={32}                 // Gap between logos
            pauseOnHover={true}      // Pause animation on hover
          />
        </Suspense>
      </div>
    </div>
  );
}
