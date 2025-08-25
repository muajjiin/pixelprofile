// src/App.js
import React from "react";
import Prism from "./components/Backgrounds/Prism/Prism";
import BlurText from './components/text/BlurText/BlurText';




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
   <div
      style={{
       position: "relative",
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    padding: "2rem" , 
      }}
    >
      <BlurText
        text="Ideas, executed beautifully."
        style={{

    fontSize: "clamp(2.5rem, 7vw, 4rem)",   // responsive size
    fontWeight: "700",
    fontFamily: "'Great Vibes', 'cursive'", // cursive font
    textAlign: "center",
    textShadow: "2px 2px 6px rgba(0,0,0,0.2)"
        }}
      />
    </div> 
  </div>
  );
}



export default App;
