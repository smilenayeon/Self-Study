import React,{useContext} from 'react'
import { themeContext } from '../App';


function Footer() {

    const {isDark, setIsDark}= useContext (themeContext);

    const handleToggle = ()=>{setIsDark(!isDark)};

  return (
    <div className="footer"  style= { isDark ? {backgroundColor: "black"} : {backgroundColor:"grey"}}>
    copyright ⓒ Diana 
    <button onClick={handleToggle}>Toggle Theme: </button>
  
    
    
    </div>
  ); 
}

export default Footer;