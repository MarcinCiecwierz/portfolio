import { useState } from "react";
import Terminal from "../pages/terminal";
import Typewriter from "./Typewriter";

const TerminalButton = () => {
  const [showTerminal, setShowTerminal] = useState(false);
  const [animate, setAnimate] = useState(false);

  const handleOpen = () => {
    setAnimate(true);
    setTimeout(() => {
      setShowTerminal(true);
      setAnimate(false);
    }, 300);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "95vh",
        position: "relative",
      }}
    >
      {!showTerminal && (
        <div
          style={{
            position: "absolute",
            width: animate ? "90vw" : "200px",
            height: animate ? "90vh" : "auto",
            borderRadius: animate ? "20px" : "25px",
            backgroundColor: "#252a33",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s ease-in-out",
            cursor: "pointer",
          }}
          onClick={handleOpen}
        >
          {!animate && (
            <>
              <img
                src="/terminal.png"
                alt="Terminal icon"
                style={{
                  width: "200px",
                  height: "auto",
                  borderRadius: "20px",
                }}
              />
              <span
                style={{
                  marginTop: "8px",
                  fontFamily: "monospace",
                  fontSize: 18,
                  color: "#fff",
                  marginBottom: "4px",
                }}
              >
                <Typewriter text={"Open terminal"} speed={50} />
              </span>
            </>
          )}
        </div>
      )}

      {showTerminal && <Terminal onClose={() => setShowTerminal(false)} />}
    </div>
  );
};

export default TerminalButton;
