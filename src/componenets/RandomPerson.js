import React,{useEffect, useState} from 'react';

function RandomPerson() {

const [person,setPerson]=useState([]);

useEffect(()=>{
    fetch("https://randomuser.me/api/?results=1")
    .then((res)=>res.json())
    .then((data=>setPerson(data)));
},[]);

  return Object.keys(person).length > 0 ?(
 <div>
    <h3>Random Person</h3>
    <h4>Name:{person.results[0].name.first} {person.results[0].name.last}</h4>
    <img src={person.results[0].picture.thumbnail} alt="random person"/>
    </div>)
    :
    (<h1>Data pending...</h1>
  );
}

export default RandomPerson;