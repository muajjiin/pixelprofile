import { useEffect, useState } from "react";
import Prism from "./Prism/Prism"; // keep your heavy effect import

export default function BackgroundWrapper() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) setIsMobile(true);
  }, []);

  return (
    <div>
      {isMobile ? (
        <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-screen w-screen"></div>
      ) : (
        <Prism />
      )}
    </div>
  );
}
