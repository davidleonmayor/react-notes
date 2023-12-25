import { useState } from 'react'
import useMousePosition  from "./hooks/useMousePosition";

function App() {
  const { clientX, clientY } = useMousePosition();
  
  return (
    <div 
      style={{
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        pointerEvents: "none",
        cursor: "none"
      }}
    >
      <svg
        width={200}
        height={200}
        viewBox="0 0 50 50"
        style={{
          position: "absolute",
          left: clientX,
          top: clientY,
          transform: "translate(-50%, -50%)",
        }}
      >
        <circle
          cx="25"
          cy="25"
          r="8"
        />
      </svg>
    </div>
  );
}

export default App
