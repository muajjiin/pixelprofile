// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Prism from "./components/Backgrounds/Prism/Prism";
import BlurText from './components/text/BlurText/BlurText';
import PillNav from './components/navbar/PillNav/PillNav'; // Import your navbar
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];


function App() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
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
          width: "100%",
          height: "100%",
          minHeight: "100vh",
          flexDirection: "column",
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
    
      </div>
      <PillNav
        
        items={navItems}
        activeHref="/"
        baseColor="#fff"
        pillColor="#060010"
        hoveredPillTextColor="#0fa4cdff"
        pillTextColor="#fff"
      />

      <div style={{ paddingTop: "5rem", width: "100%" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
