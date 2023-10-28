import React, { useContext} from "react";
import { themeContext } from "../App";
import Count from "../componenets/Count";


function Main() {



  const { isDark } = useContext(themeContext);
  return (
    <div
      className="main"
      style={
        isDark
          ? { backgroundColor: "black", color: "pink" }
          : { backgroundColor: "pink", color: "black" }
      }
    >
      This is the main page for Diana.

      <Count />

    </div>
  );
}

export default Main;
