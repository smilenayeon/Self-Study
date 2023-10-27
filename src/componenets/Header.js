import React, { useContext } from "react";
import { themeContext } from "../App";

function Header() {
  const { isDark } = useContext(themeContext);

  return (
    <div
      className="header"
      style={
        isDark
          ? { backgroundColor: "black", color: "pink" }
          : { backgroundColor: "pink", color: "black" }
      }
    >
      <h1>Welcome Diana</h1>
    </div>
  );
}

export default Header;
