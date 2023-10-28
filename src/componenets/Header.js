import React, { useContext } from "react";
import { themeContext, userContext } from "../App";


function Header() {
  const { isDark } = useContext(themeContext);
  const {user} = useContext (userContext);

  return (
    <div
      className="header"
      style={
        isDark
          ? { backgroundColor: "black", color: "pink" }
          : { backgroundColor: "pink", color: "black" }
      }
    >
      <h1>Welcome {user}</h1>
    </div>
  );
}

export default Header;
