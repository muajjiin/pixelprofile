// src/App.js
import React from "react";
import Prism from "./components/Backgrounds/Prism/Prism";
import BlurText from './components/text/BlurText/BlurText';
import PillNav from './components/navbar/PillNav/PillNav'; // Import your navbar

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];


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
          filter: "blur(16px)",
          pointerEvents: "none"
        }}
      >
        <Prism />
      </div>
      {/* Main content */}
      <div
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          padding: "2rem",
        }}
      >
        <BlurText
          text="Ideas, executed beautifully."
          style={{
            fontSize: "clamp(2.5rem, 7vw, 4rem)",
            fontWeight: "700",
            fontFamily: "'Great Vibes', 'cursive'",
            textAlign: "center",
            textShadow: "2px 2px 6px rgba(0,0,0,0.2)"
          }}
        />
      </div>

       <div className="App">
      <PillNav
        logo={null}
        items={navItems}          // <-- navItems is now defined
        activeHref="/"
        baseColor="#fff"
        pillColor="#060010"
        hoveredPillTextColor="#ff6a00"
        pillTextColor="#fff"
      />

      {/* Example main content */}
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h1>Welcome to My Website</h1>
        <p>Your main content goes here.</p>
      </div>
    </div>
    </div>
  );
}

export default App;
