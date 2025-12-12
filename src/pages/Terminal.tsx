import { useEffect, useRef, useState } from "react";
import Typewriter from "../components/Typewriter";

const Terminal = ({ onClose }) => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    {
      command: null,
      output:
        "Welcome to my terminal!\nType 'help' to get to available commands",
    },
  ]);
  const [terminalTitle, setTerminalTitle] = useState("terminal");
  const terminalRef = useRef(null);
  const [modalUrl, setModalUrl] = useState(null);

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
        return "help menu:\n about me\n skills\n projects\n contact\n github\n";

      case "hi":
        setTerminalTitle("hi");
        return "Hello"!;

      case "about me":
        setTerminalTitle("about me");
        return "My name is Marcin and I am junior backend developer specifying in Spring Boot framework.";

      case "skills":
        setTerminalTitle("skills");
        return "Key programming skills:\n Java, Spring Boot\nScripting/frontend skills:\n Python, JavaScript, React\nDatabase:\n Postgresql\nCloud:\n Azure appliaction deployment\nCI/CD:\n Github Actions";

      case "projects":
        setTerminalTitle("projects");

        return (
          `A prompt manager - page in which a user can save their prompts and test in different AI.<br/>Stack used: Spring Boot, React, Postgresql, Auth0, OpenRouter<br/><a target="_blank" href="https://prompt-manager-f3lls-projects.vercel.app/">https://prompt-manager-f3lls-projects.vercel.app/</a><br/>` +
          `<br/>Transport web appliaction - as my thesis project I have developed fleet management appliaction integrating GPS tracking and connection with external marketplace system.<br/>Stack used: Spring Boot, React, Postgresql<br/>` +
          `<br/>Task tracker - application in which users can magane their tasks, manage assigment of team.<br/>Stack: Spring Boot, React, Postgresql<br/><a target="_blank" href="https://task-tracker-f3lls-projects.vercel.app/">https://task-tracker-f3lls-projects.vercel.app/</a><br/>` +
          `<br/>Package simualtion - appliaction to help me understand how Kafka works<br/>Stack used: Spring Boot, Kafka, Postgresql, React.<br/>Documentation is available at: <a target="_blank" href="https://github.com/MarcinCiecwierz/Package-simulation-kafka">https://github.com/MarcinCiecwierz/Package-simulation-kafka</a><br/>`
        );

      case "github":
        setTerminalTitle("github");
        return 'My github: <a target="_blank" href="https://github.com/MarcinCiecwierz">https://github.com/MarcinCiecwierz</a>';

      case "git":
        setTerminalTitle("github");
        return 'My github: <a target="_blank" href="https://github.com/MarcinCiecwierz">https://github.com/MarcinCiecwierz</a>';

      case "contact":
        setTerminalTitle("contact");
        return `Contact me: <a target="_blank" href="mailto:marcin.ciecwierz@proton.me">marcin.ciecwierz@proton.me</a>`;

      default:
        setTerminalTitle("terminal");
        return `Command not found: ${cmd}`;
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <div
      ref={terminalRef}
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
          backgroundColor: "#252a33",
          width: "90%",
          height: "90%",
          borderRadius: "25px",
          overflowY: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          paddingLeft: "8px",
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
              id="close"
              onClick={onClose}
              style={{
                backgroundColor: "#ff5f57",
                borderRadius: "50px",
                width: "14px",
                height: "14px",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.08)";
                e.currentTarget.style.opacity = "0.8";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.opacity = "1";
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
            {item.output && (
              <>
                <Typewriter text={item.output} />
                <br />
              </>
            )}
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
              background: "#252a33",
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

export default Terminal;
