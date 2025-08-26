// src/App.js
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import BlurText from './components/text/BlurText/BlurText';
import PillNav from './components/navbar/PillNav/PillNav';
import BackgroundWrapper from "./components/Backgrounds/BackgroundWrapper";

// Lazy load pages and Prism/LogoLoop
const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Portfolio = React.lazy(() => import("./pages/Portfolio"));
const Contact = React.lazy(() => import("./pages/Contact"));
const LogoLoop = React.lazy(() => import("./components/text/BlurText/LogoLoop"));
const Prism = React.lazy(() => import("./components/Backgrounds/Prism/Prism"));

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

function App() {
  return (
    <div className="app-wrapper" style={{ width: "100%", minHeight: "100vh", position: "relative", overflow: "hidden" }}>
      <BackgroundWrapper />
      <Suspense fallback={<div style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1, background: "#222"}} />}>
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
      </Suspense>

      <PillNav
        items={navItems}
        activeHref="/"
        baseColor="#fff"
        pillColor="#060010"
        hoveredPillTextColor="#0fa4cdff"
        pillTextColor="#fff"
      />

      <div style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        flexDirection: "column",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        padding: "2rem",
      }}>
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

      <div style={{ paddingTop: "5rem", width: "100%" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <div className="home-page">
        <h1>Welcome to My Portfolio</h1>
        {/* LogoLoop component */}
        <Suspense fallback={<div>Loading Logo...</div>}>
          <LogoLoop />
        </Suspense>
        {/* Other content */}
      </div>
    </div>
  );
}

export default App;
