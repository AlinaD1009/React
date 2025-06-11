
import React, { useState, useEffect, useRef } from "react";

const Footer = () => {
  const [toggle, setToggle] = useState(false);
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
    
      isInitialMount.current = false;
    } else {

      alert("Стан toggle змінився у Footer!");
    }
  }, [toggle]);

  return (
    <footer
      style={{
        borderTop: "2px solid #444",
        padding: 15,
        marginTop: 20,
      }}
    >
      <p>Footer: useEffect спрацьовує лише при зміні toggle</p>
      <button onClick={() => setToggle((t) => !t)}>
        Змінити toggle (зараз {toggle.toString()})
      </button>
    </footer>
  );
};

export default Footer;
