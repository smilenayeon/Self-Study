import React, { useContext } from "react";
import { themeContext, userContext } from "../App";

function Footer() {
  const { isDark, setIsDark } = useContext(themeContext);
  const  {user} = useContext (userContext);

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
      copyright ⓒ {user}
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
