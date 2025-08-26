import React, { Suspense } from "react";

const MagicBento = React.lazy(() => import("../components/navbar/MagicBento/MagicBento"));

export default function About() {
  return (
    <div style={{
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#181824"
    }}>
      <Suspense fallback={<div>Loading animation...</div>}>
        <div style={{ width: "100%", maxWidth: "100%" }}>
          <MagicBento />
        </div>
      </Suspense>
    </div>
  );
}
