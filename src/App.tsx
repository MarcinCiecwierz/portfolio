import React, { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);

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
        return "this is help";

      case "hi":
        return "Hello"!;

      default:
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
        overflowY: "auto",
      }}
    >
      <div
        style={{
          backgroundColor: "rgb(64, 64, 100)",
          width: "90%",
          height: "90%",
          borderRadius: "25px",
        }}
      >
        <div
          style={{
            backgroundColor: "rgb(64, 64, 150)",
            borderTopLeftRadius: "25px",
            borderTopRightRadius: "25px",
            paddingLeft: 15,
            display: "flex",
          }}
        >
          <div
            style={{
              backgroundColor: "red",
              borderRadius: "50px",
              width: "16px",
              height: "16px",
            }}
          ></div>
          <div
            style={{
              backgroundColor: "yellow",
              borderRadius: "50px",
              width: "16px",
              height: "16px",
            }}
          ></div>
          <div
            style={{
              backgroundColor: "green",
              borderRadius: "50px",
              width: "16px",
              height: "16px",
            }}
          ></div>
        </div>
        {history.map((item, index) => (
          <div key={index}>
            <div>$ {item.command}</div>
            {item.output && <div>{item.output}</div>}
          </div>
        ))}

        <div>
          ${" "}
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        </div>
      </div>
    </div>
  );
};

export default App;
