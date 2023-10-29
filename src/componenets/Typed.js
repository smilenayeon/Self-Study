import React, {useEffect, useRef,useState} from 'react'

function Typed() {

const inputRef = useRef();

useEffect(()=>{
    inputRef.current.focus();
},[]);

  return (
    <div>
    <input ref={inputRef} type="text"/>

    </div>
  )
}

export default Typed;