import React, { useState,useContext} from "react";
import { themeContext, userContext } from "../App";
import Count from "./Count";
import Money from "./Money";
import Employer from "./Employer";
import Spending from "./Spending";
import Learn from "./Learn";
import Dessert from "./Dessert";
import Typed from "./Typed";
import Survey from "./Survey";


function Main() {
  const { isDark } = useContext(themeContext);

  const {user, setUser} =  useContext (userContext);

 const [name, setName] = useState ("");

  const handleChange = (e)=>{
   setName(e.target.value); 
   };

  const handleSetUser =(e)=>{
    e.preventDefault();
    setUser(name);
    setName("");
   
    };

  return (
    <div
      className="main"
      style={
        isDark
          ? { backgroundColor: "black", color: "pink" }
          : { backgroundColor: "pink", color: "black" }
      }
    >   <form onSubmit={handleSetUser}>
    <label htmlFor="name">Name:</label>
        <input key="name" type="text"  placeholder="type user name" name="name" value={name} onChange={handleChange}/>
        <input type="submit" value="submit"/>
        </form>
      This is the main page for {user}.

<div className="container">
      <div><Count />
      <Money />
      <Employer />
      </div>
      <div>
      <Spending />
      <Learn />
      
      </div>
      <div>
        <Dessert />
        <Typed />
        <Survey />
      </div>
</div>
    </div>
  );
}

export default Main;
