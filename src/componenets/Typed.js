import React, { useRef, useState } from 'react';

function Typed() {

const  inputRef = useRef();

const [inputValue, setInputValue] = useState();

const handleClick = ()=>{
    const  typedContent= inputRef.current.value;
    setInputValue(typedContent);
    
}
  

  return (
    <div>
      <input ref={inputRef}/>
      <button onClick={handleClick}>Check</button>
      <p>Typed: {inputValue}</p>
    </div>
  );
}

export default Typed;