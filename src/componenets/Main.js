import React, { useContext,useReducer, reducer} from "react";
import { themeContext } from "../App";


function Main() {

    const [money, dispatch] =useReducer (reducer, 500);

    const ACTION_TYPES = {withdrawl: ""}



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

      <h2>{money}</h2>
      <button>Buy Food</button>
      <button>Salary Day</button>


    </div>
  );
}

export default Main;
