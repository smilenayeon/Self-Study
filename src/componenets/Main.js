import React, {useContext} from 'react';
import { themeContext } from '../App';

function Main() {
    const sharedStyle= useContext(themeContext);
  return (
    <div className="main"  style= {sharedStyle.style}>
   This is the main page for Diana.
    </div>
  )
}

export default Main;