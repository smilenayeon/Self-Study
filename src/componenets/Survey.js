import React,{useState} from 'react'

function Survey() {
  const [score, setScore]=useState("(?)");

  const handleSubmit = (e)=>{
    e.preventDefault();
    setScore("(?)");
       alert("Thank you for the feedback!");
  };
  return (

    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="ChefScore">Chef.A : {score}/10</label>
        <input type="range" min="0" max="10" value={score} name="chefScore" onChange={(e)=>setScore(e.target.value)}/>
        <input type="submit" value="submit" name="submit"/>
      </form>
      
    </div>
  )
}

export default Survey;