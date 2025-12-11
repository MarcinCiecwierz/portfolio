import React, { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
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
      </div>
    </div>
  );
};

export default App;
