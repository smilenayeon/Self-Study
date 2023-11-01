import React,{useState} from 'react'

function Survey() {
  const [score, setScore]=useState(10);
  const [comment,setComment]=useState("");

  const handleSubmit = (e)=>{
    e.preventDefault();
    setScore(10);
       alert("Thank you for the feedback!");
  };
 const isDisabled= Number(score) < 6 && comment.length < 10;

  const textAreaPlaceholder = isDisabled ? "provide the reason(mininum 10 letters) please" : "this is optional";

return (

    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="ChefScore">Chef.A : {score}/10</label>
        <input type="range" min="0" max="10" value={score} name="chefScore" onChange={(e)=>setScore(e.target.value)}/>
        <input type="submit" value="submit" name="submit" disabled={isDisabled}/>
        <p>Why?</p>
        <textarea name="comment" placeholder={textAreaPlaceholder} value={comment} onChange={(e)=>{setComment(e.target.value);}}></textarea>
      </form>
      
    </div>
  );
};

export default Survey;