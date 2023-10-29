import React, { useRef, useState } from 'react';

function Typed() {

const  inputRef = useRef();

const [inputValue, setInputValue] = useState();

const handleClick = (e)=>{
    e.preventDefault();
    const  typedContent= inputRef.current.value;
    setInputValue(typedContent);
  
    
}
  

  return (
    <div>
    <form>
    <lable htmlFor="typedInput">Typed-useRef practice</lable>
      <input key="typedInput" ref={inputRef}  name="typedInput" />
      <button onClick={handleClick}>Check</button>
      </form>
      <p>Typed: {inputValue}</p>
    </div>
  );
}

export default Typed;