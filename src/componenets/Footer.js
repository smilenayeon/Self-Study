import React, { useContext } from "react";
import { themeContext } from "../App";

function Footer() {
  const { isDark, setIsDark } = useContext(themeContext);

  const handleToggle = () => {
    setIsDark(!isDark);
  };

  return (
    <div
      className="footer"
      style={
        isDark
          ? { backgroundColor: "black", color: "white" }
          : { backgroundColor: "grey", color: "black" }
      }
    >
      copyright ⓒ Diana
      <button
        onClick={handleToggle}
        style={
          isDark
            ? { backgroundColor: "darkgrey", color: "white" }
            : { backgroundColor: "yellowgreen", color: "black" }
        }
      >
        Toggle Theme:{" "}
      </button>
    </div>
  );
}

export default Footer;
