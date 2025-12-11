import { useState } from "react";
import Typewriter from "./components/Typewriter";

const App = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [terminalTitle, setTerminalTitle] = useState("terminal");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      const command = input.trim();
      const output = runCommand(command);

      setHistory([...history, { command, output }]);
      setInput("");
    }
  };

  const runCommand = (cmd) => {
    switch (cmd) {
      case "help":
        setTerminalTitle("help");
        return "help menu:\n" + "1 - one help\n" + "2 - two help\n";

      case "hi":
        setTerminalTitle("hi");
        return "Hello"!;

      default:
        setTerminalTitle("terminal");
        return `Command not found: ${cmd}`;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        fontFamily: "monospace",
        fontSize: 18,
      }}
    >
      <div
        style={{
          backgroundColor: "rgb(64, 64, 100)",
          width: "90%",
          height: "90%",
          borderRadius: "25px",
          overflowY: "auto",
        }}
      >
        {/* top bar */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div
            style={{
              borderTopLeftRadius: "25px",
              borderTopRightRadius: "25px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "8px 15px",
            }}
          >
            <div
              style={{
                backgroundColor: "#ff5f57",
                borderRadius: "50px",
                width: "14px",
                height: "14px",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "#ffbd2e",
                borderRadius: "50px",
                width: "14px",
                height: "14px",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "#28c840",
                borderRadius: "50px",
                width: "14px",
                height: "14px",
              }}
            ></div>
          </div>
          <div
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              color: "white",
              pointerEvents: "none",
            }}
          >
            {terminalTitle}
          </div>
        </div>

        {/* text */}
        {history.map((item, index) => (
          <div key={index}>
            <div>$ {item.command}</div>
            {item.output && <Typewriter text={item.output} />}
          </div>
        ))}

        <div>
          ${" "}
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
            style={{
              background: "rgb(64, 64, 100)",
              color: "white",
              border: "none",
              outline: "none",
              fontFamily: "monospace",
              fontSize: 18,
              width: "80%",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
