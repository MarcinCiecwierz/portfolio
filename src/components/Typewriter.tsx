import React, { useEffect, useState } from "react";

const Typewriter = ({ text }) => {
  const [visibleText, setVisibleText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setVisibleText(text.slice(0, i));
      i++;

      if (i > text.length) clearInterval(interval);
    }, 20);

    return () => clearInterval(interval);
  }, [text]);

  return <pre>{visibleText}</pre>;
};

export default Typewriter;
