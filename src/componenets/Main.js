import React, { useState,useContext} from "react";
import { themeContext, userContext } from "../App";
import Count from "./Count";
import Money from "./Money";
import Employer from "./Employer";


function Main() {
    const [inputValue, setInputValue] = useState("DIANA");

    const {user, setUser} =  useContext (userContext);

  const { isDark } = useContext(themeContext);
 
  const handleChange = (e)=>{
     console.log (e.target.value);
    setInputValue(e.target.value);};

  const handleSetUser =()=>{
    setUser(inputValue);
    setInputValue("");};


  return (
    <div
      className="main"
      style={
        isDark
          ? { backgroundColor: "black", color: "pink" }
          : { backgroundColor: "pink", color: "black" }
      }
    >   
        <input type="text"  placeholder="type user name" onChange={handleChange}/>
        <button onClick={handleSetUser}>Set User</button>
      This is the main page for {user}.

      <Count />
      <Money />
      <Employer />

    </div>
  );
}

export default Main;
