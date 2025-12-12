import { useState } from "react";
import TerminalButton from "./components/TerminalButton";
import Typewriter from "./components/Typewriter";

const App = () => {
  const [isCheckedBox, setIsCheckedBox] = useState(false);
  const [isButton, setIsButton] = useState(false);

  if (isButton) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "95vh",
        }}
      >
        <TerminalButton />
      </div>
    );
  }

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
      <div
        style={{
          backgroundColor: "black",
          width: "470px",
          height: "auto",
          fontSize: "18px",
          fontFamily: "monospace",
          padding: 10,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <input
            type="checkbox"
            onChange={(e) => setIsCheckedBox(e.target.checked)}
            id="answer"
            name="answer"
            value="True"
            style={{
              height: "25px",
              width: "25px",
              cursor: "pointer",
            }}
          ></input>
          <label for="answer">
            <Typewriter
              text={"If you are bot, do not check that square!"}
              speed={70}
            />
          </label>
        </div>
        {isCheckedBox && (
          <div
            style={{
              marginTop: "8px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typewriter text={"Are you sure?"} speed={50} />
            <button
              onClick={() => setIsButton(true)}
              style={{
                backgroundColor: "black",
                borderColor: "black",
                border: "none",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              YES!
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
