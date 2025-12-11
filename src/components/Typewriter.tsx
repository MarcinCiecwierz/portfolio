import React, { useEffect, useState } from "react";

const Typewriter = ({ text, speed = 20 }) => {
  const [visibleText, setVisibleText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setVisibleText(text.slice(0, i));
      i++;

      if (i > text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <div
      style={{
        whiteSpace: "pre-wrap",
        wordBreak: "break-word",
      }}
    >
      {visibleText}
    </div>
  );
};

export default Typewriter;
