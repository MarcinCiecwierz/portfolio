import { useState } from "react";
import Terminal from "./pages/terminal";

const App = () => {
  const [showTerminal, setShowTerminal] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {showTerminal ? (
        <Terminal onClose={() => setShowTerminal(false)} />
      ) : (
        <button
          style={{
            flexDirection: "column",
            display: "flex",
            alignItems: "center",
            background: "none",
            border: "none",
          }}
          onClick={() => setShowTerminal(true)}
        >
          <img
            src="/terminal.png"
            alt="Terminal icon"
            style={{
              width: "200px",
              height: "auto",
              borderRadius: "20px",
              backgroundColor: "#252a33",
            }}
          ></img>
          <span
            style={{
              marginTop: "8px",
              fontFamily: "monospace",
              fontSize: 18,
            }}
          >
            Open terminal
          </span>
        </button>
      )}
    </div>
  );
};

export default App;
