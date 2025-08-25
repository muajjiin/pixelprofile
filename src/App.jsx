// src/App.js
import React from "react";
import Prism from "./components/Backgrounds/Prism/Prism";

function App() {
  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh", overflow: "hidden" }}>
      {/* Prism background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          filter: "blur(16px)", // Increase the px value for more blur
          pointerEvents: "none"
        }}
      >
        <Prism />
      </div>

      {/* Main content */}
      <div style={{ position: "relative", zIndex: 1, color: "white", textAlign: "center", paddingTop: "50px" }}>
        <h1>Welcome to PixelProfile</h1>
        <p>This is your portfolio content over Prism background</p>
      </div>
    </div>
  );
}

export default App;
